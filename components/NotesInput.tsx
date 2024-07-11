"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ProblemWithProgress } from "@/types/problems";
import updateNotes from "@/actions/problems/updateNotes";

const FormSchema = z.object({
  notes: z.string().max(1000, {
    message:
      "To encourage writing short, simple, and concise notes, a 1000-character limit has been set.",
  }),
});

interface Props {
  userId: string | undefined;
  problem: ProblemWithProgress;
}

export function NotesInput({ userId, problem }: Props) {
  const [loading, setLoading] = useState(false);
  const [savedNotes, setSavedNotes] = useState<string>(
    problem.progress?.notes || ""
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      notes: problem.progress?.notes || "",
    },
  });

  useEffect(() => {
    if (problem.progress?.notes) {
      setSavedNotes(problem.progress.notes);
      form.reset({ notes: problem.progress.notes });
    }
  }, [problem, form]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!userId) {
      toast("You need to be logged in to save personal notes.");
      return;
    }

    const previousNotes = savedNotes;
    setSavedNotes(data.notes); // Optimistic update

    try {
      setLoading(true);
      await updateNotes(userId, problem.id, data.notes);
      // Update the stale problem data directly
      if (problem.progress) {
        problem.progress.notes = data.notes;
      }
      toast("Your personal notes for the problem are saved.");

      // Error handling
    } catch (error) {
      setSavedNotes(previousNotes); // Revert on error
      form.reset({ notes: previousNotes });
      toast("Failed to save notes. Please try again.");

      // After it's all said and done, turn the loading state off
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="focus-visible:ring-neutral-600 min-h-[100px] ring-offset-transparent"
                    {...field}
                    value={savedNotes}
                    onChange={(e) => {
                      setSavedNotes(e.target.value);
                      field.onChange(e);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground font-medium">
              {form.watch("notes").length}/1000 characters
            </div>
            <Button
              type="submit"
              size="sm"
              className="hover:bg-neutral-700 bg-neutral-800 text-neutral-300 hover:text-white"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

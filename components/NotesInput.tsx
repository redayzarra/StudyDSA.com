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
import updateNotes from "@/actions/questions/updateNotes";
import getNotes from "@/actions/questions/getNotes"; // Assuming you have a function to fetch notes

const FormSchema = z.object({
  notes: z.string().max(1000, {
    message:
      "To encourage writing short, simple, and concise notes, a 1000-character limit has been set.",
  }),
});

interface Props {
  userId: string | undefined;
  problemId: string;
}

const isEmptyContent = (content: string): boolean => {
  const plainText = content.replace(/<[^>]+>/g, "").trim();
  return plainText === "";
};

export function NotesInput({ userId, problemId }: Props) {
  const [loading, setLoading] = useState(false);
  const [savedNotes, setSavedNotes] = useState<string>("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      notes: "",
    },
  });

  useEffect(() => {
    async function fetchInitialData() {
      if (!userId) {
        return;
      }
      try {
        const notes = await getNotes(userId, problemId);
        const notesValue = notes ?? ""; // Ensure notes is a string
        setSavedNotes(notesValue);
        form.reset({ notes: notesValue }); // Set form's default value
      } catch (error) {
        toast("Failed to load notes. Please try again.");
      }
    }

    fetchInitialData();
  }, [userId, problemId, form]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!userId) {
      toast("You need to be logged in to save personal notes.");
      return;
    }

    try {
      setLoading(true);
      await updateNotes({ userId, problemId, notes: data.notes });
      toast("Your personal notes for the problem are saved.");
      setSavedNotes(data.notes);
    } catch (error) {
      toast("Failed to save notes. Please try again.");
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
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between">
            <div></div>
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

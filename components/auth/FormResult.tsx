import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

interface Props {
  message?: string;
  error?: boolean;
}

const FormResult = ({ message, error }: Props) => {
  if (!message) return null;

  return error ? (
    <div className="bg-destructive/25 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive dark:text-red-500">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  ) : (
    <div className="bg-emerald-500/25 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-700 dark:text-emerald-500">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormResult;

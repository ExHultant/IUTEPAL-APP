import PropTypes from "prop-types";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { Button, Text } from "@tremor/react";

export default function FileLoad({ className, onFileChange }) {
  return (
    <Button
      variant="secondary"
      type="button"
      className={`relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 ${className}`}
    >
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={onFileChange}
      />
      <DocumentIcon className="mx-auto h-12 w-12 text-quartary" />
      <Text className="mt-2 block text-sm font-semibold text-quartary">
        Importar Reposo
      </Text>
    </Button>
  );
}

FileLoad.propTypes = {
  className: PropTypes.string.isRequired,
  onFileChange: PropTypes.func.isRequired,
};

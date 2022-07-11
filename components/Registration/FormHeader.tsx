/**
 * Developer-defined UI components/hooks/constants.
 */
import AlertBox from "@Alerts/AlertBox";

interface IFormHeader {
  text?: string;
  success?: string;
  error?: string;
}

const FormHeader: React.FC<IFormHeader> = ({ text, success, error }) => {
  return (
    <>
      {text && (
        <p
          className="text-[#535772] text-base tracking-[-0.01875rem] 
                      leading-6 m-0 mb-4"
        >
          {text}
        </p>
      )}

      {success && (
        <AlertBox
          message={success}
          severity="success"
          isOpen={success.length > 0}
          keepOpen={true}
        />
      )}

      {error && (
        <AlertBox
          message={error}
          severity="error"
          isOpen={error.length > 0}
          keepOpen={true}
          showAction={true}
        />
      )}
    </>
  );
};

export default FormHeader;

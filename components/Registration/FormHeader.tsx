/**
 * Developer-defined UI components/hooks/constants.
 */
import AlertBox from "@Alerts/AlertBox";

interface IFormHeader {
  text: string;
  error: string;
}

const FormHeader: React.FC<IFormHeader> = ({ text, error }) => {
  return (
    <>
      {/* <p className="font-WorkSans_SemiBold text-[#535772] text-base tracking-[-0.01875rem] leading-6 m-0 text-center">
        {text}
      </p> */}

      {error && (
        <AlertBox
          message={error}
          severity="error"
          isOpen={error.length > 0}
          keepOpen={true}
        />
      )}
    </>
  );
};

export default FormHeader;

import Script from "next/script";

const LoadingPhrase: React.FC<{ children: string }> = ({ children }) => {
  return <div className={`wdt-loading-phrase`}>{children}</div>;
};

export default function FeedLoader() {
  return (
    <div className="wdt-loading-screen w-full h-full bg-white fixed z-[509999] top-0 left-0">
      <div className="wdt-loading-phrases">
        <div className="wdt-loading-phrase-category" data-category="default">
          <LoadingPhrase>Sending requests...</LoadingPhrase>
          <LoadingPhrase>Attempting to download resources...</LoadingPhrase>
          <LoadingPhrase>Preparing assets...</LoadingPhrase>
          <LoadingPhrase>Sorting and filtering data...</LoadingPhrase>
          <LoadingPhrase>Keeping connection alive...</LoadingPhrase>
        </div>
      </div>

      <Script src="/loading-anim.js" strategy="lazyOnload"></Script>
    </div>
  );
}

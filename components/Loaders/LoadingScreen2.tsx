export default function LoadingScreen2() {
  return (
    <div
      className="w-1/2 relative top-1/2 -translate-y-1/2 mx-auto 
                 text-center text-lg font-WorkSans_Bold"
    >
      You can use hover or tap over a new word to see its meaning.
      <span
        className="block mt-2 mb-7 mx-0 text-sm font-WorkSans_Medium 
                 text-[#BDBDBD]"
      >
        - Your friends at Mmuo
      </span>
      <span
        className="inline-block w-9 h-9 border-[5px] border-[#BDBDBD] 
                 border-t-[#039BE5] border-l-[#039BE5] rounded-full 
                  animate-spin"
      ></span>
    </div>
  );
}

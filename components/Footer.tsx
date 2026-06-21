export default function Footer() {
  return (
    <footer className="bg-[#ffffff] py-8 text-center text-black">
      <p className="text-[18px] italic underline md:text-[18px]">
        "She is clothed with strength and dignity, and she
        laughs without fear of the future"
      </p>

      <p className="mt-2 text-[18px] italic md:text-[18px]">
        - Proverbs 31:25
      </p>

      <div className="mt-8 pt-4">
        <p className="text-[14px] md:text-[16px]">
          © {new Date().getFullYear()} Annes Jebasingh Jebamony.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-10 border-t border-on-surface/5">
      <div className="max-w-[1360px] mx-auto px-5 md:px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-[20px] leading-[28px] text-on-surface tracking-tight font-bold">
            Syaikah Azzura Zahra Mustafa
          </span>
          <span className="text-[14px] leading-[20px] text-on-surface-variant text-center md:text-left">
            Informatics Engineering • Ikatan Kerja PT PLN at Institut Teknologi PLN
          </span>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
          <span className="font-mono text-[11px] font-semibold text-on-surface-variant tracking-wider uppercase">
            © 2026 Syaikah Azzura Zahra Mustafa
          </span>
          <span className="text-[14px] leading-[20px] text-on-surface-variant">
            Makassar · Jakarta Barat — Built with care
          </span>
        </div>
      </div>
    </footer>
  );
}

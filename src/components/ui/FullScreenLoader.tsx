export default function FullScreenLoader() {
  return (
    <div className="fixed inset-0 bg-white/70 z-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
    </div>
  );
}

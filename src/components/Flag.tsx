export default function Flag({ locale }: { locale: string }) {
  return <img src={`/flags/${locale}.svg`} className="w-8 h-8" alt="Flag" />;
}

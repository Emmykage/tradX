export default function getEnv(name: string) {
  return (
    (window as any)?.configs?.[name] ||
    ((import.meta as any).env[name] as string)
  );
}

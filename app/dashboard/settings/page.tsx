import SignoutButton from "@/components/buttons/SignoutButton";
import { getSession } from "@/lib/session";

const SettingsPage = async () => {
  const session = await getSession();
  return (
    <main className="h-full space-y-0 main">
      <h1 className="section-title">Settings</h1>
      <section className="flex flex-col justify-center h-full">
        <SignoutButton />
      </section>
    </main>
  );
};

export default SettingsPage;

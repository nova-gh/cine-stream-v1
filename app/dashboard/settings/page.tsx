import SignoutButton from "@/components/buttons/SignoutButton";
import { getSession } from "@/lib/session";

const SettingsPage = async () => {
  const session = await getSession();
  return (
    <main className="space-y-0 main">
      <h1 className="section-title">Settings</h1>
      <section className="flex flex-col flex-1 h-full ">
        <div className="self-end mt-auto">
          <SignoutButton />
        </div>
      </section>
    </main>
  );
};

export default SettingsPage;

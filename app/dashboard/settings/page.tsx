import SignoutButton from "@/components/buttons/SignoutButton";

const SettingsPage = async () => {
  return (
    <main className="main space-y-0">
      <h1 className="section-title">Settings</h1>
      <section className="flex h-full flex-1 flex-col ">
        <div className="mt-auto self-end">
          <SignoutButton />
        </div>
      </section>
    </main>
  );
};

export default SettingsPage;

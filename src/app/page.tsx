import PrestamoForm from "./forms/PrestamoForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="col-md-4  d-flex justify-content-center bg-primary">
        {<PrestamoForm/>}
      </div>
    </main>
  );
}

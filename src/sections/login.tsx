import { useState } from "react";

type LoginProps = {
  onUnlock: () => void;
};

export function Login({ onUnlock }: LoginProps) {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);

  const SENHA = "minhaprincesa";

  function entrar(e: React.FormEvent) {
    e.preventDefault();

    if (senha === SENHA) {
      onUnlock();
    } else {
      setErro(true);
      setSenha("");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f0e8] px-6">
      <form
        onSubmit={entrar}
        className="w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-xl"
      >
        <div className="mb-4 text-4xl">🤍</div>
        <h1 className="mb-3 font-serif text-3xl text-rose-900">
          Uma surpresa para você
        </h1>

        <div className="w-full justify-items-center">
          <img className="w-15  " src="/photos/stitch.jpg" />
        </div>
        <p className="mb-6 text-gray-600">
          Algumas histórias merecem ser lembradas...
        </p>
        <input
          type="password"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
            setErro(false);
          }}
          placeholder="Digite a senha"
          className="text-black mb-4 w-full rounded-xl border border-rose-200 p-3 outline-none focus:border-rose-500"
        />
        {erro && (
          <p className="mb-4 text-sm text-rose-600">
            Essa não é a chave certa. Tente novamente ❤️
          </p>
        )}
        <button
          type="submit"
          className="w-full rounded-xl bg-rose-700 py-3 text-white transition hover:bg-rose-800"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}

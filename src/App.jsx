import { useState, useEffect } from 'react';
import { db } from './services/firebase';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';

function App() {
  const [aba, setAba] = useState('km'); // 'km' ou 'fuel'
  const [kmInicial, setKmInicial] = useState('');
  const [setor, setSetor] = useState('');
  const [valorCombustivel, setValorCombustivel] = useState('');
  const [litros, setLitros] = useState('');
  const [totalGasto, setTotalGasto] = useState(0);

  const AUXILIO_FIXO = 827.00;

  // Função para buscar gastos e calcular lucro
  const carregarGastos = async () => {
    const q = query(collection(db, "abastecimentos"));
    const querySnapshot = await getDocs(q);
    let total = 0;
    querySnapshot.forEach((doc) => {
      total += Number(doc.data().valor);
    });
    setTotalGasto(total);
  };

  useEffect(() => {
    carregarGastos();
  }, []);

  const handleSalvarKm = async () => {
    if(!kmInicial) return alert("Digite o KM!");
    await addDoc(collection(db, "registros_diarios"), {
      km: Number(kmInicial), setor, data: new Date(), tipo: 'SAIDA'
    });
    alert("KM registrado!");
    setKmInicial('');
  };

  const handleSalvarAbastecimento = async () => {
    if(!valorCombustivel) return alert("Digite o valor!");
    await addDoc(collection(db, "abastecimentos"), {
      valor: Number(valorCombustivel), litros: Number(litros), data: new Date()
    });
    alert("Abastecimento registrado!");
    setValorCombustivel('');
    setLitros('');
    carregarGastos(); // Atualiza o dashboard
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 font-sans max-w-md mx-auto">
      <header className="mb-6 mt-4">
        <h1 className="text-2xl font-black text-biz-red italic">BIZ MANAGER v1.0</h1>
        <p className="text-slate-500 text-sm">Controle de Lucratividade</p>
      </header>

      {/* DASHBOARD FINANCEIRO */}
      <div className="bg-biz-dark p-6 rounded-3xl shadow-xl mb-6 text-white bg-[#1D3557]">
        <p className="text-xs opacity-70 uppercase font-bold mb-1">Margem de Lucro (Mês)</p>
        <h2 className="text-4xl font-black text-green-400">
          R$ {(AUXILIO_FIXO - totalGasto).toFixed(2)}
        </h2>
        <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-sm">
          <span>Auxílio: R$ {AUXILIO_FIXO}</span>
          <span className="text-red-400 font-bold">Gastos: R$ {totalGasto.toFixed(2)}</span>
        </div>
      </div>

      {/* SELETOR DE ABA */}
      <div className="flex gap-2 mb-6">
        <button 
          onClick={() => setAba('km')}
          className={`flex-1 py-3 rounded-xl font-bold transition-all ${aba === 'km' ? 'bg-biz-red text-white' : 'bg-white text-slate-400'}`}
        >
          📍 Rotas
        </button>
        <button 
          onClick={() => setAba('fuel')}
          className={`flex-1 py-3 rounded-xl font-bold transition-all ${aba === 'fuel' ? 'bg-biz-red text-white' : 'bg-white text-slate-400'}`}
        >
          ⛽ Posto
        </button>
      </div>

      {/* CONTEÚDO DAS ABAS */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        {aba === 'km' ? (
          <div className="space-y-4">
            <h3 className="font-bold text-slate-800">Registrar Início do Dia</h3>
            <input type="number" placeholder="KM Inicial" value={kmInicial} onChange={e => setKmInicial(e.target.value)} className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-biz-red"/>
            <input type="text" placeholder="Setor de atuação" value={setor} onChange={e => setSetor(e.target.value)} className="w-full p-4 bg-slate-100 rounded-2xl outline-none"/>
            <button onClick={handleSalvarKm} className="w-full bg-biz-red text-white font-bold py-4 rounded-2xl shadow-lg">SALVAR ROTA</button>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="font-bold text-slate-800">Lançar Abastecimento</h3>
            <input type="number" placeholder="Valor Pago (R$)" value={valorCombustivel} onChange={e => setValorCombustivel(e.target.value)} className="w-full p-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-biz-red"/>
            <input type="number" placeholder="Litros" value={litros} onChange={e => setLitros(e.target.value)} className="w-full p-4 bg-slate-100 rounded-2xl outline-none"/>
            <button onClick={handleSalvarAbastecimento} className="w-full bg-green-600 text-white font-bold py-4 rounded-2xl shadow-lg">CONFIRMAR PAGAMENTO</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
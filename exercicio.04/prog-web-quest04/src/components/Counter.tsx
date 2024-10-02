// Criar um Componente de Contador com Efeitos Colaterais

// O contator deve ser parecido com o timer e ir incrementando 1 a cada 1000 milissegundos. 

// Criar um componente chamado Contador ou Counter

// Use o useState para manter o estado do contador.
// Use o useEffect para iniciar um intervalo que aumenta o contador a cada segundo (dica, use o setTimeout ou o setInterval junto).
// Adicione um botão para parar o contador, que deve limpar o intervalo.
// Exiba o valor atual do contador na tela.

import { useState, useEffect } from "react";

export function Counter() {
    const [time, setTime] = useState(0);
    const [counter, setCounter] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function start() {
        setIsActive(true);
    }

    function stop() {
        setIsActive(false);
    }

    function restart() {
        setCounter(0);
        setIsActive(true);
    }

    useEffect(() => {
        if (isActive) {
            setTimeout(() => {
                setCounter(counter + 1);
                setTime(time + 1);
            }, 1000)
        }
    }, [isActive, time]);

    return (
        <div className="bg-red-600 items-center justify-between font-mono font-medium text-2xl text-center ali w-80  p-4 h-60 m-4 text-white rounded-lg">
            <p>Contador: {counter}</p>
            <button className="mr-1 bg-slate-400 px-2 rounded-md" onClick={start}>start</button>
            <button className=" mr-1 ml-1 bg-slate-400 px-2 rounded-md" onClick={stop}>stop</button>
            <button className="ml-1 bg-slate-400 px-2 rounded-md" onClick={restart}>restart</button>
        </div>
    );
}
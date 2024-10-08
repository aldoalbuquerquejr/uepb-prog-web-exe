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
    const [currentButton, setCurrentButton] = useState<'start' | 'stop' | 'restart'>('start');

    function start() {
        setIsActive(true);
        setCurrentButton('stop');
    }

    function stop() {
        setIsActive(false);
        setCurrentButton('restart');
    }

    function restart() {
        setCounter(0);
        setIsActive(true);
        setCurrentButton('stop');
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
        <div className="bg-red-600 flex flex-col items-center justify-center font-mono font-medium text-2xl text-center w-80  p-4 h-80 m-4 text-white rounded-full">
            <p>Contador: {counter}</p>
            {currentButton === 'start' && (
                <button className="mr-1 bg-slate-500 px-2 rounded-md hover:bg-slate-400" onClick={start}>start</button>
            )}

            {currentButton === 'stop' && (
                <button className=" mr-1 ml-1 bg-slate-500 px-2 rounded-md hover:bg-slate-400" onClick={stop}>stop</button>
            )}

            {currentButton === 'restart' && (
                <div className="flex items-center justify-center">
                    <button className="mr-1 bg-slate-500 px-2 rounded-md hover:bg-slate-400" onClick={start}>continue</button>
                    <button className="ml-1 bg-slate-500 px-2 rounded-md hover:bg-slate-400" onClick={restart}>restart</button>
                </div>
            )}
        </div>
    );
}
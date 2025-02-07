"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Pakka?",
      "Tussi pyar ni krte?",
      "Please bubu",
      "Shorry na as ni chidu",
      "Ami tomake bhalo bhashi n..",
      "pillu itk ni chidu n..",
      "kiti vela vicharl me..",
      "Maan jao na...",
      "aye nahi aiknar a me..",
      "bubu i love uh n..",
      "*crying*",
      "itk????",
      "noi yes bol.. ",
      "shistit proposal accept kr!! pls..:(",
      "seriously?? shorry n baba..",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center bg-red-200 mt-7">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/tl4tMev7ICEAAAAM/instagram-zefexwoo-shaurya.gif" />
          <div> <h2 className="font-bold text-center text-5xl font-serif mt-3">YESH!!! I love you bubu!!</h2>
    
            <p className="font-mono p-8 text-xl">shorry... me nahi vagnar ts prt.. maaf krun de n, pls.Tula hurt nahi kraych a mala.. Bs hya time smjun ghe n, next time pasun me chukli tr tu sang me aikun gheil.. smjav mala, apn krt jau sort. time lagel pn banel me tula pahije tshi.. Pls asa naraz nko rahu n.. sod ata topic to.. </p>
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media.tenor.com/RG_lIajbbtQAAAAj/milk-and-mocha.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine? Please bubu.. </h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-rose-500 px-4 py-2 font-bold text-white hover:bg-rose-600`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-slate-600 px-4 py-2 font-bold text-white hover:bg-slate-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

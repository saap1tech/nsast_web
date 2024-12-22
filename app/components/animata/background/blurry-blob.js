import React from "react";
import { clsx as cn } from 'clsx';


export default function BlurryBlob({ className, firstBlobColor, secondBlobColor }) {
  return (
    
    <div className="min-h-0 min-w-1600 items-center justify-center">
         <style>
        {`
          @keyframes blobMovement {
            0% {
              top: 0;
              left: 0;
              transform: scale(0.5);
            }
            25% {
              top: 0;
              left: 100%;
              transform: scale(1);
            }
            50% {
              top: 100%;
              left: 100%;
              transform: scale(1.5);
            }
            75% {
              top: 100%;
              left: 0;
              transform: scale(1);
            }
            100% {
              top: 0;
              left: 0;
              transform: scale(0.5);
            }
          }
        `}
      </style>

      <div className="relative w-full max-w-lg">
        <div
         style={{
            width: '100px',  
            height: '100px', 
            animation: 'blobMovement 10s ease-in-out infinite',
            top: '0',
            left: '0',
          }}
          className={cn(
            "absolute -right-40 -top-23 h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-5 mix-blend-multiply blur-3xl filter",
            className,
            firstBlobColor
          )}
        ></div> 
        <div
          className={cn(
            "absolute -left-40 -top-23 h-72 w-72 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            secondBlobColor
          )}
        ></div>
      </div>
    </div>
  );
}

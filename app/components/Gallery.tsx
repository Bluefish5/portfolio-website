'use client';

import Image from "next/image";
import { useState } from "react";


type Props = {
    images: string[];
    folder: string;
};

export default function Gallery({ images, folder }: Props) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const selectedImage = selectedIndex !== null ? `/images/${folder}/${images[selectedIndex]}` : null;

    const prevImage = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
        }
    };

    const nextImage = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % images.length);
        }
    };

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        className="relative w-full h-48 rounded overflow-hidden cursor-pointer"
                        onClick={() => setSelectedIndex(idx)}
                    >
                        <Image
                            src={`/images/${folder}/${img}`}
                            alt={`Gallery image ${idx + 1}`}
                            fill
                            className="object-cover hover:brightness-110 transition duration-200"
                        />
                    </button>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={() => setSelectedIndex(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh] w-full px-4 flex items-center justify-center">
                        {/* LEFT ARROW */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prevImage();
                            }}
                            className="absolute left-2 text-white text-4xl p-2 hover:scale-110 transition"
                        >
                            <span className="text-white text-4xl">‹</span>
                        </button>

                        {/* IMAGE */}
                        <Image
                            src={selectedImage}
                            alt="Full view"
                            width={1200}
                            height={800}
                            className="object-contain w-full h-auto rounded"
                        />

                        {/* RIGHT ARROW */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                            }}
                            className="absolute right-2 text-white text-4xl p-2 hover:scale-110 transition"
                        >
                            <span className="text-white text-4xl">›</span>
                        </button>

                        {/* CLOSE BUTTON */}
                        <button
                            className="absolute top-2 right-2 text-white text-3xl font-bold"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedIndex(null);
                            }}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

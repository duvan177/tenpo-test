import { Product } from "@/types/product";
import React, { useState } from "react";
import { CardProduct } from "./cardProduct";

interface CardListProps {
  items: Product[];
}

const CardList: React.FC<CardListProps> = ({ items }) => {
  const ITEM_HEIGHT = 200;
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(564);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const itemRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (!containerRef.current) return;

    const updateHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.clientHeight;
        setContainerHeight(height);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const totalItems = items.length;
  const totalHeight = totalItems * ITEM_HEIGHT;

  const primerItem = Math.floor(scrollTop / ITEM_HEIGHT);
  const itemsInViewport = Math.ceil(containerHeight / ITEM_HEIGHT);
  const buffer = 3;

  const startIndex = Math.max(0, primerItem - buffer);
  const endIndex = Math.min(totalItems, primerItem + itemsInViewport + buffer);

  const itemsToRender = items.slice(startIndex, endIndex);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  const getPositionTopWithEspace = (index: number) => {
    return index * ITEM_HEIGHT;
  };

  return (
    <>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="grid grid-cols-1 md:grid-cols-1  md: gap-6 md:w-1xl mx-auto sm:w-1xl  md:p-4"
        style={{
          height: "80vh",
          overflowY: "auto",
          background: "#fff",
          position: "relative",
          scrollbarWidth: "none", 
          msOverflowStyle: "none", 
          WebkitOverflowScrolling: "touch", 
        }}
      >
        <div
          style={{
            position: "relative",
            height: `${totalHeight}px`,
          }}
        >
          {itemsToRender.map((item, arrayIndex) => {
            const realIndex = startIndex + arrayIndex;

            return (
              <CardProduct
                ref={itemRef}
                key={item.id}
                item={item}
                style={{
                  position: "absolute",
                  top: `${getPositionTopWithEspace(realIndex)}px`,
                  width: "100%",
                  height: `auto`,
                  padding: "20px",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

// <div
//   ref={containerRef}
//   style={styles.container}
//   onScroll={handleScroll}
//   className="grid grid-cols-1 md:grid-cols-1  gap-6 md:w-1xl mx-auto sm:w-1xl max-h-lvw overflow-y-auto p-4"
// >
//   {items?.map((item) => (
//     <CardProduct key={item.id} item={item} />
//   ))}
// </div>

export default CardList;

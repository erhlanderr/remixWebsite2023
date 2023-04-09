import { useState, useEffect } from "react";

export default function useColumnsDimensions(columnWidthRef) {
    const getDimensions = () => (columnWidthRef.current.offsetWidth)
  
    const [dimensions, setDimensions] = useState(0)
  
    useEffect(() => {
      const handleResize = () => {
        setDimensions(getDimensions())
      }
  
      if (columnWidthRef.current) {
        setDimensions(getDimensions())
      }
  
      window.addEventListener("resize", handleResize)
  
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [columnWidthRef])
  
    return dimensions;
  };
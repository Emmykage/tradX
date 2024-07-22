


  export const createCustomMarker1 = (price:string) => {
    const marker = document.createElement('div');
    marker.style.display = 'flex';
    marker.style.position = 'absolute';
    marker.style.zIndex = '1000';
  
    const diamondContainer = document.createElement('div');
    diamondContainer.style.display = 'flex';
    diamondContainer.style.justifyContent = 'center';
    diamondContainer.style.alignItems = 'center';
  
    const diamond = document.createElement('div');
    diamond.style.width = '14px';
    diamond.style.height = '14px';
    diamond.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'; // bg-white/30
    diamond.style.transform = 'rotate(45deg)';
    diamond.style.display = 'flex';
    diamond.style.justifyContent = 'center';
    diamond.style.alignItems = 'center';
  
    const innerDiamond = document.createElement('div');
    innerDiamond.style.width = '6px';
    innerDiamond.style.height = '6px';
    innerDiamond.style.backgroundColor = 'white';
  
    diamond.appendChild(innerDiamond);
    diamondContainer.appendChild(diamond);
  
    const lineContainer = document.createElement('div');
    lineContainer.style.display = 'flex';
    lineContainer.style.justifyContent = 'center';
    lineContainer.style.alignItems = 'center';
    lineContainer.style.zIndex = '0';
    lineContainer.style.marginLeft = '-8px'; // Approximation of -ml-3
  
    const line = document.createElement('div');
    line.style.backgroundColor = 'white';
    line.style.height = '1px';
    line.style.width = '162px'; // 48 * 4px (Tailwind's default is 4px per unit)
  
    lineContainer.appendChild(line);
  
    const textContainer = document.createElement('div');
    textContainer.style.display = 'flex';
    textContainer.style.justifyContent = 'center';
    textContainer.style.alignItems = 'center';
  
    const text = document.createElement('h1');
    text.style.backgroundColor = 'white';
    text.style.color = "black"
    text.style.fontSize = "15px"
    text.style.borderRadius = '9999px'; // rounded-3xl
    text.style.padding = '3px 10px'; // px-3 py-1
    text.style.fontWeight = '600'; // font-semibold
    text.textContent = price;
  
    textContainer.appendChild(text);
  
    marker.appendChild(diamondContainer);
    marker.appendChild(lineContainer);
    marker.appendChild(textContainer);
  
    return marker;
  };



export const createCustomMarker2 = () => {
    const marker = document.createElement('div');
    marker.style.display = 'flex';
    marker.style.position = 'absolute';
    marker.style.zIndex = '1000';
  
    const circle = document.createElement('div');
    circle.style.backgroundColor = 'white';
    circle.style.borderRadius = '1000px';
    circle.style.width = '8px'; // w-3 in Tailwind is typically 12px
    circle.style.height = '8px'; // h-3 in Tailwind is typically 12px
    circle.style.position = 'relative';
  
    const solidLine = document.createElement('div');
    solidLine.style.width = '198px'; // w-56 in Tailwind is typically 224px
    solidLine.style.backgroundColor = 'rgb(34, 197, 94)'; // bg-green-500
    solidLine.style.height = '0.1px';
    solidLine.style.borderWidth = '0.1px';
    solidLine.style.borderStyle = 'solid';
    solidLine.style.borderColor = 'rgb(22, 163, 74)'; // border-green-600
    solidLine.style.position = 'absolute';
    solidLine.style.top = '3.1px';
    solidLine.style.left = '8px';
  
    const dashedLine = document.createElement('div');
    dashedLine.style.width = '195px'; // w-56 in Tailwind is typically 224px
    dashedLine.style.height = '0.1px';
    dashedLine.style.borderWidth = '0.1px';
    dashedLine.style.borderStyle = 'dashed';
    dashedLine.style.borderColor = 'rgb(22, 163, 74)'; // border-green-600
    dashedLine.style.position = 'absolute';
    dashedLine.style.top = '3.1px';
    dashedLine.style.right = '8px';
  
    circle.appendChild(solidLine);
    circle.appendChild(dashedLine);
    marker.appendChild(circle);
  
    return marker;
  };

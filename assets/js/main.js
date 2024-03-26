// element selectors 
const form = document.querySelector("form");
const btn = document.querySelector("button");
const container = document.querySelector(".container")
const finalCss = document.querySelector("#final-css")
const finalCssText = document.querySelector("textarea")

const displayOpt = document.querySelector("select[name='display']");
const wrapOpt = document.querySelector("select[name='flex-wrap']");
const dirOpt = document.querySelector("select[name='flex-direction']");
const justifyOpt = document.querySelector("select[name='justify-content']");
const alignOpt = document.querySelector("select[name='align-items']");
const rowGapOpt = document.querySelector("input[name='row-gap']");
const colGapOpt = document.querySelector("input[name='column-gap']");
const alignContentOpt = document.querySelector("select[name='align-content']");


// event listeners
form.addEventListener("submit", function(e){
  e.preventDefault();

  let finalCode = "";

  const display = displayOpt.value;
  const wrap = wrapOpt.value;
  const dir = dirOpt.value;
  const justify = justifyOpt.value;
  const align = alignOpt.value;
  const rowGap = rowGapOpt.value || 0;
  const colGap = colGapOpt.value || 0;
  const alignContent = alignContentOpt.value;

  container.style.display = display;
  container.style.flexWrap = wrap;
  container.style.flexDirection = dir;
  container.style.justifyContent = justify;
  container.style.alignItems = align;
  container.style.rowGap = rowGap;
  container.style.columnGap = colGap;
  container.style.alignContent = alignContent;

  finalCode += `display: ${display};\n`
  finalCode += `flex-wrap: ${wrap};\n`
  finalCode += `flex-direction: ${dir};\n`
  finalCode += `justify-content: ${justify};\n`
  finalCode += `align-items: ${align};\n`
  finalCode += `row-gap: ${rowGap};\n`
  finalCode += `column-gap: ${colGap};\n`
  finalCode += `align-content: ${alignContent};`

  finalCss.style.display = "block";
  finalCssText.textContent = finalCode;
})
const gatos: string[] = ['Lora', 'Logan', 'Tom'];

function exibeGatos(gatos: string[]) {
  return `Os gatos são: ${gatos.join(', ')}`;
}

console.log(exibeGatos(gatos));

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
const water = [
  "vit",
  "vurra",
  "sigha",
  "aura",
  "chang",
  "sprinkle",
  "crystal",
  "aquafinas",
  "contresax",
  "sta maria",
  "pura",
  "kerry"

];
const output = [];
const one = [];

const about = () => {
  const [value, setValue] = React.useState(output);
  const [valuewoter, setvaluewoter] = React.useState(water);

  function loop() {
    for (let x in water) {

      if (output[x].letter.includes(water[x].substring(1, 0)) != true) {
        console.log('false1', output);
        output.push({ letter: water[x].substring(1, 0), list: [water[x]] })
        console.log('false2', water[x].substring(1, 0));

      }
      else {
        output[x].list.push(water[x])
        console.log('true', output);
      }


    }


  }
  function loop3() {
    water.sort();
    for (var i = 0; i < water.length; i++) {
      if (one.indexOf(water[i].substring(1, 0)) < 0) {
        one.push(water[i].substring(1, 0));
        let aa = water.filter(big => big.substring(1, 0) == water[i].substring(1, 0));
        output.push({ letter: water[i].substring(1, 0), list: aa })
      } else {

      }
    }
    console.log('true', one);
    console.log("out", output)
    const string = JSON.stringify(output, null, 4);
    document.querySelector(".output").innerHTML = string;

  }


  function myFunc(myArray, searchCriteria) {

    return myArray.filter(function (item) {
      console.log(item)
      return item.substring(1, 0) == 'a'

    })

  }
  function loop2() {
    {
      output.map((balance) => {
        return (
          <p>letter : {(balance.letter)}  list: {(balance.list + ",")}</p>
        )
      })
    }

  }
  async function handleClick() {
    loop3();

  }
  React.useEffect(() => {
    loop3()
  }, [])
  return (

    <div>
      <Button onClick={handleClick}>Like</Button>
      {output.map((balance) => {
        return (
          <p>letter : {(balance.letter)}  list: {(balance.list + ",")}</p>
        )
      })}
      <pre class="output"></pre>

    </div>
  )
}

export default about
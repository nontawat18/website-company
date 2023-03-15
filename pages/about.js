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

];
const output = [{ letter: "a", list: ["aquafina", "aura"] },
{ letter: "c", list: ["chang", "contrex", "crystal"] },
{ letter: "p", list: ["purra"] },
{ letter: "s", list: ["sigha", "sprinkle", "sta maria"] },
];
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
  function loop2() {
    for (let x in output) {
      for(let y in water){
        if (output[x].letter == water[y].substring(1, 0)) {
          output[x].list.push(water[y])
        }
        else {
          output.push({ letter: water[y].substring(1, 0), list: [water[y]] })
          console.log('true', output);
        }
      }

    }

  }
  async function handleClick() {
    loop2();
    // const todoIdList = [1, 2, 3, 4];
    // const todoTitles = []
    // // for (const id of todoIdList) {
    // //   const response = await fetch(
    // //     `https://jsonplaceholder.typicode.com/todos/${id}`
    // //   );
    // //   const todo = await response.json(); 
    // //   todoTitles.push(todo.title)

    // // }
    // for (let id in water) {
    //   const response = await id
    //   const todo = await response;

    //   if (todoTitles.length == 0) {
    //     console.log("!else", id)
    //     console.log("!else", response)

    //     //todoTitles.push({ letter: todo.substring(1, 0), list: [todo] })
    //     if (id.letter?.includes(id.substring(1, 0)) != true) {
    //       todoTitles.push({ letter: id.substring(1, 0), list: [id] })
    //       console.log(todoTitles)

    //     }
    //     else {
    //       todoTitles.list?.push(id)
    //     }


    //   }
    //   else {
    //     console.log("else")
    //     todoTitles[id].list.push(water[id])
    //     // if (todo.letter?.includes(todo.substring(1, 0)) != true) {
    //     //   todoTitles.push({ letter: todo.substring(1, 0), list: [todo] })
    //     // }
    //     // else {
    //     //   todoTitles.list?.push(todo)
    //     // }
    //   }

    // }

    // console.log(todoTitles)
    //return { fetched: todoTitles };

  }
  return (

    <div>
      <Button onClick={handleClick}>Like</Button>
      {output.map((balance) => {
        return (
          <p>letter : {(balance.letter)}  list: {(balance.list + ",")}</p>
        )
      })}
      <Card sx={{ maxWidth: 345 }}>

        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default about
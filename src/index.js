import memeMaker from "@erickwendel/meme-maker"

const options = {
  image: './IMG/bulba.jpg',         // Required
  outfile: './IMG/process/bulba-meme.jpg',  // Required
  topText: 'Quando escolhem o',            // Required
  bottomText: 'Charmander',           // Optional
}

memeMaker(options).then(_ => {
  console.log('Image saved: ' + options.outfile)
}).catch(error => console.log(error));
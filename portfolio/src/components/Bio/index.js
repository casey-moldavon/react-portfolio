import React from 'react';
import { Card } from 'react-bootstrap';
import './style.css';


function Bio(){
    return (

        <div className="card-div">
            <Card className="text-center" id="bio-card">
                <Card.Body>
                    <Card.Title id="bio-text">Personal Bio</Card.Title>

                    <Card.Text>
                        <p> I am currently a student at Berkeley Extension Coding Bootcamp in San Francisco California. Easiest description of myself...I'm a HUGE nerd! Like, "plays Dungeons & Dragons in a basement dressed in cosplay" kind of nerd. I love movies, video games, traveling, swimming, reading, writing and much much more! Most importantly though, I love creating and this refers to many aspects of the word. I was the kid who kept switching between Knexs and Legos, building crazy invensions and elaborite stories around them. I once made an entire lego city just so I could film my cat walking through it like Godzilla (named the video: "Attack of Catzilla"). I'm also very social with a large circle of close friends from all walks of life. Living in SF, you tend to meet people from all around the world and, being a HUGE fan of diversity, I'm quite happy to live here. I have a husband, 2 cats and, once I finish this program, I'll probably be getting a dog. Growing up, my dad owned a pet supply store so our household had a LOT of pets. It's my natural enviornment as I love animals! I'm not very good at writting about myself so that's all for now. Fin!</p>
                        <p></p>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Bio;
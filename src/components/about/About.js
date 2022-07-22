import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>

            <p style={{color: info.baseColor}}> DotNet</p>
            <ul className={Style.skills}>
                {info.skills.dotNet.map(dotNets => <li>{dotNets}</li>)}
            </ul>

            <p style={{color: info.baseColor}}> Frontend</p>
            <ul className={Style.skills}>
                {info.skills.frontend.map(frontends => <li>{frontends}</li>)}
            </ul>

            <p style={{color: info.baseColor}}> Backend</p>
            <ul className={Style.skills}>
                {info.skills.backend.map(backends => <li>{backends}</li>)}
            </ul>

            <p style={{color: info.baseColor}}> Version Control</p>
            <ul className={Style.skills}>
                {info.skills.versionControl.map(versionControls => <li>{versionControls}</li>)}
            </ul>

            <p style={{color: info.baseColor}}> Database</p>
            <ul className={Style.skills}>
                {info.skills.database.map(databases => <li>{databases}</li>)}
            </ul>

            <p style={{color: info.baseColor}}> Cloud </p>
            <ul className={Style.skills}>
                {info.skills.cloud.map(clouds => <li>{clouds}</li>)}
            </ul>

          
            <p style={{color: info.baseColor}}> Frameworks</p>
            <ul className={Style.skills}>
                {info.skills.frameworks.map(framework => <li>{framework}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map(hobby => (
                    <li><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProjectService from '../service/project';
import Project from '../models/project';

export default function ProjectDetail(props: { project: Project }) {
    const project = props.project;

    return (
        <div>
            <div>{project.name}</div>
            <div>{project.summary}</div>
            <img src={project.media.previewImg} alt=""/>
            <div>{project.endDate}</div>
        </div>
    );
}

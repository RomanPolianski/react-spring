/* eslint-disable consistent-return */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ProjectService from '../services/ProjectService';

export const fetchProjects = createAsyncThunk(
  'itemsRender/fetchProjects',
  async (_, { dispatch }) => {
    try {
      const response = await ProjectService.getProjects();
      if (response.status === 200) {
        dispatch(fetchProjectsSuccess(response.data));
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);

export const fetchSearchProjects = createAsyncThunk(
  'itemsRender/fetchSearchProjects',
  async (title, { dispatch }) => {
    try {
      const response = await ProjectService.getSearchProjects(title);
      if (response.status === 200) {
        dispatch(fetchProjectsSuccess(response.data));
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);

const itemsRenderSlice = createSlice({
  name: 'itemsRender',
  initialState: {
    status: null,
    error: null,
    projects: [],
    navItems: [
      {
        id: '1',
        title: 'Why Spring',
        submenu: [
          'Overview',
          'Microservices',
          'Reactive',
          'Event Driven',
          'Cloud',
          'Web Applications',
          'Serverless',
          'Batch',
        ],
      },
      {
        id: '2',
        title: 'Learn',
        submenu: ['Overview', 'Quickstart', 'Guides', 'Blog'],
      },
      {
        id: '3',
        title: 'Projects',
        submenu: [
          'Overview',
          'Spring Boot',
          'Spring Framework',
          'Spring Cloud',
          'Spring Cloud Data Flow',
          'Spring Data',
          'Spring Integration',
          'Spring Batch',
          'Spring Security',
          'View all Projects',
          'Development Tools',
          'Spring Tools 4',
          'Spring Initializr',
        ],
      },
      {
        id: '4',
        title: 'Training',
        submenu: [],
      },
      {
        id: '5',
        title: 'Support',
        submenu: [],
      },
      {
        id: '6',
        title: 'Community',
        submenu: ['Overview', 'Events', 'Team'],
      },
    ],
    projectsAttic: [
      {
        id: '1',
        title: 'Spring IO Platform',
        text: 'Provides a cohesive, versioned platform for building modern applications. It is a modular, enterprise-grade distribution that delivers a curated set of dependencies.',
      },
      {
        id: '2',
        title: 'Spring IO Platform',
        text: 'Provides key Spring components for use in developing Android applications.',
      },
      {
        id: '3',
        title: 'Spring Flex',
        text: 'A project to make it easier to build Spring-powered Rich Internet Applications using Adobe Flex as the front-end client.',
      },
      {
        id: '4',
        title: 'Spring Integration Groovy DSL',
        text: 'A Groovy based DSL for developing Spring Integration applications.',
      },
      {
        id: '5',
        title: 'Spring Integration Scala DSL',
        text: 'A Scala based DSL for developing Spring Integration applications.',
      },
      {
        id: '6',
        title: 'Spring Mobile',
        text: 'Simplifies the development of mobile web apps through device detection and progressive rendering options.',
      },
      {
        id: '7',
        title: 'Spring Scala',
        text: 'A community run project that provides support for Spring framework development in Scala.',
      },
      {
        id: '8',
        title: 'Spring Social',
        text: 'Easily connects your applications with third-party APIs such as Facebook, Twitter, LinkedIn, and more.',
      },
      {
        id: '9',
        title: 'Spring XD',
        text: 'Simplifies the development of big data applications by addressing ingestion, analytics, batch jobs and data export.',
      },
    ],
  },
  reducers: {
    fetchProjectsSuccess(state, action) {
      state.projects = action.payload;
    },
  },
});
export const { fetchProjectsSuccess } = itemsRenderSlice.actions;

export default itemsRenderSlice.reducer;

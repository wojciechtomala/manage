import { Injectable } from '@angular/core';

// usun se to
interface NewProject {}

interface Project extends NewProject {
  _id: string;
  isSelected: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private storageKey = 'projects';

  constructor() {}

  private getProjectsFromStorage(): Project[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveProjectsToStorage(projects: Project[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(projects));
  }

  getAllProjects(): Project[] {
    return this.getProjectsFromStorage();
  }

  getProjectById(id: string): Project | undefined {
    return this.getProjectsFromStorage().find((p) => p._id === id);
  }

  createProject(newProject: NewProject): Project {
    const projects = this.getProjectsFromStorage();

    const created: Project = {
      ...newProject,
      _id: crypto.randomUUID(),
      isSelected: false,
    };

    projects.push(created);
    this.saveProjectsToStorage(projects);
    return created;
  }

  updateProject(updatedProject: Project): Project | null {
    const projects = this.getProjectsFromStorage();
    const index = projects.findIndex((p) => p._id === updatedProject._id);

    if (index === -1) return null;

    projects[index] = { ...updatedProject };
    this.saveProjectsToStorage(projects);
    return updatedProject;
  }
}

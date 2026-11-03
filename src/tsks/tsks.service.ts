import { Injectable , NotFoundException} from '@nestjs/common';
import { CreateTaskDto } from './dto/dto.js';
import { FilterTsksQueryDtoTs } from './dto/filter-tsks-query.dto.ts.js';
import { UpdateTasksDto } from './dto/update-tasks.dto.js';

@Injectable()
export class TsksService {
  private readonly tasks: any[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'This is task 1',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'This is task 2',
      isCompleted: true,
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'This is task 3',
      isCompleted: false,
    },
  ];
  findall(filter: FilterTsksQueryDtoTs): any[] {
    const { isCompleted, title,id} = filter;
    const tasks = this.tasks;
    if (isCompleted == 'true') {
      return tasks.filter((task: any) => task.isCompleted === true);
    }
    if (isCompleted == 'false') {
      return tasks.filter((task: any) => task.isCompleted === false);
    }
    if (title) {
      return tasks.filter((task: any) => task.title.includes(title));
    }
    if (id) {
      return tasks.filter((task: any) => task.id === parseInt(id));
    }
    return tasks;
  }

  // findOne(filter:FilterTsksQueryDtoTs): any {
  //   const { id } = filter;
  //   const tasks = this.tasks;
  //       if(!id){
  //     throw new NotFoundException(`Task with id ${id} not found`);
  //   }
  //   if (id) {
  //     return tasks.find((task: any) => task.id === id);
  //   }

  //   return null;
  // }


  findOne(filter: FilterTsksQueryDtoTs) {
  const { id } = filter;

  const task = this.tasks.find(
    (task: any) => task.id === id,
  );

  if (!task) {
    throw new NotFoundException(
      `Task with id ${id} not found`,
    );
  }

  return task;
}

  createTask(createTaskDto: CreateTaskDto): any {
    const newTask = {
      id: this.tasks.length + 1,
      title: `Task ${this.tasks.length + 1}`,
      description: `This is task ${this.tasks.length + 1}`,
      isCompleted: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  remove(id: string) {
    const index = this.tasks.findIndex((task: any) => task.id === parseInt(id));
    if (index === -1) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    this.tasks.splice(index, 1);
    return { message: `Task with id ${id} has been removed` };
  }

  update(id: string, updateTasksDto: UpdateTasksDto) {
    const task = this.tasks.find((task: any) => task.id === parseInt(id));
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    Object.assign(task, updateTasksDto);
    return task;
  }
}
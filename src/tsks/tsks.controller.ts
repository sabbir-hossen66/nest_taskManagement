import { Controller, Get, Query, Post, Body, Param,ParseIntPipe, Delete ,Patch} from '@nestjs/common';
import { TsksService } from './tsks.service.js';
import { CreateTaskDto } from './dto/dto.js';
import { FilterTsksQueryDtoTs } from './dto/filter-tsks-query.dto.ts.js';
import { UpdateTasksDto } from './dto/update-tasks.dto.js';

@Controller('tasks')
export class TsksController {
  constructor(private readonly tsksService: TsksService) {}
  // const tasksService = new TsksService();

  // ( it's a hhtp method to get all tasks)
  @Get()
  findAll(
    @Query() 
    filters:FilterTsksQueryDtoTs
  ): any[] {
    return this.tsksService.findall(filters);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.tsksService.findOne({id});
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): any {
    return this.tsksService.createTask(createTaskDto);
  }

  @Delete(':id')
  removeTask(@Param('id') id: string): any {
    return this.tsksService.remove(id);
  }

  @Patch(':id')
  updateTask(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateTasksDto: UpdateTasksDto
  ) {
    return this.tsksService.update(id, updateTasksDto);
  }
}

import {
    Body, Controller, Query,
    Delete, Get, Param, Post,
    UseInterceptors, UploadedFiles
} from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { ObjectId } from "mongoose";
import { CreateCommentDto } from "./dto/create-comment-dto";
import { CreateTrackDto } from "./dto/create-track-dto";
import { TrackService } from "./track.service";


@Controller("/tracks")
export class TrackController {

    constructor(private trackService: TrackService) { }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
    ]))
    create(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
        console.log(files);
        console.log("dto", dto);
        
        const { picture, audio } = files
        return this.trackService.create(dto, picture[0], audio[0])
    }

    @Get()
    getAll(@Query("count") count: number,
        @Query("offset") offset: number
    ) {
        const tracks = this.trackService.getAll(count, offset);
        return tracks;
    }

    @Get(":id")
    getOne(@Param("id") id: ObjectId) {
        const track = this.trackService.getOne(id);
        return track;
    }

    @Get("/search")
    search(@Query("query") query: string){
        const tracks = this.trackService.search(query);
    }

    @Delete(":id")
    delete(@Param("id") id: ObjectId) {
        const track = this.trackService.delete(id);
        return id;
    }

    @Post("/comment")
    addComment(@Body() dto: CreateCommentDto) {
        const comment = this.trackService.addComment(dto);
        return comment;
    }

    @Post("/listen/:id")
    listen(@Param("id") id: ObjectId) {
        return this.trackService.listen(id);
    }
}
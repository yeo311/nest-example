import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";

// PartialType을 사용해서 상속
export class UpdateMovieDto extends PartialType(CreateMovieDto) { }
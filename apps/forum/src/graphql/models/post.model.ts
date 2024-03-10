import { AbstractModel, Admin, Paginated } from '@app/common';
import { Field, ObjectType } from '@nestjs/graphql';
import { Board } from './board.model';

@ObjectType()
export class Post extends AbstractModel {
    @Field(() => Board, {})
    board: Board;

    @Field(() => String, {})
    title: string;

    @Field(() => String)
    contents: string;

    @Field(() => Boolean)
    visibility: boolean;

    @Field(() => Admin, {})
    admin: Admin;
}

@ObjectType()
export class PaginatedPost extends Paginated(Post) {}

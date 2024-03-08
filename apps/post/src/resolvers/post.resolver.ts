import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class PostResolver {
    @Query(() => String)
    list() {
        return 'Hello World';
    }
}

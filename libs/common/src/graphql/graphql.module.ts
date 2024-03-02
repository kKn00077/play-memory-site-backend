import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            playground: true, // debug mode
            autoSchemaFile: join(process.cwd(), '/schema.gql'), // 코드 or 데코레이터로 스키마 자동 생성
            sortSchema: true, // 알파벳 순으로 정렬
        }),
    ],
})
export class GraphqlModule {}

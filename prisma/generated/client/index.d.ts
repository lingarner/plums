
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Topic
 * 
 */
export type Topic = $Result.DefaultSelection<Prisma.$TopicPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model TagsOnTopic
 * 
 */
export type TagsOnTopic = $Result.DefaultSelection<Prisma.$TagsOnTopicPayload>
/**
 * Model Attachment
 * 
 */
export type Attachment = $Result.DefaultSelection<Prisma.$AttachmentPayload>
/**
 * Model Url
 * 
 */
export type Url = $Result.DefaultSelection<Prisma.$UrlPayload>
/**
 * Model Notebook
 * 
 */
export type Notebook = $Result.DefaultSelection<Prisma.$NotebookPayload>
/**
 * Model NotebookEntry
 * 
 */
export type NotebookEntry = $Result.DefaultSelection<Prisma.$NotebookEntryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Topics
 * const topics = await prisma.topic.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Topics
   * const topics = await prisma.topic.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.topic`: Exposes CRUD operations for the **Topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.TopicDelegate<ExtArgs>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs>;

  /**
   * `prisma.tagsOnTopic`: Exposes CRUD operations for the **TagsOnTopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TagsOnTopics
    * const tagsOnTopics = await prisma.tagsOnTopic.findMany()
    * ```
    */
  get tagsOnTopic(): Prisma.TagsOnTopicDelegate<ExtArgs>;

  /**
   * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.AttachmentDelegate<ExtArgs>;

  /**
   * `prisma.url`: Exposes CRUD operations for the **Url** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Urls
    * const urls = await prisma.url.findMany()
    * ```
    */
  get url(): Prisma.UrlDelegate<ExtArgs>;

  /**
   * `prisma.notebook`: Exposes CRUD operations for the **Notebook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notebooks
    * const notebooks = await prisma.notebook.findMany()
    * ```
    */
  get notebook(): Prisma.NotebookDelegate<ExtArgs>;

  /**
   * `prisma.notebookEntry`: Exposes CRUD operations for the **NotebookEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotebookEntries
    * const notebookEntries = await prisma.notebookEntry.findMany()
    * ```
    */
  get notebookEntry(): Prisma.NotebookEntryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Topic: 'Topic',
    Tag: 'Tag',
    TagsOnTopic: 'TagsOnTopic',
    Attachment: 'Attachment',
    Url: 'Url',
    Notebook: 'Notebook',
    NotebookEntry: 'NotebookEntry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'topic' | 'tag' | 'tagsOnTopic' | 'attachment' | 'url' | 'notebook' | 'notebookEntry'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Topic: {
        payload: Prisma.$TopicPayload<ExtArgs>
        fields: Prisma.TopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findFirst: {
            args: Prisma.TopicFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findMany: {
            args: Prisma.TopicFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          create: {
            args: Prisma.TopicCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          createMany: {
            args: Prisma.TopicCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TopicDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          update: {
            args: Prisma.TopicUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          deleteMany: {
            args: Prisma.TopicDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TopicUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TopicUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          aggregate: {
            args: Prisma.TopicAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTopic>
          }
          groupBy: {
            args: Prisma.TopicGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicCountArgs<ExtArgs>,
            result: $Utils.Optional<TopicCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>,
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      TagsOnTopic: {
        payload: Prisma.$TagsOnTopicPayload<ExtArgs>
        fields: Prisma.TagsOnTopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagsOnTopicFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsOnTopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagsOnTopicFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsOnTopicPayload>
          }
          findFirst: {
            args: Prisma.TagsOnTopicFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsOnTopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagsOnTopicFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsOnTopicPayload>
          }
          findMany: {
            args: Prisma.TagsOnTopicFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsOnTopicPayload>[]
          }
          create: {
            args: Prisma.TagsOnTopicCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsOnTopicPayload>
          }
          createMany: {
            args: Prisma.TagsOnTopicCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TagsOnTopicDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsOnTopicPayload>
          }
          update: {
            args: Prisma.TagsOnTopicUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsOnTopicPayload>
          }
          deleteMany: {
            args: Prisma.TagsOnTopicDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TagsOnTopicUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TagsOnTopicUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TagsOnTopicPayload>
          }
          aggregate: {
            args: Prisma.TagsOnTopicAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTagsOnTopic>
          }
          groupBy: {
            args: Prisma.TagsOnTopicGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TagsOnTopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagsOnTopicCountArgs<ExtArgs>,
            result: $Utils.Optional<TagsOnTopicCountAggregateOutputType> | number
          }
        }
      }
      Attachment: {
        payload: Prisma.$AttachmentPayload<ExtArgs>
        fields: Prisma.AttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findFirst: {
            args: Prisma.AttachmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findMany: {
            args: Prisma.AttachmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          create: {
            args: Prisma.AttachmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          createMany: {
            args: Prisma.AttachmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AttachmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          update: {
            args: Prisma.AttachmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AttachmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.AttachmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentCountArgs<ExtArgs>,
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
          }
        }
      }
      Url: {
        payload: Prisma.$UrlPayload<ExtArgs>
        fields: Prisma.UrlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UrlFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UrlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UrlFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          findFirst: {
            args: Prisma.UrlFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UrlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UrlFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          findMany: {
            args: Prisma.UrlFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>[]
          }
          create: {
            args: Prisma.UrlCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          createMany: {
            args: Prisma.UrlCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UrlDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          update: {
            args: Prisma.UrlUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          deleteMany: {
            args: Prisma.UrlDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UrlUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UrlUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          aggregate: {
            args: Prisma.UrlAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUrl>
          }
          groupBy: {
            args: Prisma.UrlGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UrlGroupByOutputType>[]
          }
          count: {
            args: Prisma.UrlCountArgs<ExtArgs>,
            result: $Utils.Optional<UrlCountAggregateOutputType> | number
          }
        }
      }
      Notebook: {
        payload: Prisma.$NotebookPayload<ExtArgs>
        fields: Prisma.NotebookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotebookFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotebookFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload>
          }
          findFirst: {
            args: Prisma.NotebookFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotebookFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload>
          }
          findMany: {
            args: Prisma.NotebookFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload>[]
          }
          create: {
            args: Prisma.NotebookCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload>
          }
          createMany: {
            args: Prisma.NotebookCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NotebookDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload>
          }
          update: {
            args: Prisma.NotebookUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload>
          }
          deleteMany: {
            args: Prisma.NotebookDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NotebookUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NotebookUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookPayload>
          }
          aggregate: {
            args: Prisma.NotebookAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNotebook>
          }
          groupBy: {
            args: Prisma.NotebookGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NotebookGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotebookCountArgs<ExtArgs>,
            result: $Utils.Optional<NotebookCountAggregateOutputType> | number
          }
        }
      }
      NotebookEntry: {
        payload: Prisma.$NotebookEntryPayload<ExtArgs>
        fields: Prisma.NotebookEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotebookEntryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotebookEntryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookEntryPayload>
          }
          findFirst: {
            args: Prisma.NotebookEntryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotebookEntryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookEntryPayload>
          }
          findMany: {
            args: Prisma.NotebookEntryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookEntryPayload>[]
          }
          create: {
            args: Prisma.NotebookEntryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookEntryPayload>
          }
          createMany: {
            args: Prisma.NotebookEntryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NotebookEntryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookEntryPayload>
          }
          update: {
            args: Prisma.NotebookEntryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookEntryPayload>
          }
          deleteMany: {
            args: Prisma.NotebookEntryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NotebookEntryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NotebookEntryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotebookEntryPayload>
          }
          aggregate: {
            args: Prisma.NotebookEntryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNotebookEntry>
          }
          groupBy: {
            args: Prisma.NotebookEntryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NotebookEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotebookEntryCountArgs<ExtArgs>,
            result: $Utils.Optional<NotebookEntryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TopicCountOutputType
   */

  export type TopicCountOutputType = {
    urls: number
    attachments: number
    subtopics: number
    tags: number
  }

  export type TopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    urls?: boolean | TopicCountOutputTypeCountUrlsArgs
    attachments?: boolean | TopicCountOutputTypeCountAttachmentsArgs
    subtopics?: boolean | TopicCountOutputTypeCountSubtopicsArgs
    tags?: boolean | TopicCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     */
    select?: TopicCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UrlWhereInput
  }


  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }


  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountSubtopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
  }


  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsOnTopicWhereInput
  }



  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    topics: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topics?: boolean | TagCountOutputTypeCountTopicsArgs
  }

  // Custom InputTypes

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsOnTopicWhereInput
  }



  /**
   * Count Type NotebookCountOutputType
   */

  export type NotebookCountOutputType = {
    entries: number
  }

  export type NotebookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | NotebookCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes

  /**
   * NotebookCountOutputType without action
   */
  export type NotebookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotebookCountOutputType
     */
    select?: NotebookCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * NotebookCountOutputType without action
   */
  export type NotebookCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotebookEntryWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Topic
   */

  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type TopicSumAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type TopicMinAggregateOutputType = {
    id: number | null
    name: string | null
    pinned: boolean | null
    parentId: number | null
  }

  export type TopicMaxAggregateOutputType = {
    id: number | null
    name: string | null
    pinned: boolean | null
    parentId: number | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    name: number
    pinned: number
    parentId: number
    _all: number
  }


  export type TopicAvgAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type TopicSumAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type TopicMinAggregateInputType = {
    id?: true
    name?: true
    pinned?: true
    parentId?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
    name?: true
    pinned?: true
    parentId?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    name?: true
    pinned?: true
    parentId?: true
    _all?: true
  }

  export type TopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topic to aggregate.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type TopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithAggregationInput | TopicOrderByWithAggregationInput[]
    by: TopicScalarFieldEnum[] | TopicScalarFieldEnum
    having?: TopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _avg?: TopicAvgAggregateInputType
    _sum?: TopicSumAggregateInputType
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }

  export type TopicGroupByOutputType = {
    id: number
    name: string
    pinned: boolean
    parentId: number | null
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type TopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pinned?: boolean
    parentId?: boolean
    urls?: boolean | Topic$urlsArgs<ExtArgs>
    attachments?: boolean | Topic$attachmentsArgs<ExtArgs>
    notebook?: boolean | Topic$notebookArgs<ExtArgs>
    parent?: boolean | Topic$parentArgs<ExtArgs>
    subtopics?: boolean | Topic$subtopicsArgs<ExtArgs>
    tags?: boolean | Topic$tagsArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectScalar = {
    id?: boolean
    name?: boolean
    pinned?: boolean
    parentId?: boolean
  }

  export type TopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    urls?: boolean | Topic$urlsArgs<ExtArgs>
    attachments?: boolean | Topic$attachmentsArgs<ExtArgs>
    notebook?: boolean | Topic$notebookArgs<ExtArgs>
    parent?: boolean | Topic$parentArgs<ExtArgs>
    subtopics?: boolean | Topic$subtopicsArgs<ExtArgs>
    tags?: boolean | Topic$tagsArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topic"
    objects: {
      urls: Prisma.$UrlPayload<ExtArgs>[]
      attachments: Prisma.$AttachmentPayload<ExtArgs>[]
      notebook: Prisma.$NotebookPayload<ExtArgs> | null
      parent: Prisma.$TopicPayload<ExtArgs> | null
      subtopics: Prisma.$TopicPayload<ExtArgs>[]
      tags: Prisma.$TagsOnTopicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      pinned: boolean
      parentId: number | null
    }, ExtArgs["result"]["topic"]>
    composites: {}
  }


  type TopicGetPayload<S extends boolean | null | undefined | TopicDefaultArgs> = $Result.GetResult<Prisma.$TopicPayload, S>

  type TopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TopicFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TopicCountAggregateInputType | true
    }

  export interface TopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topic'], meta: { name: 'Topic' } }
    /**
     * Find zero or one Topic that matches the filter.
     * @param {TopicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TopicFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TopicFindUniqueArgs<ExtArgs>>
    ): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Topic that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TopicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TopicFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TopicFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TopicFindFirstArgs<ExtArgs>>
    ): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Topic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TopicFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TopicFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TopicFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Topic.
     * @param {TopicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
    **/
    create<T extends TopicCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TopicCreateArgs<ExtArgs>>
    ): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Topics.
     *     @param {TopicCreateManyArgs} args - Arguments to create many Topics.
     *     @example
     *     // Create many Topics
     *     const topic = await prisma.topic.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TopicCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TopicCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Topic.
     * @param {TopicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
    **/
    delete<T extends TopicDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TopicDeleteArgs<ExtArgs>>
    ): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Topic.
     * @param {TopicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TopicUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TopicUpdateArgs<ExtArgs>>
    ): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Topics.
     * @param {TopicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TopicDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TopicDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TopicUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TopicUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Topic.
     * @param {TopicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
    **/
    upsert<T extends TopicUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TopicUpsertArgs<ExtArgs>>
    ): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicCountArgs>(
      args?: Subset<T, TopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicGroupByArgs['orderBy'] }
        : { orderBy?: TopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topic model
   */
  readonly fields: TopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    urls<T extends Topic$urlsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$urlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, 'findMany'> | Null>;

    attachments<T extends Topic$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    notebook<T extends Topic$notebookArgs<ExtArgs> = {}>(args?: Subset<T, Topic$notebookArgs<ExtArgs>>): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    parent<T extends Topic$parentArgs<ExtArgs> = {}>(args?: Subset<T, Topic$parentArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    subtopics<T extends Topic$subtopicsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$subtopicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findMany'> | Null>;

    tags<T extends Topic$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsOnTopicPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Topic model
   */ 
  interface TopicFieldRefs {
    readonly id: FieldRef<"Topic", 'Int'>
    readonly name: FieldRef<"Topic", 'String'>
    readonly pinned: FieldRef<"Topic", 'Boolean'>
    readonly parentId: FieldRef<"Topic", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Topic findUnique
   */
  export type TopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }


  /**
   * Topic findUniqueOrThrow
   */
  export type TopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }


  /**
   * Topic findFirst
   */
  export type TopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }


  /**
   * Topic findFirstOrThrow
   */
  export type TopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }


  /**
   * Topic findMany
   */
  export type TopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }


  /**
   * Topic create
   */
  export type TopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Topic.
     */
    data: XOR<TopicCreateInput, TopicUncheckedCreateInput>
  }


  /**
   * Topic createMany
   */
  export type TopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Topic update
   */
  export type TopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Topic.
     */
    data: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
    /**
     * Choose, which Topic to update.
     */
    where: TopicWhereUniqueInput
  }


  /**
   * Topic updateMany
   */
  export type TopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
  }


  /**
   * Topic upsert
   */
  export type TopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Topic to update in case it exists.
     */
    where: TopicWhereUniqueInput
    /**
     * In case the Topic found by the `where` argument doesn't exist, create a new Topic with this data.
     */
    create: XOR<TopicCreateInput, TopicUncheckedCreateInput>
    /**
     * In case the Topic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
  }


  /**
   * Topic delete
   */
  export type TopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter which Topic to delete.
     */
    where: TopicWhereUniqueInput
  }


  /**
   * Topic deleteMany
   */
  export type TopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to delete
     */
    where?: TopicWhereInput
  }


  /**
   * Topic.urls
   */
  export type Topic$urlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UrlInclude<ExtArgs> | null
    where?: UrlWhereInput
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    cursor?: UrlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }


  /**
   * Topic.attachments
   */
  export type Topic$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }


  /**
   * Topic.notebook
   */
  export type Topic$notebookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookInclude<ExtArgs> | null
    where?: NotebookWhereInput
  }


  /**
   * Topic.parent
   */
  export type Topic$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TopicInclude<ExtArgs> | null
    where?: TopicWhereInput
  }


  /**
   * Topic.subtopics
   */
  export type Topic$subtopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TopicInclude<ExtArgs> | null
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    cursor?: TopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }


  /**
   * Topic.tags
   */
  export type Topic$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTopic
     */
    select?: TagsOnTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsOnTopicInclude<ExtArgs> | null
    where?: TagsOnTopicWhereInput
    orderBy?: TagsOnTopicOrderByWithRelationInput | TagsOnTopicOrderByWithRelationInput[]
    cursor?: TagsOnTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsOnTopicScalarFieldEnum | TagsOnTopicScalarFieldEnum[]
  }


  /**
   * Topic without action
   */
  export type TopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TopicInclude<ExtArgs> | null
  }



  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    topics?: boolean | Tag$topicsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topics?: boolean | Tag$topicsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      topics: Prisma.$TagsOnTopicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }


  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>
    ): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tag that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>
    ): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TagFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
    **/
    create<T extends TagCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TagCreateArgs<ExtArgs>>
    ): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tags.
     *     @param {TagCreateManyArgs} args - Arguments to create many Tags.
     *     @example
     *     // Create many Tags
     *     const tag = await prisma.tag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TagCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
    **/
    delete<T extends TagDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TagDeleteArgs<ExtArgs>>
    ): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TagUpdateArgs<ExtArgs>>
    ): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
    **/
    upsert<T extends TagUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TagUpsertArgs<ExtArgs>>
    ): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    topics<T extends Tag$topicsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$topicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsOnTopicPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }


  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }


  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }


  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }


  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }


  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }


  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }


  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
  }


  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }


  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }


  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
  }


  /**
   * Tag.topics
   */
  export type Tag$topicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTopic
     */
    select?: TagsOnTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsOnTopicInclude<ExtArgs> | null
    where?: TagsOnTopicWhereInput
    orderBy?: TagsOnTopicOrderByWithRelationInput | TagsOnTopicOrderByWithRelationInput[]
    cursor?: TagsOnTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagsOnTopicScalarFieldEnum | TagsOnTopicScalarFieldEnum[]
  }


  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude<ExtArgs> | null
  }



  /**
   * Model TagsOnTopic
   */

  export type AggregateTagsOnTopic = {
    _count: TagsOnTopicCountAggregateOutputType | null
    _avg: TagsOnTopicAvgAggregateOutputType | null
    _sum: TagsOnTopicSumAggregateOutputType | null
    _min: TagsOnTopicMinAggregateOutputType | null
    _max: TagsOnTopicMaxAggregateOutputType | null
  }

  export type TagsOnTopicAvgAggregateOutputType = {
    topicId: number | null
    tagId: number | null
  }

  export type TagsOnTopicSumAggregateOutputType = {
    topicId: number | null
    tagId: number | null
  }

  export type TagsOnTopicMinAggregateOutputType = {
    topicId: number | null
    tagId: number | null
  }

  export type TagsOnTopicMaxAggregateOutputType = {
    topicId: number | null
    tagId: number | null
  }

  export type TagsOnTopicCountAggregateOutputType = {
    topicId: number
    tagId: number
    _all: number
  }


  export type TagsOnTopicAvgAggregateInputType = {
    topicId?: true
    tagId?: true
  }

  export type TagsOnTopicSumAggregateInputType = {
    topicId?: true
    tagId?: true
  }

  export type TagsOnTopicMinAggregateInputType = {
    topicId?: true
    tagId?: true
  }

  export type TagsOnTopicMaxAggregateInputType = {
    topicId?: true
    tagId?: true
  }

  export type TagsOnTopicCountAggregateInputType = {
    topicId?: true
    tagId?: true
    _all?: true
  }

  export type TagsOnTopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TagsOnTopic to aggregate.
     */
    where?: TagsOnTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnTopics to fetch.
     */
    orderBy?: TagsOnTopicOrderByWithRelationInput | TagsOnTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagsOnTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TagsOnTopics
    **/
    _count?: true | TagsOnTopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsOnTopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsOnTopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsOnTopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsOnTopicMaxAggregateInputType
  }

  export type GetTagsOnTopicAggregateType<T extends TagsOnTopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTagsOnTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTagsOnTopic[P]>
      : GetScalarType<T[P], AggregateTagsOnTopic[P]>
  }




  export type TagsOnTopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagsOnTopicWhereInput
    orderBy?: TagsOnTopicOrderByWithAggregationInput | TagsOnTopicOrderByWithAggregationInput[]
    by: TagsOnTopicScalarFieldEnum[] | TagsOnTopicScalarFieldEnum
    having?: TagsOnTopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsOnTopicCountAggregateInputType | true
    _avg?: TagsOnTopicAvgAggregateInputType
    _sum?: TagsOnTopicSumAggregateInputType
    _min?: TagsOnTopicMinAggregateInputType
    _max?: TagsOnTopicMaxAggregateInputType
  }

  export type TagsOnTopicGroupByOutputType = {
    topicId: number
    tagId: number
    _count: TagsOnTopicCountAggregateOutputType | null
    _avg: TagsOnTopicAvgAggregateOutputType | null
    _sum: TagsOnTopicSumAggregateOutputType | null
    _min: TagsOnTopicMinAggregateOutputType | null
    _max: TagsOnTopicMaxAggregateOutputType | null
  }

  type GetTagsOnTopicGroupByPayload<T extends TagsOnTopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsOnTopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsOnTopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsOnTopicGroupByOutputType[P]>
            : GetScalarType<T[P], TagsOnTopicGroupByOutputType[P]>
        }
      >
    >


  export type TagsOnTopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    topicId?: boolean
    tagId?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tagsOnTopic"]>

  export type TagsOnTopicSelectScalar = {
    topicId?: boolean
    tagId?: boolean
  }

  export type TagsOnTopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }


  export type $TagsOnTopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TagsOnTopic"
    objects: {
      topic: Prisma.$TopicPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      topicId: number
      tagId: number
    }, ExtArgs["result"]["tagsOnTopic"]>
    composites: {}
  }


  type TagsOnTopicGetPayload<S extends boolean | null | undefined | TagsOnTopicDefaultArgs> = $Result.GetResult<Prisma.$TagsOnTopicPayload, S>

  type TagsOnTopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagsOnTopicFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagsOnTopicCountAggregateInputType | true
    }

  export interface TagsOnTopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TagsOnTopic'], meta: { name: 'TagsOnTopic' } }
    /**
     * Find zero or one TagsOnTopic that matches the filter.
     * @param {TagsOnTopicFindUniqueArgs} args - Arguments to find a TagsOnTopic
     * @example
     * // Get one TagsOnTopic
     * const tagsOnTopic = await prisma.tagsOnTopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagsOnTopicFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TagsOnTopicFindUniqueArgs<ExtArgs>>
    ): Prisma__TagsOnTopicClient<$Result.GetResult<Prisma.$TagsOnTopicPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TagsOnTopic that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TagsOnTopicFindUniqueOrThrowArgs} args - Arguments to find a TagsOnTopic
     * @example
     * // Get one TagsOnTopic
     * const tagsOnTopic = await prisma.tagsOnTopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TagsOnTopicFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsOnTopicFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TagsOnTopicClient<$Result.GetResult<Prisma.$TagsOnTopicPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TagsOnTopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnTopicFindFirstArgs} args - Arguments to find a TagsOnTopic
     * @example
     * // Get one TagsOnTopic
     * const tagsOnTopic = await prisma.tagsOnTopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagsOnTopicFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsOnTopicFindFirstArgs<ExtArgs>>
    ): Prisma__TagsOnTopicClient<$Result.GetResult<Prisma.$TagsOnTopicPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TagsOnTopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnTopicFindFirstOrThrowArgs} args - Arguments to find a TagsOnTopic
     * @example
     * // Get one TagsOnTopic
     * const tagsOnTopic = await prisma.tagsOnTopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TagsOnTopicFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsOnTopicFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TagsOnTopicClient<$Result.GetResult<Prisma.$TagsOnTopicPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TagsOnTopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnTopicFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TagsOnTopics
     * const tagsOnTopics = await prisma.tagsOnTopic.findMany()
     * 
     * // Get first 10 TagsOnTopics
     * const tagsOnTopics = await prisma.tagsOnTopic.findMany({ take: 10 })
     * 
     * // Only select the `topicId`
     * const tagsOnTopicWithTopicIdOnly = await prisma.tagsOnTopic.findMany({ select: { topicId: true } })
     * 
    **/
    findMany<T extends TagsOnTopicFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsOnTopicFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagsOnTopicPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TagsOnTopic.
     * @param {TagsOnTopicCreateArgs} args - Arguments to create a TagsOnTopic.
     * @example
     * // Create one TagsOnTopic
     * const TagsOnTopic = await prisma.tagsOnTopic.create({
     *   data: {
     *     // ... data to create a TagsOnTopic
     *   }
     * })
     * 
    **/
    create<T extends TagsOnTopicCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TagsOnTopicCreateArgs<ExtArgs>>
    ): Prisma__TagsOnTopicClient<$Result.GetResult<Prisma.$TagsOnTopicPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TagsOnTopics.
     *     @param {TagsOnTopicCreateManyArgs} args - Arguments to create many TagsOnTopics.
     *     @example
     *     // Create many TagsOnTopics
     *     const tagsOnTopic = await prisma.tagsOnTopic.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TagsOnTopicCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsOnTopicCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TagsOnTopic.
     * @param {TagsOnTopicDeleteArgs} args - Arguments to delete one TagsOnTopic.
     * @example
     * // Delete one TagsOnTopic
     * const TagsOnTopic = await prisma.tagsOnTopic.delete({
     *   where: {
     *     // ... filter to delete one TagsOnTopic
     *   }
     * })
     * 
    **/
    delete<T extends TagsOnTopicDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TagsOnTopicDeleteArgs<ExtArgs>>
    ): Prisma__TagsOnTopicClient<$Result.GetResult<Prisma.$TagsOnTopicPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TagsOnTopic.
     * @param {TagsOnTopicUpdateArgs} args - Arguments to update one TagsOnTopic.
     * @example
     * // Update one TagsOnTopic
     * const tagsOnTopic = await prisma.tagsOnTopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagsOnTopicUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TagsOnTopicUpdateArgs<ExtArgs>>
    ): Prisma__TagsOnTopicClient<$Result.GetResult<Prisma.$TagsOnTopicPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TagsOnTopics.
     * @param {TagsOnTopicDeleteManyArgs} args - Arguments to filter TagsOnTopics to delete.
     * @example
     * // Delete a few TagsOnTopics
     * const { count } = await prisma.tagsOnTopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagsOnTopicDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TagsOnTopicDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TagsOnTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnTopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TagsOnTopics
     * const tagsOnTopic = await prisma.tagsOnTopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagsOnTopicUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TagsOnTopicUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TagsOnTopic.
     * @param {TagsOnTopicUpsertArgs} args - Arguments to update or create a TagsOnTopic.
     * @example
     * // Update or create a TagsOnTopic
     * const tagsOnTopic = await prisma.tagsOnTopic.upsert({
     *   create: {
     *     // ... data to create a TagsOnTopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TagsOnTopic we want to update
     *   }
     * })
    **/
    upsert<T extends TagsOnTopicUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TagsOnTopicUpsertArgs<ExtArgs>>
    ): Prisma__TagsOnTopicClient<$Result.GetResult<Prisma.$TagsOnTopicPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TagsOnTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnTopicCountArgs} args - Arguments to filter TagsOnTopics to count.
     * @example
     * // Count the number of TagsOnTopics
     * const count = await prisma.tagsOnTopic.count({
     *   where: {
     *     // ... the filter for the TagsOnTopics we want to count
     *   }
     * })
    **/
    count<T extends TagsOnTopicCountArgs>(
      args?: Subset<T, TagsOnTopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsOnTopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TagsOnTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnTopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsOnTopicAggregateArgs>(args: Subset<T, TagsOnTopicAggregateArgs>): Prisma.PrismaPromise<GetTagsOnTopicAggregateType<T>>

    /**
     * Group by TagsOnTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsOnTopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagsOnTopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagsOnTopicGroupByArgs['orderBy'] }
        : { orderBy?: TagsOnTopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagsOnTopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsOnTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TagsOnTopic model
   */
  readonly fields: TagsOnTopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TagsOnTopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagsOnTopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TagsOnTopic model
   */ 
  interface TagsOnTopicFieldRefs {
    readonly topicId: FieldRef<"TagsOnTopic", 'Int'>
    readonly tagId: FieldRef<"TagsOnTopic", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * TagsOnTopic findUnique
   */
  export type TagsOnTopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTopic
     */
    select?: TagsOnTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsOnTopicInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnTopic to fetch.
     */
    where: TagsOnTopicWhereUniqueInput
  }


  /**
   * TagsOnTopic findUniqueOrThrow
   */
  export type TagsOnTopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTopic
     */
    select?: TagsOnTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsOnTopicInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnTopic to fetch.
     */
    where: TagsOnTopicWhereUniqueInput
  }


  /**
   * TagsOnTopic findFirst
   */
  export type TagsOnTopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTopic
     */
    select?: TagsOnTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsOnTopicInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnTopic to fetch.
     */
    where?: TagsOnTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnTopics to fetch.
     */
    orderBy?: TagsOnTopicOrderByWithRelationInput | TagsOnTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagsOnTopics.
     */
    cursor?: TagsOnTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagsOnTopics.
     */
    distinct?: TagsOnTopicScalarFieldEnum | TagsOnTopicScalarFieldEnum[]
  }


  /**
   * TagsOnTopic findFirstOrThrow
   */
  export type TagsOnTopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTopic
     */
    select?: TagsOnTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsOnTopicInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnTopic to fetch.
     */
    where?: TagsOnTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnTopics to fetch.
     */
    orderBy?: TagsOnTopicOrderByWithRelationInput | TagsOnTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TagsOnTopics.
     */
    cursor?: TagsOnTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TagsOnTopics.
     */
    distinct?: TagsOnTopicScalarFieldEnum | TagsOnTopicScalarFieldEnum[]
  }


  /**
   * TagsOnTopic findMany
   */
  export type TagsOnTopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTopic
     */
    select?: TagsOnTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsOnTopicInclude<ExtArgs> | null
    /**
     * Filter, which TagsOnTopics to fetch.
     */
    where?: TagsOnTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TagsOnTopics to fetch.
     */
    orderBy?: TagsOnTopicOrderByWithRelationInput | TagsOnTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TagsOnTopics.
     */
    cursor?: TagsOnTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TagsOnTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TagsOnTopics.
     */
    skip?: number
    distinct?: TagsOnTopicScalarFieldEnum | TagsOnTopicScalarFieldEnum[]
  }


  /**
   * TagsOnTopic create
   */
  export type TagsOnTopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTopic
     */
    select?: TagsOnTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsOnTopicInclude<ExtArgs> | null
    /**
     * The data needed to create a TagsOnTopic.
     */
    data: XOR<TagsOnTopicCreateInput, TagsOnTopicUncheckedCreateInput>
  }


  /**
   * TagsOnTopic createMany
   */
  export type TagsOnTopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TagsOnTopics.
     */
    data: TagsOnTopicCreateManyInput | TagsOnTopicCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TagsOnTopic update
   */
  export type TagsOnTopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTopic
     */
    select?: TagsOnTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsOnTopicInclude<ExtArgs> | null
    /**
     * The data needed to update a TagsOnTopic.
     */
    data: XOR<TagsOnTopicUpdateInput, TagsOnTopicUncheckedUpdateInput>
    /**
     * Choose, which TagsOnTopic to update.
     */
    where: TagsOnTopicWhereUniqueInput
  }


  /**
   * TagsOnTopic updateMany
   */
  export type TagsOnTopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TagsOnTopics.
     */
    data: XOR<TagsOnTopicUpdateManyMutationInput, TagsOnTopicUncheckedUpdateManyInput>
    /**
     * Filter which TagsOnTopics to update
     */
    where?: TagsOnTopicWhereInput
  }


  /**
   * TagsOnTopic upsert
   */
  export type TagsOnTopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTopic
     */
    select?: TagsOnTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsOnTopicInclude<ExtArgs> | null
    /**
     * The filter to search for the TagsOnTopic to update in case it exists.
     */
    where: TagsOnTopicWhereUniqueInput
    /**
     * In case the TagsOnTopic found by the `where` argument doesn't exist, create a new TagsOnTopic with this data.
     */
    create: XOR<TagsOnTopicCreateInput, TagsOnTopicUncheckedCreateInput>
    /**
     * In case the TagsOnTopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagsOnTopicUpdateInput, TagsOnTopicUncheckedUpdateInput>
  }


  /**
   * TagsOnTopic delete
   */
  export type TagsOnTopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTopic
     */
    select?: TagsOnTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsOnTopicInclude<ExtArgs> | null
    /**
     * Filter which TagsOnTopic to delete.
     */
    where: TagsOnTopicWhereUniqueInput
  }


  /**
   * TagsOnTopic deleteMany
   */
  export type TagsOnTopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TagsOnTopics to delete
     */
    where?: TagsOnTopicWhereInput
  }


  /**
   * TagsOnTopic without action
   */
  export type TagsOnTopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsOnTopic
     */
    select?: TagsOnTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagsOnTopicInclude<ExtArgs> | null
  }



  /**
   * Model Attachment
   */

  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentAvgAggregateOutputType = {
    id: number | null
    topicId: number | null
  }

  export type AttachmentSumAggregateOutputType = {
    id: number | null
    topicId: number | null
  }

  export type AttachmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    comments: string | null
    pinned: boolean | null
    attachmentData: Buffer | null
    attachmentType: string | null
    topicId: number | null
  }

  export type AttachmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    comments: string | null
    pinned: boolean | null
    attachmentData: Buffer | null
    attachmentType: string | null
    topicId: number | null
  }

  export type AttachmentCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    comments: number
    pinned: number
    attachmentData: number
    attachmentType: number
    topicId: number
    _all: number
  }


  export type AttachmentAvgAggregateInputType = {
    id?: true
    topicId?: true
  }

  export type AttachmentSumAggregateInputType = {
    id?: true
    topicId?: true
  }

  export type AttachmentMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    comments?: true
    pinned?: true
    attachmentData?: true
    attachmentType?: true
    topicId?: true
  }

  export type AttachmentMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    comments?: true
    pinned?: true
    attachmentData?: true
    attachmentType?: true
    topicId?: true
  }

  export type AttachmentCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    comments?: true
    pinned?: true
    attachmentData?: true
    attachmentType?: true
    topicId?: true
    _all?: true
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type AttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithAggregationInput | AttachmentOrderByWithAggregationInput[]
    by: AttachmentScalarFieldEnum[] | AttachmentScalarFieldEnum
    having?: AttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentCountAggregateInputType | true
    _avg?: AttachmentAvgAggregateInputType
    _sum?: AttachmentSumAggregateInputType
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }

  export type AttachmentGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    comments: string | null
    pinned: boolean
    attachmentData: Buffer
    attachmentType: string
    topicId: number
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    comments?: boolean
    pinned?: boolean
    attachmentData?: boolean
    attachmentType?: boolean
    topicId?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>

  export type AttachmentSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    comments?: boolean
    pinned?: boolean
    attachmentData?: boolean
    attachmentType?: boolean
    topicId?: boolean
  }

  export type AttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }


  export type $AttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachment"
    objects: {
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      comments: string | null
      pinned: boolean
      attachmentData: Buffer
      attachmentType: string
      topicId: number
    }, ExtArgs["result"]["attachment"]>
    composites: {}
  }


  type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = $Result.GetResult<Prisma.$AttachmentPayload, S>

  type AttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface AttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachment'], meta: { name: 'Attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AttachmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Attachment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AttachmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AttachmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
    **/
    create<T extends AttachmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentCreateArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Attachments.
     *     @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     *     @example
     *     // Create many Attachments
     *     const attachment = await prisma.attachment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AttachmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
    **/
    delete<T extends AttachmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AttachmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AttachmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AttachmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
    **/
    upsert<T extends AttachmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>
    ): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(
      args?: Subset<T, AttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachment model
   */
  readonly fields: AttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Attachment model
   */ 
  interface AttachmentFieldRefs {
    readonly id: FieldRef<"Attachment", 'Int'>
    readonly name: FieldRef<"Attachment", 'String'>
    readonly createdAt: FieldRef<"Attachment", 'DateTime'>
    readonly comments: FieldRef<"Attachment", 'String'>
    readonly pinned: FieldRef<"Attachment", 'Boolean'>
    readonly attachmentData: FieldRef<"Attachment", 'Bytes'>
    readonly attachmentType: FieldRef<"Attachment", 'String'>
    readonly topicId: FieldRef<"Attachment", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Attachment findUnique
   */
  export type AttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }


  /**
   * Attachment findUniqueOrThrow
   */
  export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }


  /**
   * Attachment findFirst
   */
  export type AttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }


  /**
   * Attachment findFirstOrThrow
   */
  export type AttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }


  /**
   * Attachment findMany
   */
  export type AttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }


  /**
   * Attachment create
   */
  export type AttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachment.
     */
    data: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
  }


  /**
   * Attachment createMany
   */
  export type AttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Attachment update
   */
  export type AttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachment.
     */
    data: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
    /**
     * Choose, which Attachment to update.
     */
    where: AttachmentWhereUniqueInput
  }


  /**
   * Attachment updateMany
   */
  export type AttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
  }


  /**
   * Attachment upsert
   */
  export type AttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: AttachmentWhereUniqueInput
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
  }


  /**
   * Attachment delete
   */
  export type AttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter which Attachment to delete.
     */
    where: AttachmentWhereUniqueInput
  }


  /**
   * Attachment deleteMany
   */
  export type AttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentWhereInput
  }


  /**
   * Attachment without action
   */
  export type AttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentInclude<ExtArgs> | null
  }



  /**
   * Model Url
   */

  export type AggregateUrl = {
    _count: UrlCountAggregateOutputType | null
    _avg: UrlAvgAggregateOutputType | null
    _sum: UrlSumAggregateOutputType | null
    _min: UrlMinAggregateOutputType | null
    _max: UrlMaxAggregateOutputType | null
  }

  export type UrlAvgAggregateOutputType = {
    id: number | null
    topicId: number | null
  }

  export type UrlSumAggregateOutputType = {
    id: number | null
    topicId: number | null
  }

  export type UrlMinAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    createdAt: Date | null
    comments: string | null
    pinned: boolean | null
    topicId: number | null
  }

  export type UrlMaxAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    createdAt: Date | null
    comments: string | null
    pinned: boolean | null
    topicId: number | null
  }

  export type UrlCountAggregateOutputType = {
    id: number
    name: number
    url: number
    createdAt: number
    comments: number
    pinned: number
    topicId: number
    _all: number
  }


  export type UrlAvgAggregateInputType = {
    id?: true
    topicId?: true
  }

  export type UrlSumAggregateInputType = {
    id?: true
    topicId?: true
  }

  export type UrlMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    createdAt?: true
    comments?: true
    pinned?: true
    topicId?: true
  }

  export type UrlMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    createdAt?: true
    comments?: true
    pinned?: true
    topicId?: true
  }

  export type UrlCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    createdAt?: true
    comments?: true
    pinned?: true
    topicId?: true
    _all?: true
  }

  export type UrlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Url to aggregate.
     */
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Urls
    **/
    _count?: true | UrlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UrlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UrlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UrlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UrlMaxAggregateInputType
  }

  export type GetUrlAggregateType<T extends UrlAggregateArgs> = {
        [P in keyof T & keyof AggregateUrl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrl[P]>
      : GetScalarType<T[P], AggregateUrl[P]>
  }




  export type UrlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UrlWhereInput
    orderBy?: UrlOrderByWithAggregationInput | UrlOrderByWithAggregationInput[]
    by: UrlScalarFieldEnum[] | UrlScalarFieldEnum
    having?: UrlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UrlCountAggregateInputType | true
    _avg?: UrlAvgAggregateInputType
    _sum?: UrlSumAggregateInputType
    _min?: UrlMinAggregateInputType
    _max?: UrlMaxAggregateInputType
  }

  export type UrlGroupByOutputType = {
    id: number
    name: string
    url: string | null
    createdAt: Date
    comments: string | null
    pinned: boolean
    topicId: number
    _count: UrlCountAggregateOutputType | null
    _avg: UrlAvgAggregateOutputType | null
    _sum: UrlSumAggregateOutputType | null
    _min: UrlMinAggregateOutputType | null
    _max: UrlMaxAggregateOutputType | null
  }

  type GetUrlGroupByPayload<T extends UrlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UrlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UrlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UrlGroupByOutputType[P]>
            : GetScalarType<T[P], UrlGroupByOutputType[P]>
        }
      >
    >


  export type UrlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    createdAt?: boolean
    comments?: boolean
    pinned?: boolean
    topicId?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["url"]>

  export type UrlSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    createdAt?: boolean
    comments?: boolean
    pinned?: boolean
    topicId?: boolean
  }

  export type UrlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }


  export type $UrlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Url"
    objects: {
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      url: string | null
      createdAt: Date
      comments: string | null
      pinned: boolean
      topicId: number
    }, ExtArgs["result"]["url"]>
    composites: {}
  }


  type UrlGetPayload<S extends boolean | null | undefined | UrlDefaultArgs> = $Result.GetResult<Prisma.$UrlPayload, S>

  type UrlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UrlFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UrlCountAggregateInputType | true
    }

  export interface UrlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Url'], meta: { name: 'Url' } }
    /**
     * Find zero or one Url that matches the filter.
     * @param {UrlFindUniqueArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UrlFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UrlFindUniqueArgs<ExtArgs>>
    ): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Url that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UrlFindUniqueOrThrowArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UrlFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UrlFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Url that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlFindFirstArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UrlFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UrlFindFirstArgs<ExtArgs>>
    ): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Url that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlFindFirstOrThrowArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UrlFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UrlFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Urls
     * const urls = await prisma.url.findMany()
     * 
     * // Get first 10 Urls
     * const urls = await prisma.url.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const urlWithIdOnly = await prisma.url.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UrlFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UrlFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Url.
     * @param {UrlCreateArgs} args - Arguments to create a Url.
     * @example
     * // Create one Url
     * const Url = await prisma.url.create({
     *   data: {
     *     // ... data to create a Url
     *   }
     * })
     * 
    **/
    create<T extends UrlCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UrlCreateArgs<ExtArgs>>
    ): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Urls.
     *     @param {UrlCreateManyArgs} args - Arguments to create many Urls.
     *     @example
     *     // Create many Urls
     *     const url = await prisma.url.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UrlCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UrlCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Url.
     * @param {UrlDeleteArgs} args - Arguments to delete one Url.
     * @example
     * // Delete one Url
     * const Url = await prisma.url.delete({
     *   where: {
     *     // ... filter to delete one Url
     *   }
     * })
     * 
    **/
    delete<T extends UrlDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UrlDeleteArgs<ExtArgs>>
    ): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Url.
     * @param {UrlUpdateArgs} args - Arguments to update one Url.
     * @example
     * // Update one Url
     * const url = await prisma.url.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UrlUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UrlUpdateArgs<ExtArgs>>
    ): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Urls.
     * @param {UrlDeleteManyArgs} args - Arguments to filter Urls to delete.
     * @example
     * // Delete a few Urls
     * const { count } = await prisma.url.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UrlDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UrlDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Urls
     * const url = await prisma.url.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UrlUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UrlUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Url.
     * @param {UrlUpsertArgs} args - Arguments to update or create a Url.
     * @example
     * // Update or create a Url
     * const url = await prisma.url.upsert({
     *   create: {
     *     // ... data to create a Url
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Url we want to update
     *   }
     * })
    **/
    upsert<T extends UrlUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UrlUpsertArgs<ExtArgs>>
    ): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlCountArgs} args - Arguments to filter Urls to count.
     * @example
     * // Count the number of Urls
     * const count = await prisma.url.count({
     *   where: {
     *     // ... the filter for the Urls we want to count
     *   }
     * })
    **/
    count<T extends UrlCountArgs>(
      args?: Subset<T, UrlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UrlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UrlAggregateArgs>(args: Subset<T, UrlAggregateArgs>): Prisma.PrismaPromise<GetUrlAggregateType<T>>

    /**
     * Group by Url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UrlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UrlGroupByArgs['orderBy'] }
        : { orderBy?: UrlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UrlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Url model
   */
  readonly fields: UrlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Url.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UrlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Url model
   */ 
  interface UrlFieldRefs {
    readonly id: FieldRef<"Url", 'Int'>
    readonly name: FieldRef<"Url", 'String'>
    readonly url: FieldRef<"Url", 'String'>
    readonly createdAt: FieldRef<"Url", 'DateTime'>
    readonly comments: FieldRef<"Url", 'String'>
    readonly pinned: FieldRef<"Url", 'Boolean'>
    readonly topicId: FieldRef<"Url", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Url findUnique
   */
  export type UrlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter, which Url to fetch.
     */
    where: UrlWhereUniqueInput
  }


  /**
   * Url findUniqueOrThrow
   */
  export type UrlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter, which Url to fetch.
     */
    where: UrlWhereUniqueInput
  }


  /**
   * Url findFirst
   */
  export type UrlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter, which Url to fetch.
     */
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Urls.
     */
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Urls.
     */
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }


  /**
   * Url findFirstOrThrow
   */
  export type UrlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter, which Url to fetch.
     */
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Urls.
     */
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Urls.
     */
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }


  /**
   * Url findMany
   */
  export type UrlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter, which Urls to fetch.
     */
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Urls.
     */
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }


  /**
   * Url create
   */
  export type UrlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * The data needed to create a Url.
     */
    data: XOR<UrlCreateInput, UrlUncheckedCreateInput>
  }


  /**
   * Url createMany
   */
  export type UrlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Urls.
     */
    data: UrlCreateManyInput | UrlCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Url update
   */
  export type UrlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * The data needed to update a Url.
     */
    data: XOR<UrlUpdateInput, UrlUncheckedUpdateInput>
    /**
     * Choose, which Url to update.
     */
    where: UrlWhereUniqueInput
  }


  /**
   * Url updateMany
   */
  export type UrlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Urls.
     */
    data: XOR<UrlUpdateManyMutationInput, UrlUncheckedUpdateManyInput>
    /**
     * Filter which Urls to update
     */
    where?: UrlWhereInput
  }


  /**
   * Url upsert
   */
  export type UrlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * The filter to search for the Url to update in case it exists.
     */
    where: UrlWhereUniqueInput
    /**
     * In case the Url found by the `where` argument doesn't exist, create a new Url with this data.
     */
    create: XOR<UrlCreateInput, UrlUncheckedCreateInput>
    /**
     * In case the Url was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UrlUpdateInput, UrlUncheckedUpdateInput>
  }


  /**
   * Url delete
   */
  export type UrlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter which Url to delete.
     */
    where: UrlWhereUniqueInput
  }


  /**
   * Url deleteMany
   */
  export type UrlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Urls to delete
     */
    where?: UrlWhereInput
  }


  /**
   * Url without action
   */
  export type UrlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UrlInclude<ExtArgs> | null
  }



  /**
   * Model Notebook
   */

  export type AggregateNotebook = {
    _count: NotebookCountAggregateOutputType | null
    _avg: NotebookAvgAggregateOutputType | null
    _sum: NotebookSumAggregateOutputType | null
    _min: NotebookMinAggregateOutputType | null
    _max: NotebookMaxAggregateOutputType | null
  }

  export type NotebookAvgAggregateOutputType = {
    id: number | null
    topicId: number | null
  }

  export type NotebookSumAggregateOutputType = {
    id: number | null
    topicId: number | null
  }

  export type NotebookMinAggregateOutputType = {
    id: number | null
    title: string | null
    topicId: number | null
  }

  export type NotebookMaxAggregateOutputType = {
    id: number | null
    title: string | null
    topicId: number | null
  }

  export type NotebookCountAggregateOutputType = {
    id: number
    title: number
    topicId: number
    _all: number
  }


  export type NotebookAvgAggregateInputType = {
    id?: true
    topicId?: true
  }

  export type NotebookSumAggregateInputType = {
    id?: true
    topicId?: true
  }

  export type NotebookMinAggregateInputType = {
    id?: true
    title?: true
    topicId?: true
  }

  export type NotebookMaxAggregateInputType = {
    id?: true
    title?: true
    topicId?: true
  }

  export type NotebookCountAggregateInputType = {
    id?: true
    title?: true
    topicId?: true
    _all?: true
  }

  export type NotebookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notebook to aggregate.
     */
    where?: NotebookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notebooks to fetch.
     */
    orderBy?: NotebookOrderByWithRelationInput | NotebookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotebookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notebooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notebooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notebooks
    **/
    _count?: true | NotebookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotebookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotebookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotebookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotebookMaxAggregateInputType
  }

  export type GetNotebookAggregateType<T extends NotebookAggregateArgs> = {
        [P in keyof T & keyof AggregateNotebook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotebook[P]>
      : GetScalarType<T[P], AggregateNotebook[P]>
  }




  export type NotebookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotebookWhereInput
    orderBy?: NotebookOrderByWithAggregationInput | NotebookOrderByWithAggregationInput[]
    by: NotebookScalarFieldEnum[] | NotebookScalarFieldEnum
    having?: NotebookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotebookCountAggregateInputType | true
    _avg?: NotebookAvgAggregateInputType
    _sum?: NotebookSumAggregateInputType
    _min?: NotebookMinAggregateInputType
    _max?: NotebookMaxAggregateInputType
  }

  export type NotebookGroupByOutputType = {
    id: number
    title: string
    topicId: number
    _count: NotebookCountAggregateOutputType | null
    _avg: NotebookAvgAggregateOutputType | null
    _sum: NotebookSumAggregateOutputType | null
    _min: NotebookMinAggregateOutputType | null
    _max: NotebookMaxAggregateOutputType | null
  }

  type GetNotebookGroupByPayload<T extends NotebookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotebookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotebookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotebookGroupByOutputType[P]>
            : GetScalarType<T[P], NotebookGroupByOutputType[P]>
        }
      >
    >


  export type NotebookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    topicId?: boolean
    entries?: boolean | Notebook$entriesArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    _count?: boolean | NotebookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notebook"]>

  export type NotebookSelectScalar = {
    id?: boolean
    title?: boolean
    topicId?: boolean
  }

  export type NotebookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | Notebook$entriesArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    _count?: boolean | NotebookCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $NotebookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notebook"
    objects: {
      entries: Prisma.$NotebookEntryPayload<ExtArgs>[]
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      topicId: number
    }, ExtArgs["result"]["notebook"]>
    composites: {}
  }


  type NotebookGetPayload<S extends boolean | null | undefined | NotebookDefaultArgs> = $Result.GetResult<Prisma.$NotebookPayload, S>

  type NotebookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotebookFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotebookCountAggregateInputType | true
    }

  export interface NotebookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notebook'], meta: { name: 'Notebook' } }
    /**
     * Find zero or one Notebook that matches the filter.
     * @param {NotebookFindUniqueArgs} args - Arguments to find a Notebook
     * @example
     * // Get one Notebook
     * const notebook = await prisma.notebook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotebookFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NotebookFindUniqueArgs<ExtArgs>>
    ): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Notebook that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotebookFindUniqueOrThrowArgs} args - Arguments to find a Notebook
     * @example
     * // Get one Notebook
     * const notebook = await prisma.notebook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotebookFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotebookFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Notebook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookFindFirstArgs} args - Arguments to find a Notebook
     * @example
     * // Get one Notebook
     * const notebook = await prisma.notebook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotebookFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NotebookFindFirstArgs<ExtArgs>>
    ): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Notebook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookFindFirstOrThrowArgs} args - Arguments to find a Notebook
     * @example
     * // Get one Notebook
     * const notebook = await prisma.notebook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotebookFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotebookFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Notebooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notebooks
     * const notebooks = await prisma.notebook.findMany()
     * 
     * // Get first 10 Notebooks
     * const notebooks = await prisma.notebook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notebookWithIdOnly = await prisma.notebook.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotebookFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotebookFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Notebook.
     * @param {NotebookCreateArgs} args - Arguments to create a Notebook.
     * @example
     * // Create one Notebook
     * const Notebook = await prisma.notebook.create({
     *   data: {
     *     // ... data to create a Notebook
     *   }
     * })
     * 
    **/
    create<T extends NotebookCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NotebookCreateArgs<ExtArgs>>
    ): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Notebooks.
     *     @param {NotebookCreateManyArgs} args - Arguments to create many Notebooks.
     *     @example
     *     // Create many Notebooks
     *     const notebook = await prisma.notebook.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotebookCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotebookCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notebook.
     * @param {NotebookDeleteArgs} args - Arguments to delete one Notebook.
     * @example
     * // Delete one Notebook
     * const Notebook = await prisma.notebook.delete({
     *   where: {
     *     // ... filter to delete one Notebook
     *   }
     * })
     * 
    **/
    delete<T extends NotebookDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NotebookDeleteArgs<ExtArgs>>
    ): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Notebook.
     * @param {NotebookUpdateArgs} args - Arguments to update one Notebook.
     * @example
     * // Update one Notebook
     * const notebook = await prisma.notebook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotebookUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NotebookUpdateArgs<ExtArgs>>
    ): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Notebooks.
     * @param {NotebookDeleteManyArgs} args - Arguments to filter Notebooks to delete.
     * @example
     * // Delete a few Notebooks
     * const { count } = await prisma.notebook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotebookDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotebookDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notebooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notebooks
     * const notebook = await prisma.notebook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotebookUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NotebookUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notebook.
     * @param {NotebookUpsertArgs} args - Arguments to update or create a Notebook.
     * @example
     * // Update or create a Notebook
     * const notebook = await prisma.notebook.upsert({
     *   create: {
     *     // ... data to create a Notebook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notebook we want to update
     *   }
     * })
    **/
    upsert<T extends NotebookUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NotebookUpsertArgs<ExtArgs>>
    ): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Notebooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookCountArgs} args - Arguments to filter Notebooks to count.
     * @example
     * // Count the number of Notebooks
     * const count = await prisma.notebook.count({
     *   where: {
     *     // ... the filter for the Notebooks we want to count
     *   }
     * })
    **/
    count<T extends NotebookCountArgs>(
      args?: Subset<T, NotebookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotebookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notebook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotebookAggregateArgs>(args: Subset<T, NotebookAggregateArgs>): Prisma.PrismaPromise<GetNotebookAggregateType<T>>

    /**
     * Group by Notebook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotebookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotebookGroupByArgs['orderBy'] }
        : { orderBy?: NotebookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotebookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotebookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notebook model
   */
  readonly fields: NotebookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notebook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotebookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    entries<T extends Notebook$entriesArgs<ExtArgs> = {}>(args?: Subset<T, Notebook$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotebookEntryPayload<ExtArgs>, T, 'findMany'> | Null>;

    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Notebook model
   */ 
  interface NotebookFieldRefs {
    readonly id: FieldRef<"Notebook", 'Int'>
    readonly title: FieldRef<"Notebook", 'String'>
    readonly topicId: FieldRef<"Notebook", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Notebook findUnique
   */
  export type NotebookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * Filter, which Notebook to fetch.
     */
    where: NotebookWhereUniqueInput
  }


  /**
   * Notebook findUniqueOrThrow
   */
  export type NotebookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * Filter, which Notebook to fetch.
     */
    where: NotebookWhereUniqueInput
  }


  /**
   * Notebook findFirst
   */
  export type NotebookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * Filter, which Notebook to fetch.
     */
    where?: NotebookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notebooks to fetch.
     */
    orderBy?: NotebookOrderByWithRelationInput | NotebookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notebooks.
     */
    cursor?: NotebookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notebooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notebooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notebooks.
     */
    distinct?: NotebookScalarFieldEnum | NotebookScalarFieldEnum[]
  }


  /**
   * Notebook findFirstOrThrow
   */
  export type NotebookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * Filter, which Notebook to fetch.
     */
    where?: NotebookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notebooks to fetch.
     */
    orderBy?: NotebookOrderByWithRelationInput | NotebookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notebooks.
     */
    cursor?: NotebookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notebooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notebooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notebooks.
     */
    distinct?: NotebookScalarFieldEnum | NotebookScalarFieldEnum[]
  }


  /**
   * Notebook findMany
   */
  export type NotebookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * Filter, which Notebooks to fetch.
     */
    where?: NotebookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notebooks to fetch.
     */
    orderBy?: NotebookOrderByWithRelationInput | NotebookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notebooks.
     */
    cursor?: NotebookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notebooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notebooks.
     */
    skip?: number
    distinct?: NotebookScalarFieldEnum | NotebookScalarFieldEnum[]
  }


  /**
   * Notebook create
   */
  export type NotebookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * The data needed to create a Notebook.
     */
    data: XOR<NotebookCreateInput, NotebookUncheckedCreateInput>
  }


  /**
   * Notebook createMany
   */
  export type NotebookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notebooks.
     */
    data: NotebookCreateManyInput | NotebookCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Notebook update
   */
  export type NotebookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * The data needed to update a Notebook.
     */
    data: XOR<NotebookUpdateInput, NotebookUncheckedUpdateInput>
    /**
     * Choose, which Notebook to update.
     */
    where: NotebookWhereUniqueInput
  }


  /**
   * Notebook updateMany
   */
  export type NotebookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notebooks.
     */
    data: XOR<NotebookUpdateManyMutationInput, NotebookUncheckedUpdateManyInput>
    /**
     * Filter which Notebooks to update
     */
    where?: NotebookWhereInput
  }


  /**
   * Notebook upsert
   */
  export type NotebookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * The filter to search for the Notebook to update in case it exists.
     */
    where: NotebookWhereUniqueInput
    /**
     * In case the Notebook found by the `where` argument doesn't exist, create a new Notebook with this data.
     */
    create: XOR<NotebookCreateInput, NotebookUncheckedCreateInput>
    /**
     * In case the Notebook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotebookUpdateInput, NotebookUncheckedUpdateInput>
  }


  /**
   * Notebook delete
   */
  export type NotebookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookInclude<ExtArgs> | null
    /**
     * Filter which Notebook to delete.
     */
    where: NotebookWhereUniqueInput
  }


  /**
   * Notebook deleteMany
   */
  export type NotebookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notebooks to delete
     */
    where?: NotebookWhereInput
  }


  /**
   * Notebook.entries
   */
  export type Notebook$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotebookEntry
     */
    select?: NotebookEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookEntryInclude<ExtArgs> | null
    where?: NotebookEntryWhereInput
    orderBy?: NotebookEntryOrderByWithRelationInput | NotebookEntryOrderByWithRelationInput[]
    cursor?: NotebookEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotebookEntryScalarFieldEnum | NotebookEntryScalarFieldEnum[]
  }


  /**
   * Notebook without action
   */
  export type NotebookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notebook
     */
    select?: NotebookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookInclude<ExtArgs> | null
  }



  /**
   * Model NotebookEntry
   */

  export type AggregateNotebookEntry = {
    _count: NotebookEntryCountAggregateOutputType | null
    _avg: NotebookEntryAvgAggregateOutputType | null
    _sum: NotebookEntrySumAggregateOutputType | null
    _min: NotebookEntryMinAggregateOutputType | null
    _max: NotebookEntryMaxAggregateOutputType | null
  }

  export type NotebookEntryAvgAggregateOutputType = {
    id: number | null
    notebookId: number | null
  }

  export type NotebookEntrySumAggregateOutputType = {
    id: number | null
    notebookId: number | null
  }

  export type NotebookEntryMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    pinned: boolean | null
    notebookId: number | null
  }

  export type NotebookEntryMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    pinned: boolean | null
    notebookId: number | null
  }

  export type NotebookEntryCountAggregateOutputType = {
    id: number
    title: number
    content: number
    pinned: number
    notebookId: number
    _all: number
  }


  export type NotebookEntryAvgAggregateInputType = {
    id?: true
    notebookId?: true
  }

  export type NotebookEntrySumAggregateInputType = {
    id?: true
    notebookId?: true
  }

  export type NotebookEntryMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    pinned?: true
    notebookId?: true
  }

  export type NotebookEntryMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    pinned?: true
    notebookId?: true
  }

  export type NotebookEntryCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    pinned?: true
    notebookId?: true
    _all?: true
  }

  export type NotebookEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotebookEntry to aggregate.
     */
    where?: NotebookEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotebookEntries to fetch.
     */
    orderBy?: NotebookEntryOrderByWithRelationInput | NotebookEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotebookEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotebookEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotebookEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotebookEntries
    **/
    _count?: true | NotebookEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotebookEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotebookEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotebookEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotebookEntryMaxAggregateInputType
  }

  export type GetNotebookEntryAggregateType<T extends NotebookEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateNotebookEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotebookEntry[P]>
      : GetScalarType<T[P], AggregateNotebookEntry[P]>
  }




  export type NotebookEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotebookEntryWhereInput
    orderBy?: NotebookEntryOrderByWithAggregationInput | NotebookEntryOrderByWithAggregationInput[]
    by: NotebookEntryScalarFieldEnum[] | NotebookEntryScalarFieldEnum
    having?: NotebookEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotebookEntryCountAggregateInputType | true
    _avg?: NotebookEntryAvgAggregateInputType
    _sum?: NotebookEntrySumAggregateInputType
    _min?: NotebookEntryMinAggregateInputType
    _max?: NotebookEntryMaxAggregateInputType
  }

  export type NotebookEntryGroupByOutputType = {
    id: number
    title: string
    content: string | null
    pinned: boolean
    notebookId: number
    _count: NotebookEntryCountAggregateOutputType | null
    _avg: NotebookEntryAvgAggregateOutputType | null
    _sum: NotebookEntrySumAggregateOutputType | null
    _min: NotebookEntryMinAggregateOutputType | null
    _max: NotebookEntryMaxAggregateOutputType | null
  }

  type GetNotebookEntryGroupByPayload<T extends NotebookEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotebookEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotebookEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotebookEntryGroupByOutputType[P]>
            : GetScalarType<T[P], NotebookEntryGroupByOutputType[P]>
        }
      >
    >


  export type NotebookEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    pinned?: boolean
    notebookId?: boolean
    notebook?: boolean | NotebookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notebookEntry"]>

  export type NotebookEntrySelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    pinned?: boolean
    notebookId?: boolean
  }

  export type NotebookEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notebook?: boolean | NotebookDefaultArgs<ExtArgs>
  }


  export type $NotebookEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotebookEntry"
    objects: {
      notebook: Prisma.$NotebookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string | null
      pinned: boolean
      notebookId: number
    }, ExtArgs["result"]["notebookEntry"]>
    composites: {}
  }


  type NotebookEntryGetPayload<S extends boolean | null | undefined | NotebookEntryDefaultArgs> = $Result.GetResult<Prisma.$NotebookEntryPayload, S>

  type NotebookEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotebookEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotebookEntryCountAggregateInputType | true
    }

  export interface NotebookEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotebookEntry'], meta: { name: 'NotebookEntry' } }
    /**
     * Find zero or one NotebookEntry that matches the filter.
     * @param {NotebookEntryFindUniqueArgs} args - Arguments to find a NotebookEntry
     * @example
     * // Get one NotebookEntry
     * const notebookEntry = await prisma.notebookEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotebookEntryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NotebookEntryFindUniqueArgs<ExtArgs>>
    ): Prisma__NotebookEntryClient<$Result.GetResult<Prisma.$NotebookEntryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one NotebookEntry that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotebookEntryFindUniqueOrThrowArgs} args - Arguments to find a NotebookEntry
     * @example
     * // Get one NotebookEntry
     * const notebookEntry = await prisma.notebookEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotebookEntryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotebookEntryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NotebookEntryClient<$Result.GetResult<Prisma.$NotebookEntryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first NotebookEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookEntryFindFirstArgs} args - Arguments to find a NotebookEntry
     * @example
     * // Get one NotebookEntry
     * const notebookEntry = await prisma.notebookEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotebookEntryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NotebookEntryFindFirstArgs<ExtArgs>>
    ): Prisma__NotebookEntryClient<$Result.GetResult<Prisma.$NotebookEntryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first NotebookEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookEntryFindFirstOrThrowArgs} args - Arguments to find a NotebookEntry
     * @example
     * // Get one NotebookEntry
     * const notebookEntry = await prisma.notebookEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotebookEntryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotebookEntryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NotebookEntryClient<$Result.GetResult<Prisma.$NotebookEntryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more NotebookEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookEntryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotebookEntries
     * const notebookEntries = await prisma.notebookEntry.findMany()
     * 
     * // Get first 10 NotebookEntries
     * const notebookEntries = await prisma.notebookEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notebookEntryWithIdOnly = await prisma.notebookEntry.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotebookEntryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotebookEntryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotebookEntryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a NotebookEntry.
     * @param {NotebookEntryCreateArgs} args - Arguments to create a NotebookEntry.
     * @example
     * // Create one NotebookEntry
     * const NotebookEntry = await prisma.notebookEntry.create({
     *   data: {
     *     // ... data to create a NotebookEntry
     *   }
     * })
     * 
    **/
    create<T extends NotebookEntryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NotebookEntryCreateArgs<ExtArgs>>
    ): Prisma__NotebookEntryClient<$Result.GetResult<Prisma.$NotebookEntryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many NotebookEntries.
     *     @param {NotebookEntryCreateManyArgs} args - Arguments to create many NotebookEntries.
     *     @example
     *     // Create many NotebookEntries
     *     const notebookEntry = await prisma.notebookEntry.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotebookEntryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotebookEntryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NotebookEntry.
     * @param {NotebookEntryDeleteArgs} args - Arguments to delete one NotebookEntry.
     * @example
     * // Delete one NotebookEntry
     * const NotebookEntry = await prisma.notebookEntry.delete({
     *   where: {
     *     // ... filter to delete one NotebookEntry
     *   }
     * })
     * 
    **/
    delete<T extends NotebookEntryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NotebookEntryDeleteArgs<ExtArgs>>
    ): Prisma__NotebookEntryClient<$Result.GetResult<Prisma.$NotebookEntryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one NotebookEntry.
     * @param {NotebookEntryUpdateArgs} args - Arguments to update one NotebookEntry.
     * @example
     * // Update one NotebookEntry
     * const notebookEntry = await prisma.notebookEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotebookEntryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NotebookEntryUpdateArgs<ExtArgs>>
    ): Prisma__NotebookEntryClient<$Result.GetResult<Prisma.$NotebookEntryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more NotebookEntries.
     * @param {NotebookEntryDeleteManyArgs} args - Arguments to filter NotebookEntries to delete.
     * @example
     * // Delete a few NotebookEntries
     * const { count } = await prisma.notebookEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotebookEntryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotebookEntryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotebookEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotebookEntries
     * const notebookEntry = await prisma.notebookEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotebookEntryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NotebookEntryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotebookEntry.
     * @param {NotebookEntryUpsertArgs} args - Arguments to update or create a NotebookEntry.
     * @example
     * // Update or create a NotebookEntry
     * const notebookEntry = await prisma.notebookEntry.upsert({
     *   create: {
     *     // ... data to create a NotebookEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotebookEntry we want to update
     *   }
     * })
    **/
    upsert<T extends NotebookEntryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NotebookEntryUpsertArgs<ExtArgs>>
    ): Prisma__NotebookEntryClient<$Result.GetResult<Prisma.$NotebookEntryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of NotebookEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookEntryCountArgs} args - Arguments to filter NotebookEntries to count.
     * @example
     * // Count the number of NotebookEntries
     * const count = await prisma.notebookEntry.count({
     *   where: {
     *     // ... the filter for the NotebookEntries we want to count
     *   }
     * })
    **/
    count<T extends NotebookEntryCountArgs>(
      args?: Subset<T, NotebookEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotebookEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotebookEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotebookEntryAggregateArgs>(args: Subset<T, NotebookEntryAggregateArgs>): Prisma.PrismaPromise<GetNotebookEntryAggregateType<T>>

    /**
     * Group by NotebookEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotebookEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotebookEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotebookEntryGroupByArgs['orderBy'] }
        : { orderBy?: NotebookEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotebookEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotebookEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotebookEntry model
   */
  readonly fields: NotebookEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotebookEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotebookEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    notebook<T extends NotebookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotebookDefaultArgs<ExtArgs>>): Prisma__NotebookClient<$Result.GetResult<Prisma.$NotebookPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the NotebookEntry model
   */ 
  interface NotebookEntryFieldRefs {
    readonly id: FieldRef<"NotebookEntry", 'Int'>
    readonly title: FieldRef<"NotebookEntry", 'String'>
    readonly content: FieldRef<"NotebookEntry", 'String'>
    readonly pinned: FieldRef<"NotebookEntry", 'Boolean'>
    readonly notebookId: FieldRef<"NotebookEntry", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * NotebookEntry findUnique
   */
  export type NotebookEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotebookEntry
     */
    select?: NotebookEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookEntryInclude<ExtArgs> | null
    /**
     * Filter, which NotebookEntry to fetch.
     */
    where: NotebookEntryWhereUniqueInput
  }


  /**
   * NotebookEntry findUniqueOrThrow
   */
  export type NotebookEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotebookEntry
     */
    select?: NotebookEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookEntryInclude<ExtArgs> | null
    /**
     * Filter, which NotebookEntry to fetch.
     */
    where: NotebookEntryWhereUniqueInput
  }


  /**
   * NotebookEntry findFirst
   */
  export type NotebookEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotebookEntry
     */
    select?: NotebookEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookEntryInclude<ExtArgs> | null
    /**
     * Filter, which NotebookEntry to fetch.
     */
    where?: NotebookEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotebookEntries to fetch.
     */
    orderBy?: NotebookEntryOrderByWithRelationInput | NotebookEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotebookEntries.
     */
    cursor?: NotebookEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotebookEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotebookEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotebookEntries.
     */
    distinct?: NotebookEntryScalarFieldEnum | NotebookEntryScalarFieldEnum[]
  }


  /**
   * NotebookEntry findFirstOrThrow
   */
  export type NotebookEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotebookEntry
     */
    select?: NotebookEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookEntryInclude<ExtArgs> | null
    /**
     * Filter, which NotebookEntry to fetch.
     */
    where?: NotebookEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotebookEntries to fetch.
     */
    orderBy?: NotebookEntryOrderByWithRelationInput | NotebookEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotebookEntries.
     */
    cursor?: NotebookEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotebookEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotebookEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotebookEntries.
     */
    distinct?: NotebookEntryScalarFieldEnum | NotebookEntryScalarFieldEnum[]
  }


  /**
   * NotebookEntry findMany
   */
  export type NotebookEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotebookEntry
     */
    select?: NotebookEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookEntryInclude<ExtArgs> | null
    /**
     * Filter, which NotebookEntries to fetch.
     */
    where?: NotebookEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotebookEntries to fetch.
     */
    orderBy?: NotebookEntryOrderByWithRelationInput | NotebookEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotebookEntries.
     */
    cursor?: NotebookEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotebookEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotebookEntries.
     */
    skip?: number
    distinct?: NotebookEntryScalarFieldEnum | NotebookEntryScalarFieldEnum[]
  }


  /**
   * NotebookEntry create
   */
  export type NotebookEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotebookEntry
     */
    select?: NotebookEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a NotebookEntry.
     */
    data: XOR<NotebookEntryCreateInput, NotebookEntryUncheckedCreateInput>
  }


  /**
   * NotebookEntry createMany
   */
  export type NotebookEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotebookEntries.
     */
    data: NotebookEntryCreateManyInput | NotebookEntryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * NotebookEntry update
   */
  export type NotebookEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotebookEntry
     */
    select?: NotebookEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a NotebookEntry.
     */
    data: XOR<NotebookEntryUpdateInput, NotebookEntryUncheckedUpdateInput>
    /**
     * Choose, which NotebookEntry to update.
     */
    where: NotebookEntryWhereUniqueInput
  }


  /**
   * NotebookEntry updateMany
   */
  export type NotebookEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotebookEntries.
     */
    data: XOR<NotebookEntryUpdateManyMutationInput, NotebookEntryUncheckedUpdateManyInput>
    /**
     * Filter which NotebookEntries to update
     */
    where?: NotebookEntryWhereInput
  }


  /**
   * NotebookEntry upsert
   */
  export type NotebookEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotebookEntry
     */
    select?: NotebookEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the NotebookEntry to update in case it exists.
     */
    where: NotebookEntryWhereUniqueInput
    /**
     * In case the NotebookEntry found by the `where` argument doesn't exist, create a new NotebookEntry with this data.
     */
    create: XOR<NotebookEntryCreateInput, NotebookEntryUncheckedCreateInput>
    /**
     * In case the NotebookEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotebookEntryUpdateInput, NotebookEntryUncheckedUpdateInput>
  }


  /**
   * NotebookEntry delete
   */
  export type NotebookEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotebookEntry
     */
    select?: NotebookEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookEntryInclude<ExtArgs> | null
    /**
     * Filter which NotebookEntry to delete.
     */
    where: NotebookEntryWhereUniqueInput
  }


  /**
   * NotebookEntry deleteMany
   */
  export type NotebookEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotebookEntries to delete
     */
    where?: NotebookEntryWhereInput
  }


  /**
   * NotebookEntry without action
   */
  export type NotebookEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotebookEntry
     */
    select?: NotebookEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotebookEntryInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TopicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    pinned: 'pinned',
    parentId: 'parentId'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const TagsOnTopicScalarFieldEnum: {
    topicId: 'topicId',
    tagId: 'tagId'
  };

  export type TagsOnTopicScalarFieldEnum = (typeof TagsOnTopicScalarFieldEnum)[keyof typeof TagsOnTopicScalarFieldEnum]


  export const AttachmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    comments: 'comments',
    pinned: 'pinned',
    attachmentData: 'attachmentData',
    attachmentType: 'attachmentType',
    topicId: 'topicId'
  };

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


  export const UrlScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    createdAt: 'createdAt',
    comments: 'comments',
    pinned: 'pinned',
    topicId: 'topicId'
  };

  export type UrlScalarFieldEnum = (typeof UrlScalarFieldEnum)[keyof typeof UrlScalarFieldEnum]


  export const NotebookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    topicId: 'topicId'
  };

  export type NotebookScalarFieldEnum = (typeof NotebookScalarFieldEnum)[keyof typeof NotebookScalarFieldEnum]


  export const NotebookEntryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    pinned: 'pinned',
    notebookId: 'notebookId'
  };

  export type NotebookEntryScalarFieldEnum = (typeof NotebookEntryScalarFieldEnum)[keyof typeof NotebookEntryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TopicWhereInput = {
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    id?: IntFilter<"Topic"> | number
    name?: StringFilter<"Topic"> | string
    pinned?: BoolFilter<"Topic"> | boolean
    parentId?: IntNullableFilter<"Topic"> | number | null
    urls?: UrlListRelationFilter
    attachments?: AttachmentListRelationFilter
    notebook?: XOR<NotebookNullableRelationFilter, NotebookWhereInput> | null
    parent?: XOR<TopicNullableRelationFilter, TopicWhereInput> | null
    subtopics?: TopicListRelationFilter
    tags?: TagsOnTopicListRelationFilter
  }

  export type TopicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    pinned?: SortOrder
    parentId?: SortOrderInput | SortOrder
    urls?: UrlOrderByRelationAggregateInput
    attachments?: AttachmentOrderByRelationAggregateInput
    notebook?: NotebookOrderByWithRelationInput
    parent?: TopicOrderByWithRelationInput
    subtopics?: TopicOrderByRelationAggregateInput
    tags?: TagsOnTopicOrderByRelationAggregateInput
  }

  export type TopicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    name?: StringFilter<"Topic"> | string
    pinned?: BoolFilter<"Topic"> | boolean
    parentId?: IntNullableFilter<"Topic"> | number | null
    urls?: UrlListRelationFilter
    attachments?: AttachmentListRelationFilter
    notebook?: XOR<NotebookNullableRelationFilter, NotebookWhereInput> | null
    parent?: XOR<TopicNullableRelationFilter, TopicWhereInput> | null
    subtopics?: TopicListRelationFilter
    tags?: TagsOnTopicListRelationFilter
  }, "id">

  export type TopicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    pinned?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: TopicCountOrderByAggregateInput
    _avg?: TopicAvgOrderByAggregateInput
    _max?: TopicMaxOrderByAggregateInput
    _min?: TopicMinOrderByAggregateInput
    _sum?: TopicSumOrderByAggregateInput
  }

  export type TopicScalarWhereWithAggregatesInput = {
    AND?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    OR?: TopicScalarWhereWithAggregatesInput[]
    NOT?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Topic"> | number
    name?: StringWithAggregatesFilter<"Topic"> | string
    pinned?: BoolWithAggregatesFilter<"Topic"> | boolean
    parentId?: IntNullableWithAggregatesFilter<"Topic"> | number | null
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    topics?: TagsOnTopicListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    topics?: TagsOnTopicOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    topics?: TagsOnTopicListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type TagsOnTopicWhereInput = {
    AND?: TagsOnTopicWhereInput | TagsOnTopicWhereInput[]
    OR?: TagsOnTopicWhereInput[]
    NOT?: TagsOnTopicWhereInput | TagsOnTopicWhereInput[]
    topicId?: IntFilter<"TagsOnTopic"> | number
    tagId?: IntFilter<"TagsOnTopic"> | number
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
    tag?: XOR<TagRelationFilter, TagWhereInput>
  }

  export type TagsOnTopicOrderByWithRelationInput = {
    topicId?: SortOrder
    tagId?: SortOrder
    topic?: TopicOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type TagsOnTopicWhereUniqueInput = Prisma.AtLeast<{
    tagId_topicId?: TagsOnTopicTagIdTopicIdCompoundUniqueInput
    AND?: TagsOnTopicWhereInput | TagsOnTopicWhereInput[]
    OR?: TagsOnTopicWhereInput[]
    NOT?: TagsOnTopicWhereInput | TagsOnTopicWhereInput[]
    topicId?: IntFilter<"TagsOnTopic"> | number
    tagId?: IntFilter<"TagsOnTopic"> | number
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
    tag?: XOR<TagRelationFilter, TagWhereInput>
  }, "tagId_topicId">

  export type TagsOnTopicOrderByWithAggregationInput = {
    topicId?: SortOrder
    tagId?: SortOrder
    _count?: TagsOnTopicCountOrderByAggregateInput
    _avg?: TagsOnTopicAvgOrderByAggregateInput
    _max?: TagsOnTopicMaxOrderByAggregateInput
    _min?: TagsOnTopicMinOrderByAggregateInput
    _sum?: TagsOnTopicSumOrderByAggregateInput
  }

  export type TagsOnTopicScalarWhereWithAggregatesInput = {
    AND?: TagsOnTopicScalarWhereWithAggregatesInput | TagsOnTopicScalarWhereWithAggregatesInput[]
    OR?: TagsOnTopicScalarWhereWithAggregatesInput[]
    NOT?: TagsOnTopicScalarWhereWithAggregatesInput | TagsOnTopicScalarWhereWithAggregatesInput[]
    topicId?: IntWithAggregatesFilter<"TagsOnTopic"> | number
    tagId?: IntWithAggregatesFilter<"TagsOnTopic"> | number
  }

  export type AttachmentWhereInput = {
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    id?: IntFilter<"Attachment"> | number
    name?: StringFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    comments?: StringNullableFilter<"Attachment"> | string | null
    pinned?: BoolFilter<"Attachment"> | boolean
    attachmentData?: BytesFilter<"Attachment"> | Buffer
    attachmentType?: StringFilter<"Attachment"> | string
    topicId?: IntFilter<"Attachment"> | number
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }

  export type AttachmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    comments?: SortOrderInput | SortOrder
    pinned?: SortOrder
    attachmentData?: SortOrder
    attachmentType?: SortOrder
    topicId?: SortOrder
    topic?: TopicOrderByWithRelationInput
  }

  export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    name?: StringFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    comments?: StringNullableFilter<"Attachment"> | string | null
    pinned?: BoolFilter<"Attachment"> | boolean
    attachmentData?: BytesFilter<"Attachment"> | Buffer
    attachmentType?: StringFilter<"Attachment"> | string
    topicId?: IntFilter<"Attachment"> | number
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }, "id">

  export type AttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    comments?: SortOrderInput | SortOrder
    pinned?: SortOrder
    attachmentData?: SortOrder
    attachmentType?: SortOrder
    topicId?: SortOrder
    _count?: AttachmentCountOrderByAggregateInput
    _avg?: AttachmentAvgOrderByAggregateInput
    _max?: AttachmentMaxOrderByAggregateInput
    _min?: AttachmentMinOrderByAggregateInput
    _sum?: AttachmentSumOrderByAggregateInput
  }

  export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    OR?: AttachmentScalarWhereWithAggregatesInput[]
    NOT?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attachment"> | number
    name?: StringWithAggregatesFilter<"Attachment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Attachment"> | Date | string
    comments?: StringNullableWithAggregatesFilter<"Attachment"> | string | null
    pinned?: BoolWithAggregatesFilter<"Attachment"> | boolean
    attachmentData?: BytesWithAggregatesFilter<"Attachment"> | Buffer
    attachmentType?: StringWithAggregatesFilter<"Attachment"> | string
    topicId?: IntWithAggregatesFilter<"Attachment"> | number
  }

  export type UrlWhereInput = {
    AND?: UrlWhereInput | UrlWhereInput[]
    OR?: UrlWhereInput[]
    NOT?: UrlWhereInput | UrlWhereInput[]
    id?: IntFilter<"Url"> | number
    name?: StringFilter<"Url"> | string
    url?: StringNullableFilter<"Url"> | string | null
    createdAt?: DateTimeFilter<"Url"> | Date | string
    comments?: StringNullableFilter<"Url"> | string | null
    pinned?: BoolFilter<"Url"> | boolean
    topicId?: IntFilter<"Url"> | number
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }

  export type UrlOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    comments?: SortOrderInput | SortOrder
    pinned?: SortOrder
    topicId?: SortOrder
    topic?: TopicOrderByWithRelationInput
  }

  export type UrlWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UrlWhereInput | UrlWhereInput[]
    OR?: UrlWhereInput[]
    NOT?: UrlWhereInput | UrlWhereInput[]
    name?: StringFilter<"Url"> | string
    url?: StringNullableFilter<"Url"> | string | null
    createdAt?: DateTimeFilter<"Url"> | Date | string
    comments?: StringNullableFilter<"Url"> | string | null
    pinned?: BoolFilter<"Url"> | boolean
    topicId?: IntFilter<"Url"> | number
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }, "id">

  export type UrlOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    comments?: SortOrderInput | SortOrder
    pinned?: SortOrder
    topicId?: SortOrder
    _count?: UrlCountOrderByAggregateInput
    _avg?: UrlAvgOrderByAggregateInput
    _max?: UrlMaxOrderByAggregateInput
    _min?: UrlMinOrderByAggregateInput
    _sum?: UrlSumOrderByAggregateInput
  }

  export type UrlScalarWhereWithAggregatesInput = {
    AND?: UrlScalarWhereWithAggregatesInput | UrlScalarWhereWithAggregatesInput[]
    OR?: UrlScalarWhereWithAggregatesInput[]
    NOT?: UrlScalarWhereWithAggregatesInput | UrlScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Url"> | number
    name?: StringWithAggregatesFilter<"Url"> | string
    url?: StringNullableWithAggregatesFilter<"Url"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Url"> | Date | string
    comments?: StringNullableWithAggregatesFilter<"Url"> | string | null
    pinned?: BoolWithAggregatesFilter<"Url"> | boolean
    topicId?: IntWithAggregatesFilter<"Url"> | number
  }

  export type NotebookWhereInput = {
    AND?: NotebookWhereInput | NotebookWhereInput[]
    OR?: NotebookWhereInput[]
    NOT?: NotebookWhereInput | NotebookWhereInput[]
    id?: IntFilter<"Notebook"> | number
    title?: StringFilter<"Notebook"> | string
    topicId?: IntFilter<"Notebook"> | number
    entries?: NotebookEntryListRelationFilter
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }

  export type NotebookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    topicId?: SortOrder
    entries?: NotebookEntryOrderByRelationAggregateInput
    topic?: TopicOrderByWithRelationInput
  }

  export type NotebookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    topicId?: number
    AND?: NotebookWhereInput | NotebookWhereInput[]
    OR?: NotebookWhereInput[]
    NOT?: NotebookWhereInput | NotebookWhereInput[]
    title?: StringFilter<"Notebook"> | string
    entries?: NotebookEntryListRelationFilter
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }, "id" | "topicId">

  export type NotebookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    topicId?: SortOrder
    _count?: NotebookCountOrderByAggregateInput
    _avg?: NotebookAvgOrderByAggregateInput
    _max?: NotebookMaxOrderByAggregateInput
    _min?: NotebookMinOrderByAggregateInput
    _sum?: NotebookSumOrderByAggregateInput
  }

  export type NotebookScalarWhereWithAggregatesInput = {
    AND?: NotebookScalarWhereWithAggregatesInput | NotebookScalarWhereWithAggregatesInput[]
    OR?: NotebookScalarWhereWithAggregatesInput[]
    NOT?: NotebookScalarWhereWithAggregatesInput | NotebookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notebook"> | number
    title?: StringWithAggregatesFilter<"Notebook"> | string
    topicId?: IntWithAggregatesFilter<"Notebook"> | number
  }

  export type NotebookEntryWhereInput = {
    AND?: NotebookEntryWhereInput | NotebookEntryWhereInput[]
    OR?: NotebookEntryWhereInput[]
    NOT?: NotebookEntryWhereInput | NotebookEntryWhereInput[]
    id?: IntFilter<"NotebookEntry"> | number
    title?: StringFilter<"NotebookEntry"> | string
    content?: StringNullableFilter<"NotebookEntry"> | string | null
    pinned?: BoolFilter<"NotebookEntry"> | boolean
    notebookId?: IntFilter<"NotebookEntry"> | number
    notebook?: XOR<NotebookRelationFilter, NotebookWhereInput>
  }

  export type NotebookEntryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    pinned?: SortOrder
    notebookId?: SortOrder
    notebook?: NotebookOrderByWithRelationInput
  }

  export type NotebookEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotebookEntryWhereInput | NotebookEntryWhereInput[]
    OR?: NotebookEntryWhereInput[]
    NOT?: NotebookEntryWhereInput | NotebookEntryWhereInput[]
    title?: StringFilter<"NotebookEntry"> | string
    content?: StringNullableFilter<"NotebookEntry"> | string | null
    pinned?: BoolFilter<"NotebookEntry"> | boolean
    notebookId?: IntFilter<"NotebookEntry"> | number
    notebook?: XOR<NotebookRelationFilter, NotebookWhereInput>
  }, "id">

  export type NotebookEntryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    pinned?: SortOrder
    notebookId?: SortOrder
    _count?: NotebookEntryCountOrderByAggregateInput
    _avg?: NotebookEntryAvgOrderByAggregateInput
    _max?: NotebookEntryMaxOrderByAggregateInput
    _min?: NotebookEntryMinOrderByAggregateInput
    _sum?: NotebookEntrySumOrderByAggregateInput
  }

  export type NotebookEntryScalarWhereWithAggregatesInput = {
    AND?: NotebookEntryScalarWhereWithAggregatesInput | NotebookEntryScalarWhereWithAggregatesInput[]
    OR?: NotebookEntryScalarWhereWithAggregatesInput[]
    NOT?: NotebookEntryScalarWhereWithAggregatesInput | NotebookEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NotebookEntry"> | number
    title?: StringWithAggregatesFilter<"NotebookEntry"> | string
    content?: StringNullableWithAggregatesFilter<"NotebookEntry"> | string | null
    pinned?: BoolWithAggregatesFilter<"NotebookEntry"> | boolean
    notebookId?: IntWithAggregatesFilter<"NotebookEntry"> | number
  }

  export type TopicCreateInput = {
    name: string
    pinned?: boolean
    urls?: UrlCreateNestedManyWithoutTopicInput
    attachments?: AttachmentCreateNestedManyWithoutTopicInput
    notebook?: NotebookCreateNestedOneWithoutTopicInput
    parent?: TopicCreateNestedOneWithoutSubtopicsInput
    subtopics?: TopicCreateNestedManyWithoutParentInput
    tags?: TagsOnTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateInput = {
    id?: number
    name: string
    pinned?: boolean
    parentId?: number | null
    urls?: UrlUncheckedCreateNestedManyWithoutTopicInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTopicInput
    notebook?: NotebookUncheckedCreateNestedOneWithoutTopicInput
    subtopics?: TopicUncheckedCreateNestedManyWithoutParentInput
    tags?: TagsOnTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    urls?: UrlUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUpdateManyWithoutTopicNestedInput
    notebook?: NotebookUpdateOneWithoutTopicNestedInput
    parent?: TopicUpdateOneWithoutSubtopicsNestedInput
    subtopics?: TopicUpdateManyWithoutParentNestedInput
    tags?: TagsOnTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    urls?: UrlUncheckedUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTopicNestedInput
    notebook?: NotebookUncheckedUpdateOneWithoutTopicNestedInput
    subtopics?: TopicUncheckedUpdateManyWithoutParentNestedInput
    tags?: TagsOnTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateManyInput = {
    id?: number
    name: string
    pinned?: boolean
    parentId?: number | null
  }

  export type TopicUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TopicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TagCreateInput = {
    name: string
    topics?: TagsOnTopicCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name: string
    topics?: TagsOnTopicUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    topics?: TagsOnTopicUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    topics?: TagsOnTopicUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    name: string
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagsOnTopicCreateInput = {
    topic: TopicCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutTopicsInput
  }

  export type TagsOnTopicUncheckedCreateInput = {
    topicId: number
    tagId: number
  }

  export type TagsOnTopicUpdateInput = {
    topic?: TopicUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutTopicsNestedInput
  }

  export type TagsOnTopicUncheckedUpdateInput = {
    topicId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type TagsOnTopicCreateManyInput = {
    topicId: number
    tagId: number
  }

  export type TagsOnTopicUpdateManyMutationInput = {

  }

  export type TagsOnTopicUncheckedUpdateManyInput = {
    topicId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type AttachmentCreateInput = {
    name: string
    createdAt?: Date | string
    comments?: string | null
    pinned: boolean
    attachmentData: Buffer
    attachmentType: string
    topic: TopicCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    comments?: string | null
    pinned: boolean
    attachmentData: Buffer
    attachmentType: string
    topicId: number
  }

  export type AttachmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
    attachmentData?: BytesFieldUpdateOperationsInput | Buffer
    attachmentType?: StringFieldUpdateOperationsInput | string
    topic?: TopicUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
    attachmentData?: BytesFieldUpdateOperationsInput | Buffer
    attachmentType?: StringFieldUpdateOperationsInput | string
    topicId?: IntFieldUpdateOperationsInput | number
  }

  export type AttachmentCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    comments?: string | null
    pinned: boolean
    attachmentData: Buffer
    attachmentType: string
    topicId: number
  }

  export type AttachmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
    attachmentData?: BytesFieldUpdateOperationsInput | Buffer
    attachmentType?: StringFieldUpdateOperationsInput | string
  }

  export type AttachmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
    attachmentData?: BytesFieldUpdateOperationsInput | Buffer
    attachmentType?: StringFieldUpdateOperationsInput | string
    topicId?: IntFieldUpdateOperationsInput | number
  }

  export type UrlCreateInput = {
    name: string
    url?: string | null
    createdAt?: Date | string
    comments?: string | null
    pinned: boolean
    topic: TopicCreateNestedOneWithoutUrlsInput
  }

  export type UrlUncheckedCreateInput = {
    id?: number
    name: string
    url?: string | null
    createdAt?: Date | string
    comments?: string | null
    pinned: boolean
    topicId: number
  }

  export type UrlUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
    topic?: TopicUpdateOneRequiredWithoutUrlsNestedInput
  }

  export type UrlUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
    topicId?: IntFieldUpdateOperationsInput | number
  }

  export type UrlCreateManyInput = {
    id?: number
    name: string
    url?: string | null
    createdAt?: Date | string
    comments?: string | null
    pinned: boolean
    topicId: number
  }

  export type UrlUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UrlUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
    topicId?: IntFieldUpdateOperationsInput | number
  }

  export type NotebookCreateInput = {
    title: string
    entries?: NotebookEntryCreateNestedManyWithoutNotebookInput
    topic: TopicCreateNestedOneWithoutNotebookInput
  }

  export type NotebookUncheckedCreateInput = {
    id?: number
    title: string
    topicId: number
    entries?: NotebookEntryUncheckedCreateNestedManyWithoutNotebookInput
  }

  export type NotebookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    entries?: NotebookEntryUpdateManyWithoutNotebookNestedInput
    topic?: TopicUpdateOneRequiredWithoutNotebookNestedInput
  }

  export type NotebookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topicId?: IntFieldUpdateOperationsInput | number
    entries?: NotebookEntryUncheckedUpdateManyWithoutNotebookNestedInput
  }

  export type NotebookCreateManyInput = {
    id?: number
    title: string
    topicId: number
  }

  export type NotebookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type NotebookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topicId?: IntFieldUpdateOperationsInput | number
  }

  export type NotebookEntryCreateInput = {
    title: string
    content?: string | null
    pinned?: boolean
    notebook: NotebookCreateNestedOneWithoutEntriesInput
  }

  export type NotebookEntryUncheckedCreateInput = {
    id?: number
    title: string
    content?: string | null
    pinned?: boolean
    notebookId: number
  }

  export type NotebookEntryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
    notebook?: NotebookUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type NotebookEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
    notebookId?: IntFieldUpdateOperationsInput | number
  }

  export type NotebookEntryCreateManyInput = {
    id?: number
    title: string
    content?: string | null
    pinned?: boolean
    notebookId: number
  }

  export type NotebookEntryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotebookEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
    notebookId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UrlListRelationFilter = {
    every?: UrlWhereInput
    some?: UrlWhereInput
    none?: UrlWhereInput
  }

  export type AttachmentListRelationFilter = {
    every?: AttachmentWhereInput
    some?: AttachmentWhereInput
    none?: AttachmentWhereInput
  }

  export type NotebookNullableRelationFilter = {
    is?: NotebookWhereInput | null
    isNot?: NotebookWhereInput | null
  }

  export type TopicNullableRelationFilter = {
    is?: TopicWhereInput | null
    isNot?: TopicWhereInput | null
  }

  export type TopicListRelationFilter = {
    every?: TopicWhereInput
    some?: TopicWhereInput
    none?: TopicWhereInput
  }

  export type TagsOnTopicListRelationFilter = {
    every?: TagsOnTopicWhereInput
    some?: TagsOnTopicWhereInput
    none?: TagsOnTopicWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UrlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagsOnTopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pinned?: SortOrder
    parentId?: SortOrder
  }

  export type TopicAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type TopicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pinned?: SortOrder
    parentId?: SortOrder
  }

  export type TopicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pinned?: SortOrder
    parentId?: SortOrder
  }

  export type TopicSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TopicRelationFilter = {
    is?: TopicWhereInput
    isNot?: TopicWhereInput
  }

  export type TagRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type TagsOnTopicTagIdTopicIdCompoundUniqueInput = {
    tagId: number
    topicId: number
  }

  export type TagsOnTopicCountOrderByAggregateInput = {
    topicId?: SortOrder
    tagId?: SortOrder
  }

  export type TagsOnTopicAvgOrderByAggregateInput = {
    topicId?: SortOrder
    tagId?: SortOrder
  }

  export type TagsOnTopicMaxOrderByAggregateInput = {
    topicId?: SortOrder
    tagId?: SortOrder
  }

  export type TagsOnTopicMinOrderByAggregateInput = {
    topicId?: SortOrder
    tagId?: SortOrder
  }

  export type TagsOnTopicSumOrderByAggregateInput = {
    topicId?: SortOrder
    tagId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type AttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    comments?: SortOrder
    pinned?: SortOrder
    attachmentData?: SortOrder
    attachmentType?: SortOrder
    topicId?: SortOrder
  }

  export type AttachmentAvgOrderByAggregateInput = {
    id?: SortOrder
    topicId?: SortOrder
  }

  export type AttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    comments?: SortOrder
    pinned?: SortOrder
    attachmentData?: SortOrder
    attachmentType?: SortOrder
    topicId?: SortOrder
  }

  export type AttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    comments?: SortOrder
    pinned?: SortOrder
    attachmentData?: SortOrder
    attachmentType?: SortOrder
    topicId?: SortOrder
  }

  export type AttachmentSumOrderByAggregateInput = {
    id?: SortOrder
    topicId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type UrlCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    comments?: SortOrder
    pinned?: SortOrder
    topicId?: SortOrder
  }

  export type UrlAvgOrderByAggregateInput = {
    id?: SortOrder
    topicId?: SortOrder
  }

  export type UrlMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    comments?: SortOrder
    pinned?: SortOrder
    topicId?: SortOrder
  }

  export type UrlMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    comments?: SortOrder
    pinned?: SortOrder
    topicId?: SortOrder
  }

  export type UrlSumOrderByAggregateInput = {
    id?: SortOrder
    topicId?: SortOrder
  }

  export type NotebookEntryListRelationFilter = {
    every?: NotebookEntryWhereInput
    some?: NotebookEntryWhereInput
    none?: NotebookEntryWhereInput
  }

  export type NotebookEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotebookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topicId?: SortOrder
  }

  export type NotebookAvgOrderByAggregateInput = {
    id?: SortOrder
    topicId?: SortOrder
  }

  export type NotebookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topicId?: SortOrder
  }

  export type NotebookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topicId?: SortOrder
  }

  export type NotebookSumOrderByAggregateInput = {
    id?: SortOrder
    topicId?: SortOrder
  }

  export type NotebookRelationFilter = {
    is?: NotebookWhereInput
    isNot?: NotebookWhereInput
  }

  export type NotebookEntryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pinned?: SortOrder
    notebookId?: SortOrder
  }

  export type NotebookEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    notebookId?: SortOrder
  }

  export type NotebookEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pinned?: SortOrder
    notebookId?: SortOrder
  }

  export type NotebookEntryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    pinned?: SortOrder
    notebookId?: SortOrder
  }

  export type NotebookEntrySumOrderByAggregateInput = {
    id?: SortOrder
    notebookId?: SortOrder
  }

  export type UrlCreateNestedManyWithoutTopicInput = {
    create?: XOR<UrlCreateWithoutTopicInput, UrlUncheckedCreateWithoutTopicInput> | UrlCreateWithoutTopicInput[] | UrlUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: UrlCreateOrConnectWithoutTopicInput | UrlCreateOrConnectWithoutTopicInput[]
    createMany?: UrlCreateManyTopicInputEnvelope
    connect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
  }

  export type AttachmentCreateNestedManyWithoutTopicInput = {
    create?: XOR<AttachmentCreateWithoutTopicInput, AttachmentUncheckedCreateWithoutTopicInput> | AttachmentCreateWithoutTopicInput[] | AttachmentUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTopicInput | AttachmentCreateOrConnectWithoutTopicInput[]
    createMany?: AttachmentCreateManyTopicInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type NotebookCreateNestedOneWithoutTopicInput = {
    create?: XOR<NotebookCreateWithoutTopicInput, NotebookUncheckedCreateWithoutTopicInput>
    connectOrCreate?: NotebookCreateOrConnectWithoutTopicInput
    connect?: NotebookWhereUniqueInput
  }

  export type TopicCreateNestedOneWithoutSubtopicsInput = {
    create?: XOR<TopicCreateWithoutSubtopicsInput, TopicUncheckedCreateWithoutSubtopicsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutSubtopicsInput
    connect?: TopicWhereUniqueInput
  }

  export type TopicCreateNestedManyWithoutParentInput = {
    create?: XOR<TopicCreateWithoutParentInput, TopicUncheckedCreateWithoutParentInput> | TopicCreateWithoutParentInput[] | TopicUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutParentInput | TopicCreateOrConnectWithoutParentInput[]
    createMany?: TopicCreateManyParentInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type TagsOnTopicCreateNestedManyWithoutTopicInput = {
    create?: XOR<TagsOnTopicCreateWithoutTopicInput, TagsOnTopicUncheckedCreateWithoutTopicInput> | TagsOnTopicCreateWithoutTopicInput[] | TagsOnTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: TagsOnTopicCreateOrConnectWithoutTopicInput | TagsOnTopicCreateOrConnectWithoutTopicInput[]
    createMany?: TagsOnTopicCreateManyTopicInputEnvelope
    connect?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
  }

  export type UrlUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<UrlCreateWithoutTopicInput, UrlUncheckedCreateWithoutTopicInput> | UrlCreateWithoutTopicInput[] | UrlUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: UrlCreateOrConnectWithoutTopicInput | UrlCreateOrConnectWithoutTopicInput[]
    createMany?: UrlCreateManyTopicInputEnvelope
    connect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<AttachmentCreateWithoutTopicInput, AttachmentUncheckedCreateWithoutTopicInput> | AttachmentCreateWithoutTopicInput[] | AttachmentUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTopicInput | AttachmentCreateOrConnectWithoutTopicInput[]
    createMany?: AttachmentCreateManyTopicInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type NotebookUncheckedCreateNestedOneWithoutTopicInput = {
    create?: XOR<NotebookCreateWithoutTopicInput, NotebookUncheckedCreateWithoutTopicInput>
    connectOrCreate?: NotebookCreateOrConnectWithoutTopicInput
    connect?: NotebookWhereUniqueInput
  }

  export type TopicUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<TopicCreateWithoutParentInput, TopicUncheckedCreateWithoutParentInput> | TopicCreateWithoutParentInput[] | TopicUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutParentInput | TopicCreateOrConnectWithoutParentInput[]
    createMany?: TopicCreateManyParentInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type TagsOnTopicUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<TagsOnTopicCreateWithoutTopicInput, TagsOnTopicUncheckedCreateWithoutTopicInput> | TagsOnTopicCreateWithoutTopicInput[] | TagsOnTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: TagsOnTopicCreateOrConnectWithoutTopicInput | TagsOnTopicCreateOrConnectWithoutTopicInput[]
    createMany?: TagsOnTopicCreateManyTopicInputEnvelope
    connect?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UrlUpdateManyWithoutTopicNestedInput = {
    create?: XOR<UrlCreateWithoutTopicInput, UrlUncheckedCreateWithoutTopicInput> | UrlCreateWithoutTopicInput[] | UrlUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: UrlCreateOrConnectWithoutTopicInput | UrlCreateOrConnectWithoutTopicInput[]
    upsert?: UrlUpsertWithWhereUniqueWithoutTopicInput | UrlUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: UrlCreateManyTopicInputEnvelope
    set?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    disconnect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    delete?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    connect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    update?: UrlUpdateWithWhereUniqueWithoutTopicInput | UrlUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: UrlUpdateManyWithWhereWithoutTopicInput | UrlUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: UrlScalarWhereInput | UrlScalarWhereInput[]
  }

  export type AttachmentUpdateManyWithoutTopicNestedInput = {
    create?: XOR<AttachmentCreateWithoutTopicInput, AttachmentUncheckedCreateWithoutTopicInput> | AttachmentCreateWithoutTopicInput[] | AttachmentUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTopicInput | AttachmentCreateOrConnectWithoutTopicInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutTopicInput | AttachmentUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: AttachmentCreateManyTopicInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutTopicInput | AttachmentUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutTopicInput | AttachmentUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type NotebookUpdateOneWithoutTopicNestedInput = {
    create?: XOR<NotebookCreateWithoutTopicInput, NotebookUncheckedCreateWithoutTopicInput>
    connectOrCreate?: NotebookCreateOrConnectWithoutTopicInput
    upsert?: NotebookUpsertWithoutTopicInput
    disconnect?: NotebookWhereInput | boolean
    delete?: NotebookWhereInput | boolean
    connect?: NotebookWhereUniqueInput
    update?: XOR<XOR<NotebookUpdateToOneWithWhereWithoutTopicInput, NotebookUpdateWithoutTopicInput>, NotebookUncheckedUpdateWithoutTopicInput>
  }

  export type TopicUpdateOneWithoutSubtopicsNestedInput = {
    create?: XOR<TopicCreateWithoutSubtopicsInput, TopicUncheckedCreateWithoutSubtopicsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutSubtopicsInput
    upsert?: TopicUpsertWithoutSubtopicsInput
    disconnect?: TopicWhereInput | boolean
    delete?: TopicWhereInput | boolean
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutSubtopicsInput, TopicUpdateWithoutSubtopicsInput>, TopicUncheckedUpdateWithoutSubtopicsInput>
  }

  export type TopicUpdateManyWithoutParentNestedInput = {
    create?: XOR<TopicCreateWithoutParentInput, TopicUncheckedCreateWithoutParentInput> | TopicCreateWithoutParentInput[] | TopicUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutParentInput | TopicCreateOrConnectWithoutParentInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutParentInput | TopicUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TopicCreateManyParentInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutParentInput | TopicUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutParentInput | TopicUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type TagsOnTopicUpdateManyWithoutTopicNestedInput = {
    create?: XOR<TagsOnTopicCreateWithoutTopicInput, TagsOnTopicUncheckedCreateWithoutTopicInput> | TagsOnTopicCreateWithoutTopicInput[] | TagsOnTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: TagsOnTopicCreateOrConnectWithoutTopicInput | TagsOnTopicCreateOrConnectWithoutTopicInput[]
    upsert?: TagsOnTopicUpsertWithWhereUniqueWithoutTopicInput | TagsOnTopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: TagsOnTopicCreateManyTopicInputEnvelope
    set?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
    disconnect?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
    delete?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
    connect?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
    update?: TagsOnTopicUpdateWithWhereUniqueWithoutTopicInput | TagsOnTopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: TagsOnTopicUpdateManyWithWhereWithoutTopicInput | TagsOnTopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: TagsOnTopicScalarWhereInput | TagsOnTopicScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UrlUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<UrlCreateWithoutTopicInput, UrlUncheckedCreateWithoutTopicInput> | UrlCreateWithoutTopicInput[] | UrlUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: UrlCreateOrConnectWithoutTopicInput | UrlCreateOrConnectWithoutTopicInput[]
    upsert?: UrlUpsertWithWhereUniqueWithoutTopicInput | UrlUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: UrlCreateManyTopicInputEnvelope
    set?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    disconnect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    delete?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    connect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    update?: UrlUpdateWithWhereUniqueWithoutTopicInput | UrlUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: UrlUpdateManyWithWhereWithoutTopicInput | UrlUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: UrlScalarWhereInput | UrlScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<AttachmentCreateWithoutTopicInput, AttachmentUncheckedCreateWithoutTopicInput> | AttachmentCreateWithoutTopicInput[] | AttachmentUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutTopicInput | AttachmentCreateOrConnectWithoutTopicInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutTopicInput | AttachmentUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: AttachmentCreateManyTopicInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutTopicInput | AttachmentUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutTopicInput | AttachmentUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type NotebookUncheckedUpdateOneWithoutTopicNestedInput = {
    create?: XOR<NotebookCreateWithoutTopicInput, NotebookUncheckedCreateWithoutTopicInput>
    connectOrCreate?: NotebookCreateOrConnectWithoutTopicInput
    upsert?: NotebookUpsertWithoutTopicInput
    disconnect?: NotebookWhereInput | boolean
    delete?: NotebookWhereInput | boolean
    connect?: NotebookWhereUniqueInput
    update?: XOR<XOR<NotebookUpdateToOneWithWhereWithoutTopicInput, NotebookUpdateWithoutTopicInput>, NotebookUncheckedUpdateWithoutTopicInput>
  }

  export type TopicUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<TopicCreateWithoutParentInput, TopicUncheckedCreateWithoutParentInput> | TopicCreateWithoutParentInput[] | TopicUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutParentInput | TopicCreateOrConnectWithoutParentInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutParentInput | TopicUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TopicCreateManyParentInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutParentInput | TopicUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutParentInput | TopicUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type TagsOnTopicUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<TagsOnTopicCreateWithoutTopicInput, TagsOnTopicUncheckedCreateWithoutTopicInput> | TagsOnTopicCreateWithoutTopicInput[] | TagsOnTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: TagsOnTopicCreateOrConnectWithoutTopicInput | TagsOnTopicCreateOrConnectWithoutTopicInput[]
    upsert?: TagsOnTopicUpsertWithWhereUniqueWithoutTopicInput | TagsOnTopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: TagsOnTopicCreateManyTopicInputEnvelope
    set?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
    disconnect?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
    delete?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
    connect?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
    update?: TagsOnTopicUpdateWithWhereUniqueWithoutTopicInput | TagsOnTopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: TagsOnTopicUpdateManyWithWhereWithoutTopicInput | TagsOnTopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: TagsOnTopicScalarWhereInput | TagsOnTopicScalarWhereInput[]
  }

  export type TagsOnTopicCreateNestedManyWithoutTagInput = {
    create?: XOR<TagsOnTopicCreateWithoutTagInput, TagsOnTopicUncheckedCreateWithoutTagInput> | TagsOnTopicCreateWithoutTagInput[] | TagsOnTopicUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsOnTopicCreateOrConnectWithoutTagInput | TagsOnTopicCreateOrConnectWithoutTagInput[]
    createMany?: TagsOnTopicCreateManyTagInputEnvelope
    connect?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
  }

  export type TagsOnTopicUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<TagsOnTopicCreateWithoutTagInput, TagsOnTopicUncheckedCreateWithoutTagInput> | TagsOnTopicCreateWithoutTagInput[] | TagsOnTopicUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsOnTopicCreateOrConnectWithoutTagInput | TagsOnTopicCreateOrConnectWithoutTagInput[]
    createMany?: TagsOnTopicCreateManyTagInputEnvelope
    connect?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
  }

  export type TagsOnTopicUpdateManyWithoutTagNestedInput = {
    create?: XOR<TagsOnTopicCreateWithoutTagInput, TagsOnTopicUncheckedCreateWithoutTagInput> | TagsOnTopicCreateWithoutTagInput[] | TagsOnTopicUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsOnTopicCreateOrConnectWithoutTagInput | TagsOnTopicCreateOrConnectWithoutTagInput[]
    upsert?: TagsOnTopicUpsertWithWhereUniqueWithoutTagInput | TagsOnTopicUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TagsOnTopicCreateManyTagInputEnvelope
    set?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
    disconnect?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
    delete?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
    connect?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
    update?: TagsOnTopicUpdateWithWhereUniqueWithoutTagInput | TagsOnTopicUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TagsOnTopicUpdateManyWithWhereWithoutTagInput | TagsOnTopicUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TagsOnTopicScalarWhereInput | TagsOnTopicScalarWhereInput[]
  }

  export type TagsOnTopicUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<TagsOnTopicCreateWithoutTagInput, TagsOnTopicUncheckedCreateWithoutTagInput> | TagsOnTopicCreateWithoutTagInput[] | TagsOnTopicUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TagsOnTopicCreateOrConnectWithoutTagInput | TagsOnTopicCreateOrConnectWithoutTagInput[]
    upsert?: TagsOnTopicUpsertWithWhereUniqueWithoutTagInput | TagsOnTopicUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TagsOnTopicCreateManyTagInputEnvelope
    set?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
    disconnect?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
    delete?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
    connect?: TagsOnTopicWhereUniqueInput | TagsOnTopicWhereUniqueInput[]
    update?: TagsOnTopicUpdateWithWhereUniqueWithoutTagInput | TagsOnTopicUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TagsOnTopicUpdateManyWithWhereWithoutTagInput | TagsOnTopicUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TagsOnTopicScalarWhereInput | TagsOnTopicScalarWhereInput[]
  }

  export type TopicCreateNestedOneWithoutTagsInput = {
    create?: XOR<TopicCreateWithoutTagsInput, TopicUncheckedCreateWithoutTagsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutTagsInput
    connect?: TopicWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutTopicsInput = {
    create?: XOR<TagCreateWithoutTopicsInput, TagUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: TagCreateOrConnectWithoutTopicsInput
    connect?: TagWhereUniqueInput
  }

  export type TopicUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<TopicCreateWithoutTagsInput, TopicUncheckedCreateWithoutTagsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutTagsInput
    upsert?: TopicUpsertWithoutTagsInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutTagsInput, TopicUpdateWithoutTagsInput>, TopicUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutTopicsNestedInput = {
    create?: XOR<TagCreateWithoutTopicsInput, TagUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: TagCreateOrConnectWithoutTopicsInput
    upsert?: TagUpsertWithoutTopicsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutTopicsInput, TagUpdateWithoutTopicsInput>, TagUncheckedUpdateWithoutTopicsInput>
  }

  export type TopicCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<TopicCreateWithoutAttachmentsInput, TopicUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutAttachmentsInput
    connect?: TopicWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Buffer
  }

  export type TopicUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<TopicCreateWithoutAttachmentsInput, TopicUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutAttachmentsInput
    upsert?: TopicUpsertWithoutAttachmentsInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutAttachmentsInput, TopicUpdateWithoutAttachmentsInput>, TopicUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TopicCreateNestedOneWithoutUrlsInput = {
    create?: XOR<TopicCreateWithoutUrlsInput, TopicUncheckedCreateWithoutUrlsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutUrlsInput
    connect?: TopicWhereUniqueInput
  }

  export type TopicUpdateOneRequiredWithoutUrlsNestedInput = {
    create?: XOR<TopicCreateWithoutUrlsInput, TopicUncheckedCreateWithoutUrlsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutUrlsInput
    upsert?: TopicUpsertWithoutUrlsInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutUrlsInput, TopicUpdateWithoutUrlsInput>, TopicUncheckedUpdateWithoutUrlsInput>
  }

  export type NotebookEntryCreateNestedManyWithoutNotebookInput = {
    create?: XOR<NotebookEntryCreateWithoutNotebookInput, NotebookEntryUncheckedCreateWithoutNotebookInput> | NotebookEntryCreateWithoutNotebookInput[] | NotebookEntryUncheckedCreateWithoutNotebookInput[]
    connectOrCreate?: NotebookEntryCreateOrConnectWithoutNotebookInput | NotebookEntryCreateOrConnectWithoutNotebookInput[]
    createMany?: NotebookEntryCreateManyNotebookInputEnvelope
    connect?: NotebookEntryWhereUniqueInput | NotebookEntryWhereUniqueInput[]
  }

  export type TopicCreateNestedOneWithoutNotebookInput = {
    create?: XOR<TopicCreateWithoutNotebookInput, TopicUncheckedCreateWithoutNotebookInput>
    connectOrCreate?: TopicCreateOrConnectWithoutNotebookInput
    connect?: TopicWhereUniqueInput
  }

  export type NotebookEntryUncheckedCreateNestedManyWithoutNotebookInput = {
    create?: XOR<NotebookEntryCreateWithoutNotebookInput, NotebookEntryUncheckedCreateWithoutNotebookInput> | NotebookEntryCreateWithoutNotebookInput[] | NotebookEntryUncheckedCreateWithoutNotebookInput[]
    connectOrCreate?: NotebookEntryCreateOrConnectWithoutNotebookInput | NotebookEntryCreateOrConnectWithoutNotebookInput[]
    createMany?: NotebookEntryCreateManyNotebookInputEnvelope
    connect?: NotebookEntryWhereUniqueInput | NotebookEntryWhereUniqueInput[]
  }

  export type NotebookEntryUpdateManyWithoutNotebookNestedInput = {
    create?: XOR<NotebookEntryCreateWithoutNotebookInput, NotebookEntryUncheckedCreateWithoutNotebookInput> | NotebookEntryCreateWithoutNotebookInput[] | NotebookEntryUncheckedCreateWithoutNotebookInput[]
    connectOrCreate?: NotebookEntryCreateOrConnectWithoutNotebookInput | NotebookEntryCreateOrConnectWithoutNotebookInput[]
    upsert?: NotebookEntryUpsertWithWhereUniqueWithoutNotebookInput | NotebookEntryUpsertWithWhereUniqueWithoutNotebookInput[]
    createMany?: NotebookEntryCreateManyNotebookInputEnvelope
    set?: NotebookEntryWhereUniqueInput | NotebookEntryWhereUniqueInput[]
    disconnect?: NotebookEntryWhereUniqueInput | NotebookEntryWhereUniqueInput[]
    delete?: NotebookEntryWhereUniqueInput | NotebookEntryWhereUniqueInput[]
    connect?: NotebookEntryWhereUniqueInput | NotebookEntryWhereUniqueInput[]
    update?: NotebookEntryUpdateWithWhereUniqueWithoutNotebookInput | NotebookEntryUpdateWithWhereUniqueWithoutNotebookInput[]
    updateMany?: NotebookEntryUpdateManyWithWhereWithoutNotebookInput | NotebookEntryUpdateManyWithWhereWithoutNotebookInput[]
    deleteMany?: NotebookEntryScalarWhereInput | NotebookEntryScalarWhereInput[]
  }

  export type TopicUpdateOneRequiredWithoutNotebookNestedInput = {
    create?: XOR<TopicCreateWithoutNotebookInput, TopicUncheckedCreateWithoutNotebookInput>
    connectOrCreate?: TopicCreateOrConnectWithoutNotebookInput
    upsert?: TopicUpsertWithoutNotebookInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutNotebookInput, TopicUpdateWithoutNotebookInput>, TopicUncheckedUpdateWithoutNotebookInput>
  }

  export type NotebookEntryUncheckedUpdateManyWithoutNotebookNestedInput = {
    create?: XOR<NotebookEntryCreateWithoutNotebookInput, NotebookEntryUncheckedCreateWithoutNotebookInput> | NotebookEntryCreateWithoutNotebookInput[] | NotebookEntryUncheckedCreateWithoutNotebookInput[]
    connectOrCreate?: NotebookEntryCreateOrConnectWithoutNotebookInput | NotebookEntryCreateOrConnectWithoutNotebookInput[]
    upsert?: NotebookEntryUpsertWithWhereUniqueWithoutNotebookInput | NotebookEntryUpsertWithWhereUniqueWithoutNotebookInput[]
    createMany?: NotebookEntryCreateManyNotebookInputEnvelope
    set?: NotebookEntryWhereUniqueInput | NotebookEntryWhereUniqueInput[]
    disconnect?: NotebookEntryWhereUniqueInput | NotebookEntryWhereUniqueInput[]
    delete?: NotebookEntryWhereUniqueInput | NotebookEntryWhereUniqueInput[]
    connect?: NotebookEntryWhereUniqueInput | NotebookEntryWhereUniqueInput[]
    update?: NotebookEntryUpdateWithWhereUniqueWithoutNotebookInput | NotebookEntryUpdateWithWhereUniqueWithoutNotebookInput[]
    updateMany?: NotebookEntryUpdateManyWithWhereWithoutNotebookInput | NotebookEntryUpdateManyWithWhereWithoutNotebookInput[]
    deleteMany?: NotebookEntryScalarWhereInput | NotebookEntryScalarWhereInput[]
  }

  export type NotebookCreateNestedOneWithoutEntriesInput = {
    create?: XOR<NotebookCreateWithoutEntriesInput, NotebookUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: NotebookCreateOrConnectWithoutEntriesInput
    connect?: NotebookWhereUniqueInput
  }

  export type NotebookUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<NotebookCreateWithoutEntriesInput, NotebookUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: NotebookCreateOrConnectWithoutEntriesInput
    upsert?: NotebookUpsertWithoutEntriesInput
    connect?: NotebookWhereUniqueInput
    update?: XOR<XOR<NotebookUpdateToOneWithWhereWithoutEntriesInput, NotebookUpdateWithoutEntriesInput>, NotebookUncheckedUpdateWithoutEntriesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type UrlCreateWithoutTopicInput = {
    name: string
    url?: string | null
    createdAt?: Date | string
    comments?: string | null
    pinned: boolean
  }

  export type UrlUncheckedCreateWithoutTopicInput = {
    id?: number
    name: string
    url?: string | null
    createdAt?: Date | string
    comments?: string | null
    pinned: boolean
  }

  export type UrlCreateOrConnectWithoutTopicInput = {
    where: UrlWhereUniqueInput
    create: XOR<UrlCreateWithoutTopicInput, UrlUncheckedCreateWithoutTopicInput>
  }

  export type UrlCreateManyTopicInputEnvelope = {
    data: UrlCreateManyTopicInput | UrlCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentCreateWithoutTopicInput = {
    name: string
    createdAt?: Date | string
    comments?: string | null
    pinned: boolean
    attachmentData: Buffer
    attachmentType: string
  }

  export type AttachmentUncheckedCreateWithoutTopicInput = {
    id?: number
    name: string
    createdAt?: Date | string
    comments?: string | null
    pinned: boolean
    attachmentData: Buffer
    attachmentType: string
  }

  export type AttachmentCreateOrConnectWithoutTopicInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutTopicInput, AttachmentUncheckedCreateWithoutTopicInput>
  }

  export type AttachmentCreateManyTopicInputEnvelope = {
    data: AttachmentCreateManyTopicInput | AttachmentCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type NotebookCreateWithoutTopicInput = {
    title: string
    entries?: NotebookEntryCreateNestedManyWithoutNotebookInput
  }

  export type NotebookUncheckedCreateWithoutTopicInput = {
    id?: number
    title: string
    entries?: NotebookEntryUncheckedCreateNestedManyWithoutNotebookInput
  }

  export type NotebookCreateOrConnectWithoutTopicInput = {
    where: NotebookWhereUniqueInput
    create: XOR<NotebookCreateWithoutTopicInput, NotebookUncheckedCreateWithoutTopicInput>
  }

  export type TopicCreateWithoutSubtopicsInput = {
    name: string
    pinned?: boolean
    urls?: UrlCreateNestedManyWithoutTopicInput
    attachments?: AttachmentCreateNestedManyWithoutTopicInput
    notebook?: NotebookCreateNestedOneWithoutTopicInput
    parent?: TopicCreateNestedOneWithoutSubtopicsInput
    tags?: TagsOnTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutSubtopicsInput = {
    id?: number
    name: string
    pinned?: boolean
    parentId?: number | null
    urls?: UrlUncheckedCreateNestedManyWithoutTopicInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTopicInput
    notebook?: NotebookUncheckedCreateNestedOneWithoutTopicInput
    tags?: TagsOnTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutSubtopicsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutSubtopicsInput, TopicUncheckedCreateWithoutSubtopicsInput>
  }

  export type TopicCreateWithoutParentInput = {
    name: string
    pinned?: boolean
    urls?: UrlCreateNestedManyWithoutTopicInput
    attachments?: AttachmentCreateNestedManyWithoutTopicInput
    notebook?: NotebookCreateNestedOneWithoutTopicInput
    subtopics?: TopicCreateNestedManyWithoutParentInput
    tags?: TagsOnTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutParentInput = {
    id?: number
    name: string
    pinned?: boolean
    urls?: UrlUncheckedCreateNestedManyWithoutTopicInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTopicInput
    notebook?: NotebookUncheckedCreateNestedOneWithoutTopicInput
    subtopics?: TopicUncheckedCreateNestedManyWithoutParentInput
    tags?: TagsOnTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutParentInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutParentInput, TopicUncheckedCreateWithoutParentInput>
  }

  export type TopicCreateManyParentInputEnvelope = {
    data: TopicCreateManyParentInput | TopicCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type TagsOnTopicCreateWithoutTopicInput = {
    tag: TagCreateNestedOneWithoutTopicsInput
  }

  export type TagsOnTopicUncheckedCreateWithoutTopicInput = {
    tagId: number
  }

  export type TagsOnTopicCreateOrConnectWithoutTopicInput = {
    where: TagsOnTopicWhereUniqueInput
    create: XOR<TagsOnTopicCreateWithoutTopicInput, TagsOnTopicUncheckedCreateWithoutTopicInput>
  }

  export type TagsOnTopicCreateManyTopicInputEnvelope = {
    data: TagsOnTopicCreateManyTopicInput | TagsOnTopicCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type UrlUpsertWithWhereUniqueWithoutTopicInput = {
    where: UrlWhereUniqueInput
    update: XOR<UrlUpdateWithoutTopicInput, UrlUncheckedUpdateWithoutTopicInput>
    create: XOR<UrlCreateWithoutTopicInput, UrlUncheckedCreateWithoutTopicInput>
  }

  export type UrlUpdateWithWhereUniqueWithoutTopicInput = {
    where: UrlWhereUniqueInput
    data: XOR<UrlUpdateWithoutTopicInput, UrlUncheckedUpdateWithoutTopicInput>
  }

  export type UrlUpdateManyWithWhereWithoutTopicInput = {
    where: UrlScalarWhereInput
    data: XOR<UrlUpdateManyMutationInput, UrlUncheckedUpdateManyWithoutTopicInput>
  }

  export type UrlScalarWhereInput = {
    AND?: UrlScalarWhereInput | UrlScalarWhereInput[]
    OR?: UrlScalarWhereInput[]
    NOT?: UrlScalarWhereInput | UrlScalarWhereInput[]
    id?: IntFilter<"Url"> | number
    name?: StringFilter<"Url"> | string
    url?: StringNullableFilter<"Url"> | string | null
    createdAt?: DateTimeFilter<"Url"> | Date | string
    comments?: StringNullableFilter<"Url"> | string | null
    pinned?: BoolFilter<"Url"> | boolean
    topicId?: IntFilter<"Url"> | number
  }

  export type AttachmentUpsertWithWhereUniqueWithoutTopicInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutTopicInput, AttachmentUncheckedUpdateWithoutTopicInput>
    create: XOR<AttachmentCreateWithoutTopicInput, AttachmentUncheckedCreateWithoutTopicInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutTopicInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutTopicInput, AttachmentUncheckedUpdateWithoutTopicInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutTopicInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutTopicInput>
  }

  export type AttachmentScalarWhereInput = {
    AND?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    OR?: AttachmentScalarWhereInput[]
    NOT?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    id?: IntFilter<"Attachment"> | number
    name?: StringFilter<"Attachment"> | string
    createdAt?: DateTimeFilter<"Attachment"> | Date | string
    comments?: StringNullableFilter<"Attachment"> | string | null
    pinned?: BoolFilter<"Attachment"> | boolean
    attachmentData?: BytesFilter<"Attachment"> | Buffer
    attachmentType?: StringFilter<"Attachment"> | string
    topicId?: IntFilter<"Attachment"> | number
  }

  export type NotebookUpsertWithoutTopicInput = {
    update: XOR<NotebookUpdateWithoutTopicInput, NotebookUncheckedUpdateWithoutTopicInput>
    create: XOR<NotebookCreateWithoutTopicInput, NotebookUncheckedCreateWithoutTopicInput>
    where?: NotebookWhereInput
  }

  export type NotebookUpdateToOneWithWhereWithoutTopicInput = {
    where?: NotebookWhereInput
    data: XOR<NotebookUpdateWithoutTopicInput, NotebookUncheckedUpdateWithoutTopicInput>
  }

  export type NotebookUpdateWithoutTopicInput = {
    title?: StringFieldUpdateOperationsInput | string
    entries?: NotebookEntryUpdateManyWithoutNotebookNestedInput
  }

  export type NotebookUncheckedUpdateWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    entries?: NotebookEntryUncheckedUpdateManyWithoutNotebookNestedInput
  }

  export type TopicUpsertWithoutSubtopicsInput = {
    update: XOR<TopicUpdateWithoutSubtopicsInput, TopicUncheckedUpdateWithoutSubtopicsInput>
    create: XOR<TopicCreateWithoutSubtopicsInput, TopicUncheckedCreateWithoutSubtopicsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutSubtopicsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutSubtopicsInput, TopicUncheckedUpdateWithoutSubtopicsInput>
  }

  export type TopicUpdateWithoutSubtopicsInput = {
    name?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    urls?: UrlUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUpdateManyWithoutTopicNestedInput
    notebook?: NotebookUpdateOneWithoutTopicNestedInput
    parent?: TopicUpdateOneWithoutSubtopicsNestedInput
    tags?: TagsOnTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutSubtopicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    urls?: UrlUncheckedUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTopicNestedInput
    notebook?: NotebookUncheckedUpdateOneWithoutTopicNestedInput
    tags?: TagsOnTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicUpsertWithWhereUniqueWithoutParentInput = {
    where: TopicWhereUniqueInput
    update: XOR<TopicUpdateWithoutParentInput, TopicUncheckedUpdateWithoutParentInput>
    create: XOR<TopicCreateWithoutParentInput, TopicUncheckedCreateWithoutParentInput>
  }

  export type TopicUpdateWithWhereUniqueWithoutParentInput = {
    where: TopicWhereUniqueInput
    data: XOR<TopicUpdateWithoutParentInput, TopicUncheckedUpdateWithoutParentInput>
  }

  export type TopicUpdateManyWithWhereWithoutParentInput = {
    where: TopicScalarWhereInput
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyWithoutParentInput>
  }

  export type TopicScalarWhereInput = {
    AND?: TopicScalarWhereInput | TopicScalarWhereInput[]
    OR?: TopicScalarWhereInput[]
    NOT?: TopicScalarWhereInput | TopicScalarWhereInput[]
    id?: IntFilter<"Topic"> | number
    name?: StringFilter<"Topic"> | string
    pinned?: BoolFilter<"Topic"> | boolean
    parentId?: IntNullableFilter<"Topic"> | number | null
  }

  export type TagsOnTopicUpsertWithWhereUniqueWithoutTopicInput = {
    where: TagsOnTopicWhereUniqueInput
    update: XOR<TagsOnTopicUpdateWithoutTopicInput, TagsOnTopicUncheckedUpdateWithoutTopicInput>
    create: XOR<TagsOnTopicCreateWithoutTopicInput, TagsOnTopicUncheckedCreateWithoutTopicInput>
  }

  export type TagsOnTopicUpdateWithWhereUniqueWithoutTopicInput = {
    where: TagsOnTopicWhereUniqueInput
    data: XOR<TagsOnTopicUpdateWithoutTopicInput, TagsOnTopicUncheckedUpdateWithoutTopicInput>
  }

  export type TagsOnTopicUpdateManyWithWhereWithoutTopicInput = {
    where: TagsOnTopicScalarWhereInput
    data: XOR<TagsOnTopicUpdateManyMutationInput, TagsOnTopicUncheckedUpdateManyWithoutTopicInput>
  }

  export type TagsOnTopicScalarWhereInput = {
    AND?: TagsOnTopicScalarWhereInput | TagsOnTopicScalarWhereInput[]
    OR?: TagsOnTopicScalarWhereInput[]
    NOT?: TagsOnTopicScalarWhereInput | TagsOnTopicScalarWhereInput[]
    topicId?: IntFilter<"TagsOnTopic"> | number
    tagId?: IntFilter<"TagsOnTopic"> | number
  }

  export type TagsOnTopicCreateWithoutTagInput = {
    topic: TopicCreateNestedOneWithoutTagsInput
  }

  export type TagsOnTopicUncheckedCreateWithoutTagInput = {
    topicId: number
  }

  export type TagsOnTopicCreateOrConnectWithoutTagInput = {
    where: TagsOnTopicWhereUniqueInput
    create: XOR<TagsOnTopicCreateWithoutTagInput, TagsOnTopicUncheckedCreateWithoutTagInput>
  }

  export type TagsOnTopicCreateManyTagInputEnvelope = {
    data: TagsOnTopicCreateManyTagInput | TagsOnTopicCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type TagsOnTopicUpsertWithWhereUniqueWithoutTagInput = {
    where: TagsOnTopicWhereUniqueInput
    update: XOR<TagsOnTopicUpdateWithoutTagInput, TagsOnTopicUncheckedUpdateWithoutTagInput>
    create: XOR<TagsOnTopicCreateWithoutTagInput, TagsOnTopicUncheckedCreateWithoutTagInput>
  }

  export type TagsOnTopicUpdateWithWhereUniqueWithoutTagInput = {
    where: TagsOnTopicWhereUniqueInput
    data: XOR<TagsOnTopicUpdateWithoutTagInput, TagsOnTopicUncheckedUpdateWithoutTagInput>
  }

  export type TagsOnTopicUpdateManyWithWhereWithoutTagInput = {
    where: TagsOnTopicScalarWhereInput
    data: XOR<TagsOnTopicUpdateManyMutationInput, TagsOnTopicUncheckedUpdateManyWithoutTagInput>
  }

  export type TopicCreateWithoutTagsInput = {
    name: string
    pinned?: boolean
    urls?: UrlCreateNestedManyWithoutTopicInput
    attachments?: AttachmentCreateNestedManyWithoutTopicInput
    notebook?: NotebookCreateNestedOneWithoutTopicInput
    parent?: TopicCreateNestedOneWithoutSubtopicsInput
    subtopics?: TopicCreateNestedManyWithoutParentInput
  }

  export type TopicUncheckedCreateWithoutTagsInput = {
    id?: number
    name: string
    pinned?: boolean
    parentId?: number | null
    urls?: UrlUncheckedCreateNestedManyWithoutTopicInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTopicInput
    notebook?: NotebookUncheckedCreateNestedOneWithoutTopicInput
    subtopics?: TopicUncheckedCreateNestedManyWithoutParentInput
  }

  export type TopicCreateOrConnectWithoutTagsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutTagsInput, TopicUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutTopicsInput = {
    name: string
  }

  export type TagUncheckedCreateWithoutTopicsInput = {
    id?: number
    name: string
  }

  export type TagCreateOrConnectWithoutTopicsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTopicsInput, TagUncheckedCreateWithoutTopicsInput>
  }

  export type TopicUpsertWithoutTagsInput = {
    update: XOR<TopicUpdateWithoutTagsInput, TopicUncheckedUpdateWithoutTagsInput>
    create: XOR<TopicCreateWithoutTagsInput, TopicUncheckedCreateWithoutTagsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutTagsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutTagsInput, TopicUncheckedUpdateWithoutTagsInput>
  }

  export type TopicUpdateWithoutTagsInput = {
    name?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    urls?: UrlUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUpdateManyWithoutTopicNestedInput
    notebook?: NotebookUpdateOneWithoutTopicNestedInput
    parent?: TopicUpdateOneWithoutSubtopicsNestedInput
    subtopics?: TopicUpdateManyWithoutParentNestedInput
  }

  export type TopicUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    urls?: UrlUncheckedUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTopicNestedInput
    notebook?: NotebookUncheckedUpdateOneWithoutTopicNestedInput
    subtopics?: TopicUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TagUpsertWithoutTopicsInput = {
    update: XOR<TagUpdateWithoutTopicsInput, TagUncheckedUpdateWithoutTopicsInput>
    create: XOR<TagCreateWithoutTopicsInput, TagUncheckedCreateWithoutTopicsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutTopicsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutTopicsInput, TagUncheckedUpdateWithoutTopicsInput>
  }

  export type TagUpdateWithoutTopicsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutTopicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TopicCreateWithoutAttachmentsInput = {
    name: string
    pinned?: boolean
    urls?: UrlCreateNestedManyWithoutTopicInput
    notebook?: NotebookCreateNestedOneWithoutTopicInput
    parent?: TopicCreateNestedOneWithoutSubtopicsInput
    subtopics?: TopicCreateNestedManyWithoutParentInput
    tags?: TagsOnTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutAttachmentsInput = {
    id?: number
    name: string
    pinned?: boolean
    parentId?: number | null
    urls?: UrlUncheckedCreateNestedManyWithoutTopicInput
    notebook?: NotebookUncheckedCreateNestedOneWithoutTopicInput
    subtopics?: TopicUncheckedCreateNestedManyWithoutParentInput
    tags?: TagsOnTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutAttachmentsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutAttachmentsInput, TopicUncheckedCreateWithoutAttachmentsInput>
  }

  export type TopicUpsertWithoutAttachmentsInput = {
    update: XOR<TopicUpdateWithoutAttachmentsInput, TopicUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<TopicCreateWithoutAttachmentsInput, TopicUncheckedCreateWithoutAttachmentsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutAttachmentsInput, TopicUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TopicUpdateWithoutAttachmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    urls?: UrlUpdateManyWithoutTopicNestedInput
    notebook?: NotebookUpdateOneWithoutTopicNestedInput
    parent?: TopicUpdateOneWithoutSubtopicsNestedInput
    subtopics?: TopicUpdateManyWithoutParentNestedInput
    tags?: TagsOnTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutAttachmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    urls?: UrlUncheckedUpdateManyWithoutTopicNestedInput
    notebook?: NotebookUncheckedUpdateOneWithoutTopicNestedInput
    subtopics?: TopicUncheckedUpdateManyWithoutParentNestedInput
    tags?: TagsOnTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateWithoutUrlsInput = {
    name: string
    pinned?: boolean
    attachments?: AttachmentCreateNestedManyWithoutTopicInput
    notebook?: NotebookCreateNestedOneWithoutTopicInput
    parent?: TopicCreateNestedOneWithoutSubtopicsInput
    subtopics?: TopicCreateNestedManyWithoutParentInput
    tags?: TagsOnTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutUrlsInput = {
    id?: number
    name: string
    pinned?: boolean
    parentId?: number | null
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTopicInput
    notebook?: NotebookUncheckedCreateNestedOneWithoutTopicInput
    subtopics?: TopicUncheckedCreateNestedManyWithoutParentInput
    tags?: TagsOnTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutUrlsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutUrlsInput, TopicUncheckedCreateWithoutUrlsInput>
  }

  export type TopicUpsertWithoutUrlsInput = {
    update: XOR<TopicUpdateWithoutUrlsInput, TopicUncheckedUpdateWithoutUrlsInput>
    create: XOR<TopicCreateWithoutUrlsInput, TopicUncheckedCreateWithoutUrlsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutUrlsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutUrlsInput, TopicUncheckedUpdateWithoutUrlsInput>
  }

  export type TopicUpdateWithoutUrlsInput = {
    name?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    attachments?: AttachmentUpdateManyWithoutTopicNestedInput
    notebook?: NotebookUpdateOneWithoutTopicNestedInput
    parent?: TopicUpdateOneWithoutSubtopicsNestedInput
    subtopics?: TopicUpdateManyWithoutParentNestedInput
    tags?: TagsOnTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutUrlsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    attachments?: AttachmentUncheckedUpdateManyWithoutTopicNestedInput
    notebook?: NotebookUncheckedUpdateOneWithoutTopicNestedInput
    subtopics?: TopicUncheckedUpdateManyWithoutParentNestedInput
    tags?: TagsOnTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type NotebookEntryCreateWithoutNotebookInput = {
    title: string
    content?: string | null
    pinned?: boolean
  }

  export type NotebookEntryUncheckedCreateWithoutNotebookInput = {
    id?: number
    title: string
    content?: string | null
    pinned?: boolean
  }

  export type NotebookEntryCreateOrConnectWithoutNotebookInput = {
    where: NotebookEntryWhereUniqueInput
    create: XOR<NotebookEntryCreateWithoutNotebookInput, NotebookEntryUncheckedCreateWithoutNotebookInput>
  }

  export type NotebookEntryCreateManyNotebookInputEnvelope = {
    data: NotebookEntryCreateManyNotebookInput | NotebookEntryCreateManyNotebookInput[]
    skipDuplicates?: boolean
  }

  export type TopicCreateWithoutNotebookInput = {
    name: string
    pinned?: boolean
    urls?: UrlCreateNestedManyWithoutTopicInput
    attachments?: AttachmentCreateNestedManyWithoutTopicInput
    parent?: TopicCreateNestedOneWithoutSubtopicsInput
    subtopics?: TopicCreateNestedManyWithoutParentInput
    tags?: TagsOnTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutNotebookInput = {
    id?: number
    name: string
    pinned?: boolean
    parentId?: number | null
    urls?: UrlUncheckedCreateNestedManyWithoutTopicInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutTopicInput
    subtopics?: TopicUncheckedCreateNestedManyWithoutParentInput
    tags?: TagsOnTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutNotebookInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutNotebookInput, TopicUncheckedCreateWithoutNotebookInput>
  }

  export type NotebookEntryUpsertWithWhereUniqueWithoutNotebookInput = {
    where: NotebookEntryWhereUniqueInput
    update: XOR<NotebookEntryUpdateWithoutNotebookInput, NotebookEntryUncheckedUpdateWithoutNotebookInput>
    create: XOR<NotebookEntryCreateWithoutNotebookInput, NotebookEntryUncheckedCreateWithoutNotebookInput>
  }

  export type NotebookEntryUpdateWithWhereUniqueWithoutNotebookInput = {
    where: NotebookEntryWhereUniqueInput
    data: XOR<NotebookEntryUpdateWithoutNotebookInput, NotebookEntryUncheckedUpdateWithoutNotebookInput>
  }

  export type NotebookEntryUpdateManyWithWhereWithoutNotebookInput = {
    where: NotebookEntryScalarWhereInput
    data: XOR<NotebookEntryUpdateManyMutationInput, NotebookEntryUncheckedUpdateManyWithoutNotebookInput>
  }

  export type NotebookEntryScalarWhereInput = {
    AND?: NotebookEntryScalarWhereInput | NotebookEntryScalarWhereInput[]
    OR?: NotebookEntryScalarWhereInput[]
    NOT?: NotebookEntryScalarWhereInput | NotebookEntryScalarWhereInput[]
    id?: IntFilter<"NotebookEntry"> | number
    title?: StringFilter<"NotebookEntry"> | string
    content?: StringNullableFilter<"NotebookEntry"> | string | null
    pinned?: BoolFilter<"NotebookEntry"> | boolean
    notebookId?: IntFilter<"NotebookEntry"> | number
  }

  export type TopicUpsertWithoutNotebookInput = {
    update: XOR<TopicUpdateWithoutNotebookInput, TopicUncheckedUpdateWithoutNotebookInput>
    create: XOR<TopicCreateWithoutNotebookInput, TopicUncheckedCreateWithoutNotebookInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutNotebookInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutNotebookInput, TopicUncheckedUpdateWithoutNotebookInput>
  }

  export type TopicUpdateWithoutNotebookInput = {
    name?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    urls?: UrlUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUpdateManyWithoutTopicNestedInput
    parent?: TopicUpdateOneWithoutSubtopicsNestedInput
    subtopics?: TopicUpdateManyWithoutParentNestedInput
    tags?: TagsOnTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutNotebookInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    urls?: UrlUncheckedUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTopicNestedInput
    subtopics?: TopicUncheckedUpdateManyWithoutParentNestedInput
    tags?: TagsOnTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type NotebookCreateWithoutEntriesInput = {
    title: string
    topic: TopicCreateNestedOneWithoutNotebookInput
  }

  export type NotebookUncheckedCreateWithoutEntriesInput = {
    id?: number
    title: string
    topicId: number
  }

  export type NotebookCreateOrConnectWithoutEntriesInput = {
    where: NotebookWhereUniqueInput
    create: XOR<NotebookCreateWithoutEntriesInput, NotebookUncheckedCreateWithoutEntriesInput>
  }

  export type NotebookUpsertWithoutEntriesInput = {
    update: XOR<NotebookUpdateWithoutEntriesInput, NotebookUncheckedUpdateWithoutEntriesInput>
    create: XOR<NotebookCreateWithoutEntriesInput, NotebookUncheckedCreateWithoutEntriesInput>
    where?: NotebookWhereInput
  }

  export type NotebookUpdateToOneWithWhereWithoutEntriesInput = {
    where?: NotebookWhereInput
    data: XOR<NotebookUpdateWithoutEntriesInput, NotebookUncheckedUpdateWithoutEntriesInput>
  }

  export type NotebookUpdateWithoutEntriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    topic?: TopicUpdateOneRequiredWithoutNotebookNestedInput
  }

  export type NotebookUncheckedUpdateWithoutEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topicId?: IntFieldUpdateOperationsInput | number
  }

  export type UrlCreateManyTopicInput = {
    id?: number
    name: string
    url?: string | null
    createdAt?: Date | string
    comments?: string | null
    pinned: boolean
  }

  export type AttachmentCreateManyTopicInput = {
    id?: number
    name: string
    createdAt?: Date | string
    comments?: string | null
    pinned: boolean
    attachmentData: Buffer
    attachmentType: string
  }

  export type TopicCreateManyParentInput = {
    id?: number
    name: string
    pinned?: boolean
  }

  export type TagsOnTopicCreateManyTopicInput = {
    tagId: number
  }

  export type UrlUpdateWithoutTopicInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UrlUncheckedUpdateWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UrlUncheckedUpdateManyWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttachmentUpdateWithoutTopicInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
    attachmentData?: BytesFieldUpdateOperationsInput | Buffer
    attachmentType?: StringFieldUpdateOperationsInput | string
  }

  export type AttachmentUncheckedUpdateWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
    attachmentData?: BytesFieldUpdateOperationsInput | Buffer
    attachmentType?: StringFieldUpdateOperationsInput | string
  }

  export type AttachmentUncheckedUpdateManyWithoutTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
    attachmentData?: BytesFieldUpdateOperationsInput | Buffer
    attachmentType?: StringFieldUpdateOperationsInput | string
  }

  export type TopicUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    urls?: UrlUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUpdateManyWithoutTopicNestedInput
    notebook?: NotebookUpdateOneWithoutTopicNestedInput
    subtopics?: TopicUpdateManyWithoutParentNestedInput
    tags?: TagsOnTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
    urls?: UrlUncheckedUpdateManyWithoutTopicNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutTopicNestedInput
    notebook?: NotebookUncheckedUpdateOneWithoutTopicNestedInput
    subtopics?: TopicUncheckedUpdateManyWithoutParentNestedInput
    tags?: TagsOnTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pinned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TagsOnTopicUpdateWithoutTopicInput = {
    tag?: TagUpdateOneRequiredWithoutTopicsNestedInput
  }

  export type TagsOnTopicUncheckedUpdateWithoutTopicInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type TagsOnTopicUncheckedUpdateManyWithoutTopicInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type TagsOnTopicCreateManyTagInput = {
    topicId: number
  }

  export type TagsOnTopicUpdateWithoutTagInput = {
    topic?: TopicUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TagsOnTopicUncheckedUpdateWithoutTagInput = {
    topicId?: IntFieldUpdateOperationsInput | number
  }

  export type TagsOnTopicUncheckedUpdateManyWithoutTagInput = {
    topicId?: IntFieldUpdateOperationsInput | number
  }

  export type NotebookEntryCreateManyNotebookInput = {
    id?: number
    title: string
    content?: string | null
    pinned?: boolean
  }

  export type NotebookEntryUpdateWithoutNotebookInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotebookEntryUncheckedUpdateWithoutNotebookInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotebookEntryUncheckedUpdateManyWithoutNotebookInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    pinned?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TopicCountOutputTypeDefaultArgs instead
     */
    export type TopicCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TopicCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagCountOutputTypeDefaultArgs instead
     */
    export type TagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotebookCountOutputTypeDefaultArgs instead
     */
    export type NotebookCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotebookCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TopicDefaultArgs instead
     */
    export type TopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TopicDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagDefaultArgs instead
     */
    export type TagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagsOnTopicDefaultArgs instead
     */
    export type TagsOnTopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagsOnTopicDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttachmentDefaultArgs instead
     */
    export type AttachmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttachmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UrlDefaultArgs instead
     */
    export type UrlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UrlDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotebookDefaultArgs instead
     */
    export type NotebookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotebookDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotebookEntryDefaultArgs instead
     */
    export type NotebookEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotebookEntryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
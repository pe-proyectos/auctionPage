
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Publicacion
 * 
 */
export type Publicacion = $Result.DefaultSelection<Prisma.$PublicacionPayload>
/**
 * Model puja
 * 
 */
export type puja = $Result.DefaultSelection<Prisma.$pujaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publicacion`: Exposes CRUD operations for the **Publicacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publicacions
    * const publicacions = await prisma.publicacion.findMany()
    * ```
    */
  get publicacion(): Prisma.PublicacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.puja`: Exposes CRUD operations for the **puja** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pujas
    * const pujas = await prisma.puja.findMany()
    * ```
    */
  get puja(): Prisma.pujaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Categoria: 'Categoria',
    Publicacion: 'Publicacion',
    puja: 'puja'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "categoria" | "publicacion" | "puja"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Publicacion: {
        payload: Prisma.$PublicacionPayload<ExtArgs>
        fields: Prisma.PublicacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>
          }
          findFirst: {
            args: Prisma.PublicacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>
          }
          findMany: {
            args: Prisma.PublicacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>[]
          }
          create: {
            args: Prisma.PublicacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>
          }
          createMany: {
            args: Prisma.PublicacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>[]
          }
          delete: {
            args: Prisma.PublicacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>
          }
          update: {
            args: Prisma.PublicacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>
          }
          deleteMany: {
            args: Prisma.PublicacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>[]
          }
          upsert: {
            args: Prisma.PublicacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicacionPayload>
          }
          aggregate: {
            args: Prisma.PublicacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicacion>
          }
          groupBy: {
            args: Prisma.PublicacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicacionCountArgs<ExtArgs>
            result: $Utils.Optional<PublicacionCountAggregateOutputType> | number
          }
        }
      }
      puja: {
        payload: Prisma.$pujaPayload<ExtArgs>
        fields: Prisma.pujaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pujaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pujaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pujaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pujaPayload>
          }
          findFirst: {
            args: Prisma.pujaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pujaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pujaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pujaPayload>
          }
          findMany: {
            args: Prisma.pujaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pujaPayload>[]
          }
          create: {
            args: Prisma.pujaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pujaPayload>
          }
          createMany: {
            args: Prisma.pujaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pujaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pujaPayload>[]
          }
          delete: {
            args: Prisma.pujaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pujaPayload>
          }
          update: {
            args: Prisma.pujaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pujaPayload>
          }
          deleteMany: {
            args: Prisma.pujaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pujaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pujaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pujaPayload>[]
          }
          upsert: {
            args: Prisma.pujaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pujaPayload>
          }
          aggregate: {
            args: Prisma.PujaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePuja>
          }
          groupBy: {
            args: Prisma.pujaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PujaGroupByOutputType>[]
          }
          count: {
            args: Prisma.pujaCountArgs<ExtArgs>
            result: $Utils.Optional<PujaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    categoria?: CategoriaOmit
    publicacion?: PublicacionOmit
    puja?: pujaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    publicaciones: number
    pujas: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicaciones?: boolean | UserCountOutputTypeCountPublicacionesArgs
    pujas?: boolean | UserCountOutputTypeCountPujasArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPublicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPujasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pujaWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    publicaciones: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicaciones?: boolean | CategoriaCountOutputTypeCountPublicacionesArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountPublicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacionWhereInput
  }


  /**
   * Count Type PublicacionCountOutputType
   */

  export type PublicacionCountOutputType = {
    pujas: number
  }

  export type PublicacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pujas?: boolean | PublicacionCountOutputTypeCountPujasArgs
  }

  // Custom InputTypes
  /**
   * PublicacionCountOutputType without action
   */
  export type PublicacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicacionCountOutputType
     */
    select?: PublicacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublicacionCountOutputType without action
   */
  export type PublicacionCountOutputTypeCountPujasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pujaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    lastname: string | null
    password: string | null
    fechaCreacion: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    lastname: string | null
    password: string | null
    fechaCreacion: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    lastname: number
    password: number
    fechaCreacion: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    lastname?: true
    password?: true
    fechaCreacion?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    lastname?: true
    password?: true
    fechaCreacion?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    lastname?: true
    password?: true
    fechaCreacion?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    lastname: string
    password: string
    fechaCreacion: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    lastname?: boolean
    password?: boolean
    fechaCreacion?: boolean
    publicaciones?: boolean | User$publicacionesArgs<ExtArgs>
    pujas?: boolean | User$pujasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    lastname?: boolean
    password?: boolean
    fechaCreacion?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    lastname?: boolean
    password?: boolean
    fechaCreacion?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    lastname?: boolean
    password?: boolean
    fechaCreacion?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "lastname" | "password" | "fechaCreacion", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicaciones?: boolean | User$publicacionesArgs<ExtArgs>
    pujas?: boolean | User$pujasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      publicaciones: Prisma.$PublicacionPayload<ExtArgs>[]
      pujas: Prisma.$pujaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      lastname: string
      password: string
      fechaCreacion: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publicaciones<T extends User$publicacionesArgs<ExtArgs> = {}>(args?: Subset<T, User$publicacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pujas<T extends User$pujasArgs<ExtArgs> = {}>(args?: Subset<T, User$pujasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pujaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly fechaCreacion: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.publicaciones
   */
  export type User$publicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    where?: PublicacionWhereInput
    orderBy?: PublicacionOrderByWithRelationInput | PublicacionOrderByWithRelationInput[]
    cursor?: PublicacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicacionScalarFieldEnum | PublicacionScalarFieldEnum[]
  }

  /**
   * User.pujas
   */
  export type User$pujasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puja
     */
    select?: pujaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puja
     */
    omit?: pujaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pujaInclude<ExtArgs> | null
    where?: pujaWhereInput
    orderBy?: pujaOrderByWithRelationInput | pujaOrderByWithRelationInput[]
    cursor?: pujaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PujaScalarFieldEnum | PujaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nombre: string
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    publicaciones?: boolean | Categoria$publicacionesArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicaciones?: boolean | Categoria$publicacionesArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      publicaciones: Prisma.$PublicacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publicaciones<T extends Categoria$publicacionesArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$publicacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nombre: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.publicaciones
   */
  export type Categoria$publicacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    where?: PublicacionWhereInput
    orderBy?: PublicacionOrderByWithRelationInput | PublicacionOrderByWithRelationInput[]
    cursor?: PublicacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicacionScalarFieldEnum | PublicacionScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Publicacion
   */

  export type AggregatePublicacion = {
    _count: PublicacionCountAggregateOutputType | null
    _avg: PublicacionAvgAggregateOutputType | null
    _sum: PublicacionSumAggregateOutputType | null
    _min: PublicacionMinAggregateOutputType | null
    _max: PublicacionMaxAggregateOutputType | null
  }

  export type PublicacionAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    usuarioId: number | null
    categoriaId: number | null
  }

  export type PublicacionSumAggregateOutputType = {
    id: number | null
    precio: number | null
    usuarioId: number | null
    categoriaId: number | null
  }

  export type PublicacionMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    fecha: Date | null
    precio: number | null
    createdAt: Date | null
    usuarioId: number | null
    categoriaId: number | null
  }

  export type PublicacionMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    fecha: Date | null
    precio: number | null
    createdAt: Date | null
    usuarioId: number | null
    categoriaId: number | null
  }

  export type PublicacionCountAggregateOutputType = {
    id: number
    titulo: number
    descripcion: number
    fecha: number
    precio: number
    createdAt: number
    usuarioId: number
    categoriaId: number
    _all: number
  }


  export type PublicacionAvgAggregateInputType = {
    id?: true
    precio?: true
    usuarioId?: true
    categoriaId?: true
  }

  export type PublicacionSumAggregateInputType = {
    id?: true
    precio?: true
    usuarioId?: true
    categoriaId?: true
  }

  export type PublicacionMinAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    fecha?: true
    precio?: true
    createdAt?: true
    usuarioId?: true
    categoriaId?: true
  }

  export type PublicacionMaxAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    fecha?: true
    precio?: true
    createdAt?: true
    usuarioId?: true
    categoriaId?: true
  }

  export type PublicacionCountAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    fecha?: true
    precio?: true
    createdAt?: true
    usuarioId?: true
    categoriaId?: true
    _all?: true
  }

  export type PublicacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publicacion to aggregate.
     */
    where?: PublicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacions to fetch.
     */
    orderBy?: PublicacionOrderByWithRelationInput | PublicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publicacions
    **/
    _count?: true | PublicacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicacionMaxAggregateInputType
  }

  export type GetPublicacionAggregateType<T extends PublicacionAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicacion[P]>
      : GetScalarType<T[P], AggregatePublicacion[P]>
  }




  export type PublicacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicacionWhereInput
    orderBy?: PublicacionOrderByWithAggregationInput | PublicacionOrderByWithAggregationInput[]
    by: PublicacionScalarFieldEnum[] | PublicacionScalarFieldEnum
    having?: PublicacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicacionCountAggregateInputType | true
    _avg?: PublicacionAvgAggregateInputType
    _sum?: PublicacionSumAggregateInputType
    _min?: PublicacionMinAggregateInputType
    _max?: PublicacionMaxAggregateInputType
  }

  export type PublicacionGroupByOutputType = {
    id: number
    titulo: string
    descripcion: string
    fecha: Date
    precio: number
    createdAt: Date
    usuarioId: number
    categoriaId: number
    _count: PublicacionCountAggregateOutputType | null
    _avg: PublicacionAvgAggregateOutputType | null
    _sum: PublicacionSumAggregateOutputType | null
    _min: PublicacionMinAggregateOutputType | null
    _max: PublicacionMaxAggregateOutputType | null
  }

  type GetPublicacionGroupByPayload<T extends PublicacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicacionGroupByOutputType[P]>
            : GetScalarType<T[P], PublicacionGroupByOutputType[P]>
        }
      >
    >


  export type PublicacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    fecha?: boolean
    precio?: boolean
    createdAt?: boolean
    usuarioId?: boolean
    categoriaId?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    pujas?: boolean | Publicacion$pujasArgs<ExtArgs>
    _count?: boolean | PublicacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicacion"]>

  export type PublicacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    fecha?: boolean
    precio?: boolean
    createdAt?: boolean
    usuarioId?: boolean
    categoriaId?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicacion"]>

  export type PublicacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    fecha?: boolean
    precio?: boolean
    createdAt?: boolean
    usuarioId?: boolean
    categoriaId?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicacion"]>

  export type PublicacionSelectScalar = {
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    fecha?: boolean
    precio?: boolean
    createdAt?: boolean
    usuarioId?: boolean
    categoriaId?: boolean
  }

  export type PublicacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descripcion" | "fecha" | "precio" | "createdAt" | "usuarioId" | "categoriaId", ExtArgs["result"]["publicacion"]>
  export type PublicacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    pujas?: boolean | Publicacion$pujasArgs<ExtArgs>
    _count?: boolean | PublicacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PublicacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type PublicacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $PublicacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publicacion"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      pujas: Prisma.$pujaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descripcion: string
      fecha: Date
      precio: number
      createdAt: Date
      usuarioId: number
      categoriaId: number
    }, ExtArgs["result"]["publicacion"]>
    composites: {}
  }

  type PublicacionGetPayload<S extends boolean | null | undefined | PublicacionDefaultArgs> = $Result.GetResult<Prisma.$PublicacionPayload, S>

  type PublicacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicacionCountAggregateInputType | true
    }

  export interface PublicacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publicacion'], meta: { name: 'Publicacion' } }
    /**
     * Find zero or one Publicacion that matches the filter.
     * @param {PublicacionFindUniqueArgs} args - Arguments to find a Publicacion
     * @example
     * // Get one Publicacion
     * const publicacion = await prisma.publicacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicacionFindUniqueArgs>(args: SelectSubset<T, PublicacionFindUniqueArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Publicacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicacionFindUniqueOrThrowArgs} args - Arguments to find a Publicacion
     * @example
     * // Get one Publicacion
     * const publicacion = await prisma.publicacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicacionFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publicacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionFindFirstArgs} args - Arguments to find a Publicacion
     * @example
     * // Get one Publicacion
     * const publicacion = await prisma.publicacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicacionFindFirstArgs>(args?: SelectSubset<T, PublicacionFindFirstArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publicacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionFindFirstOrThrowArgs} args - Arguments to find a Publicacion
     * @example
     * // Get one Publicacion
     * const publicacion = await prisma.publicacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicacionFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Publicacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publicacions
     * const publicacions = await prisma.publicacion.findMany()
     * 
     * // Get first 10 Publicacions
     * const publicacions = await prisma.publicacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicacionWithIdOnly = await prisma.publicacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicacionFindManyArgs>(args?: SelectSubset<T, PublicacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Publicacion.
     * @param {PublicacionCreateArgs} args - Arguments to create a Publicacion.
     * @example
     * // Create one Publicacion
     * const Publicacion = await prisma.publicacion.create({
     *   data: {
     *     // ... data to create a Publicacion
     *   }
     * })
     * 
     */
    create<T extends PublicacionCreateArgs>(args: SelectSubset<T, PublicacionCreateArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Publicacions.
     * @param {PublicacionCreateManyArgs} args - Arguments to create many Publicacions.
     * @example
     * // Create many Publicacions
     * const publicacion = await prisma.publicacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicacionCreateManyArgs>(args?: SelectSubset<T, PublicacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publicacions and returns the data saved in the database.
     * @param {PublicacionCreateManyAndReturnArgs} args - Arguments to create many Publicacions.
     * @example
     * // Create many Publicacions
     * const publicacion = await prisma.publicacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publicacions and only return the `id`
     * const publicacionWithIdOnly = await prisma.publicacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicacionCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Publicacion.
     * @param {PublicacionDeleteArgs} args - Arguments to delete one Publicacion.
     * @example
     * // Delete one Publicacion
     * const Publicacion = await prisma.publicacion.delete({
     *   where: {
     *     // ... filter to delete one Publicacion
     *   }
     * })
     * 
     */
    delete<T extends PublicacionDeleteArgs>(args: SelectSubset<T, PublicacionDeleteArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Publicacion.
     * @param {PublicacionUpdateArgs} args - Arguments to update one Publicacion.
     * @example
     * // Update one Publicacion
     * const publicacion = await prisma.publicacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicacionUpdateArgs>(args: SelectSubset<T, PublicacionUpdateArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Publicacions.
     * @param {PublicacionDeleteManyArgs} args - Arguments to filter Publicacions to delete.
     * @example
     * // Delete a few Publicacions
     * const { count } = await prisma.publicacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicacionDeleteManyArgs>(args?: SelectSubset<T, PublicacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publicacions
     * const publicacion = await prisma.publicacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicacionUpdateManyArgs>(args: SelectSubset<T, PublicacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publicacions and returns the data updated in the database.
     * @param {PublicacionUpdateManyAndReturnArgs} args - Arguments to update many Publicacions.
     * @example
     * // Update many Publicacions
     * const publicacion = await prisma.publicacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Publicacions and only return the `id`
     * const publicacionWithIdOnly = await prisma.publicacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublicacionUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Publicacion.
     * @param {PublicacionUpsertArgs} args - Arguments to update or create a Publicacion.
     * @example
     * // Update or create a Publicacion
     * const publicacion = await prisma.publicacion.upsert({
     *   create: {
     *     // ... data to create a Publicacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publicacion we want to update
     *   }
     * })
     */
    upsert<T extends PublicacionUpsertArgs>(args: SelectSubset<T, PublicacionUpsertArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Publicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionCountArgs} args - Arguments to filter Publicacions to count.
     * @example
     * // Count the number of Publicacions
     * const count = await prisma.publicacion.count({
     *   where: {
     *     // ... the filter for the Publicacions we want to count
     *   }
     * })
    **/
    count<T extends PublicacionCountArgs>(
      args?: Subset<T, PublicacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicacionAggregateArgs>(args: Subset<T, PublicacionAggregateArgs>): Prisma.PrismaPromise<GetPublicacionAggregateType<T>>

    /**
     * Group by Publicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicacionGroupByArgs} args - Group by arguments.
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
      T extends PublicacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicacionGroupByArgs['orderBy'] }
        : { orderBy?: PublicacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PublicacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publicacion model
   */
  readonly fields: PublicacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publicacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pujas<T extends Publicacion$pujasArgs<ExtArgs> = {}>(args?: Subset<T, Publicacion$pujasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pujaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Publicacion model
   */
  interface PublicacionFieldRefs {
    readonly id: FieldRef<"Publicacion", 'Int'>
    readonly titulo: FieldRef<"Publicacion", 'String'>
    readonly descripcion: FieldRef<"Publicacion", 'String'>
    readonly fecha: FieldRef<"Publicacion", 'DateTime'>
    readonly precio: FieldRef<"Publicacion", 'Float'>
    readonly createdAt: FieldRef<"Publicacion", 'DateTime'>
    readonly usuarioId: FieldRef<"Publicacion", 'Int'>
    readonly categoriaId: FieldRef<"Publicacion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Publicacion findUnique
   */
  export type PublicacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * Filter, which Publicacion to fetch.
     */
    where: PublicacionWhereUniqueInput
  }

  /**
   * Publicacion findUniqueOrThrow
   */
  export type PublicacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * Filter, which Publicacion to fetch.
     */
    where: PublicacionWhereUniqueInput
  }

  /**
   * Publicacion findFirst
   */
  export type PublicacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * Filter, which Publicacion to fetch.
     */
    where?: PublicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacions to fetch.
     */
    orderBy?: PublicacionOrderByWithRelationInput | PublicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publicacions.
     */
    cursor?: PublicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publicacions.
     */
    distinct?: PublicacionScalarFieldEnum | PublicacionScalarFieldEnum[]
  }

  /**
   * Publicacion findFirstOrThrow
   */
  export type PublicacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * Filter, which Publicacion to fetch.
     */
    where?: PublicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacions to fetch.
     */
    orderBy?: PublicacionOrderByWithRelationInput | PublicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publicacions.
     */
    cursor?: PublicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publicacions.
     */
    distinct?: PublicacionScalarFieldEnum | PublicacionScalarFieldEnum[]
  }

  /**
   * Publicacion findMany
   */
  export type PublicacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * Filter, which Publicacions to fetch.
     */
    where?: PublicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publicacions to fetch.
     */
    orderBy?: PublicacionOrderByWithRelationInput | PublicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publicacions.
     */
    cursor?: PublicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publicacions.
     */
    skip?: number
    distinct?: PublicacionScalarFieldEnum | PublicacionScalarFieldEnum[]
  }

  /**
   * Publicacion create
   */
  export type PublicacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Publicacion.
     */
    data: XOR<PublicacionCreateInput, PublicacionUncheckedCreateInput>
  }

  /**
   * Publicacion createMany
   */
  export type PublicacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publicacions.
     */
    data: PublicacionCreateManyInput | PublicacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publicacion createManyAndReturn
   */
  export type PublicacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * The data used to create many Publicacions.
     */
    data: PublicacionCreateManyInput | PublicacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Publicacion update
   */
  export type PublicacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Publicacion.
     */
    data: XOR<PublicacionUpdateInput, PublicacionUncheckedUpdateInput>
    /**
     * Choose, which Publicacion to update.
     */
    where: PublicacionWhereUniqueInput
  }

  /**
   * Publicacion updateMany
   */
  export type PublicacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publicacions.
     */
    data: XOR<PublicacionUpdateManyMutationInput, PublicacionUncheckedUpdateManyInput>
    /**
     * Filter which Publicacions to update
     */
    where?: PublicacionWhereInput
    /**
     * Limit how many Publicacions to update.
     */
    limit?: number
  }

  /**
   * Publicacion updateManyAndReturn
   */
  export type PublicacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * The data used to update Publicacions.
     */
    data: XOR<PublicacionUpdateManyMutationInput, PublicacionUncheckedUpdateManyInput>
    /**
     * Filter which Publicacions to update
     */
    where?: PublicacionWhereInput
    /**
     * Limit how many Publicacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Publicacion upsert
   */
  export type PublicacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Publicacion to update in case it exists.
     */
    where: PublicacionWhereUniqueInput
    /**
     * In case the Publicacion found by the `where` argument doesn't exist, create a new Publicacion with this data.
     */
    create: XOR<PublicacionCreateInput, PublicacionUncheckedCreateInput>
    /**
     * In case the Publicacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicacionUpdateInput, PublicacionUncheckedUpdateInput>
  }

  /**
   * Publicacion delete
   */
  export type PublicacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
    /**
     * Filter which Publicacion to delete.
     */
    where: PublicacionWhereUniqueInput
  }

  /**
   * Publicacion deleteMany
   */
  export type PublicacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publicacions to delete
     */
    where?: PublicacionWhereInput
    /**
     * Limit how many Publicacions to delete.
     */
    limit?: number
  }

  /**
   * Publicacion.pujas
   */
  export type Publicacion$pujasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puja
     */
    select?: pujaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puja
     */
    omit?: pujaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pujaInclude<ExtArgs> | null
    where?: pujaWhereInput
    orderBy?: pujaOrderByWithRelationInput | pujaOrderByWithRelationInput[]
    cursor?: pujaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PujaScalarFieldEnum | PujaScalarFieldEnum[]
  }

  /**
   * Publicacion without action
   */
  export type PublicacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publicacion
     */
    select?: PublicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publicacion
     */
    omit?: PublicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicacionInclude<ExtArgs> | null
  }


  /**
   * Model puja
   */

  export type AggregatePuja = {
    _count: PujaCountAggregateOutputType | null
    _avg: PujaAvgAggregateOutputType | null
    _sum: PujaSumAggregateOutputType | null
    _min: PujaMinAggregateOutputType | null
    _max: PujaMaxAggregateOutputType | null
  }

  export type PujaAvgAggregateOutputType = {
    id: number | null
    monto: number | null
    usuarioId: number | null
    publicacionId: number | null
  }

  export type PujaSumAggregateOutputType = {
    id: number | null
    monto: number | null
    usuarioId: number | null
    publicacionId: number | null
  }

  export type PujaMinAggregateOutputType = {
    id: number | null
    monto: number | null
    fecha: Date | null
    usuarioId: number | null
    publicacionId: number | null
  }

  export type PujaMaxAggregateOutputType = {
    id: number | null
    monto: number | null
    fecha: Date | null
    usuarioId: number | null
    publicacionId: number | null
  }

  export type PujaCountAggregateOutputType = {
    id: number
    monto: number
    fecha: number
    usuarioId: number
    publicacionId: number
    _all: number
  }


  export type PujaAvgAggregateInputType = {
    id?: true
    monto?: true
    usuarioId?: true
    publicacionId?: true
  }

  export type PujaSumAggregateInputType = {
    id?: true
    monto?: true
    usuarioId?: true
    publicacionId?: true
  }

  export type PujaMinAggregateInputType = {
    id?: true
    monto?: true
    fecha?: true
    usuarioId?: true
    publicacionId?: true
  }

  export type PujaMaxAggregateInputType = {
    id?: true
    monto?: true
    fecha?: true
    usuarioId?: true
    publicacionId?: true
  }

  export type PujaCountAggregateInputType = {
    id?: true
    monto?: true
    fecha?: true
    usuarioId?: true
    publicacionId?: true
    _all?: true
  }

  export type PujaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which puja to aggregate.
     */
    where?: pujaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pujas to fetch.
     */
    orderBy?: pujaOrderByWithRelationInput | pujaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pujaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pujas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pujas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pujas
    **/
    _count?: true | PujaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PujaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PujaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PujaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PujaMaxAggregateInputType
  }

  export type GetPujaAggregateType<T extends PujaAggregateArgs> = {
        [P in keyof T & keyof AggregatePuja]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePuja[P]>
      : GetScalarType<T[P], AggregatePuja[P]>
  }




  export type pujaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pujaWhereInput
    orderBy?: pujaOrderByWithAggregationInput | pujaOrderByWithAggregationInput[]
    by: PujaScalarFieldEnum[] | PujaScalarFieldEnum
    having?: pujaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PujaCountAggregateInputType | true
    _avg?: PujaAvgAggregateInputType
    _sum?: PujaSumAggregateInputType
    _min?: PujaMinAggregateInputType
    _max?: PujaMaxAggregateInputType
  }

  export type PujaGroupByOutputType = {
    id: number
    monto: number
    fecha: Date
    usuarioId: number
    publicacionId: number
    _count: PujaCountAggregateOutputType | null
    _avg: PujaAvgAggregateOutputType | null
    _sum: PujaSumAggregateOutputType | null
    _min: PujaMinAggregateOutputType | null
    _max: PujaMaxAggregateOutputType | null
  }

  type GetPujaGroupByPayload<T extends pujaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PujaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PujaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PujaGroupByOutputType[P]>
            : GetScalarType<T[P], PujaGroupByOutputType[P]>
        }
      >
    >


  export type pujaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monto?: boolean
    fecha?: boolean
    usuarioId?: boolean
    publicacionId?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["puja"]>

  export type pujaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monto?: boolean
    fecha?: boolean
    usuarioId?: boolean
    publicacionId?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["puja"]>

  export type pujaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monto?: boolean
    fecha?: boolean
    usuarioId?: boolean
    publicacionId?: boolean
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["puja"]>

  export type pujaSelectScalar = {
    id?: boolean
    monto?: boolean
    fecha?: boolean
    usuarioId?: boolean
    publicacionId?: boolean
  }

  export type pujaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "monto" | "fecha" | "usuarioId" | "publicacionId", ExtArgs["result"]["puja"]>
  export type pujaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }
  export type pujaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }
  export type pujaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UserDefaultArgs<ExtArgs>
    publicacion?: boolean | PublicacionDefaultArgs<ExtArgs>
  }

  export type $pujaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "puja"
    objects: {
      usuario: Prisma.$UserPayload<ExtArgs>
      publicacion: Prisma.$PublicacionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      monto: number
      fecha: Date
      usuarioId: number
      publicacionId: number
    }, ExtArgs["result"]["puja"]>
    composites: {}
  }

  type pujaGetPayload<S extends boolean | null | undefined | pujaDefaultArgs> = $Result.GetResult<Prisma.$pujaPayload, S>

  type pujaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pujaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PujaCountAggregateInputType | true
    }

  export interface pujaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['puja'], meta: { name: 'puja' } }
    /**
     * Find zero or one Puja that matches the filter.
     * @param {pujaFindUniqueArgs} args - Arguments to find a Puja
     * @example
     * // Get one Puja
     * const puja = await prisma.puja.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pujaFindUniqueArgs>(args: SelectSubset<T, pujaFindUniqueArgs<ExtArgs>>): Prisma__pujaClient<$Result.GetResult<Prisma.$pujaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Puja that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pujaFindUniqueOrThrowArgs} args - Arguments to find a Puja
     * @example
     * // Get one Puja
     * const puja = await prisma.puja.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pujaFindUniqueOrThrowArgs>(args: SelectSubset<T, pujaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pujaClient<$Result.GetResult<Prisma.$pujaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Puja that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pujaFindFirstArgs} args - Arguments to find a Puja
     * @example
     * // Get one Puja
     * const puja = await prisma.puja.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pujaFindFirstArgs>(args?: SelectSubset<T, pujaFindFirstArgs<ExtArgs>>): Prisma__pujaClient<$Result.GetResult<Prisma.$pujaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Puja that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pujaFindFirstOrThrowArgs} args - Arguments to find a Puja
     * @example
     * // Get one Puja
     * const puja = await prisma.puja.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pujaFindFirstOrThrowArgs>(args?: SelectSubset<T, pujaFindFirstOrThrowArgs<ExtArgs>>): Prisma__pujaClient<$Result.GetResult<Prisma.$pujaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pujas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pujaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pujas
     * const pujas = await prisma.puja.findMany()
     * 
     * // Get first 10 Pujas
     * const pujas = await prisma.puja.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pujaWithIdOnly = await prisma.puja.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pujaFindManyArgs>(args?: SelectSubset<T, pujaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pujaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Puja.
     * @param {pujaCreateArgs} args - Arguments to create a Puja.
     * @example
     * // Create one Puja
     * const Puja = await prisma.puja.create({
     *   data: {
     *     // ... data to create a Puja
     *   }
     * })
     * 
     */
    create<T extends pujaCreateArgs>(args: SelectSubset<T, pujaCreateArgs<ExtArgs>>): Prisma__pujaClient<$Result.GetResult<Prisma.$pujaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pujas.
     * @param {pujaCreateManyArgs} args - Arguments to create many Pujas.
     * @example
     * // Create many Pujas
     * const puja = await prisma.puja.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pujaCreateManyArgs>(args?: SelectSubset<T, pujaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pujas and returns the data saved in the database.
     * @param {pujaCreateManyAndReturnArgs} args - Arguments to create many Pujas.
     * @example
     * // Create many Pujas
     * const puja = await prisma.puja.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pujas and only return the `id`
     * const pujaWithIdOnly = await prisma.puja.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pujaCreateManyAndReturnArgs>(args?: SelectSubset<T, pujaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pujaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Puja.
     * @param {pujaDeleteArgs} args - Arguments to delete one Puja.
     * @example
     * // Delete one Puja
     * const Puja = await prisma.puja.delete({
     *   where: {
     *     // ... filter to delete one Puja
     *   }
     * })
     * 
     */
    delete<T extends pujaDeleteArgs>(args: SelectSubset<T, pujaDeleteArgs<ExtArgs>>): Prisma__pujaClient<$Result.GetResult<Prisma.$pujaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Puja.
     * @param {pujaUpdateArgs} args - Arguments to update one Puja.
     * @example
     * // Update one Puja
     * const puja = await prisma.puja.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pujaUpdateArgs>(args: SelectSubset<T, pujaUpdateArgs<ExtArgs>>): Prisma__pujaClient<$Result.GetResult<Prisma.$pujaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pujas.
     * @param {pujaDeleteManyArgs} args - Arguments to filter Pujas to delete.
     * @example
     * // Delete a few Pujas
     * const { count } = await prisma.puja.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pujaDeleteManyArgs>(args?: SelectSubset<T, pujaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pujas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pujaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pujas
     * const puja = await prisma.puja.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pujaUpdateManyArgs>(args: SelectSubset<T, pujaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pujas and returns the data updated in the database.
     * @param {pujaUpdateManyAndReturnArgs} args - Arguments to update many Pujas.
     * @example
     * // Update many Pujas
     * const puja = await prisma.puja.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pujas and only return the `id`
     * const pujaWithIdOnly = await prisma.puja.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pujaUpdateManyAndReturnArgs>(args: SelectSubset<T, pujaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pujaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Puja.
     * @param {pujaUpsertArgs} args - Arguments to update or create a Puja.
     * @example
     * // Update or create a Puja
     * const puja = await prisma.puja.upsert({
     *   create: {
     *     // ... data to create a Puja
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Puja we want to update
     *   }
     * })
     */
    upsert<T extends pujaUpsertArgs>(args: SelectSubset<T, pujaUpsertArgs<ExtArgs>>): Prisma__pujaClient<$Result.GetResult<Prisma.$pujaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pujas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pujaCountArgs} args - Arguments to filter Pujas to count.
     * @example
     * // Count the number of Pujas
     * const count = await prisma.puja.count({
     *   where: {
     *     // ... the filter for the Pujas we want to count
     *   }
     * })
    **/
    count<T extends pujaCountArgs>(
      args?: Subset<T, pujaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PujaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Puja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PujaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PujaAggregateArgs>(args: Subset<T, PujaAggregateArgs>): Prisma.PrismaPromise<GetPujaAggregateType<T>>

    /**
     * Group by Puja.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pujaGroupByArgs} args - Group by arguments.
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
      T extends pujaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pujaGroupByArgs['orderBy'] }
        : { orderBy?: pujaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pujaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPujaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the puja model
   */
  readonly fields: pujaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for puja.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pujaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    publicacion<T extends PublicacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicacionDefaultArgs<ExtArgs>>): Prisma__PublicacionClient<$Result.GetResult<Prisma.$PublicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the puja model
   */
  interface pujaFieldRefs {
    readonly id: FieldRef<"puja", 'Int'>
    readonly monto: FieldRef<"puja", 'Int'>
    readonly fecha: FieldRef<"puja", 'DateTime'>
    readonly usuarioId: FieldRef<"puja", 'Int'>
    readonly publicacionId: FieldRef<"puja", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * puja findUnique
   */
  export type pujaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puja
     */
    select?: pujaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puja
     */
    omit?: pujaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pujaInclude<ExtArgs> | null
    /**
     * Filter, which puja to fetch.
     */
    where: pujaWhereUniqueInput
  }

  /**
   * puja findUniqueOrThrow
   */
  export type pujaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puja
     */
    select?: pujaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puja
     */
    omit?: pujaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pujaInclude<ExtArgs> | null
    /**
     * Filter, which puja to fetch.
     */
    where: pujaWhereUniqueInput
  }

  /**
   * puja findFirst
   */
  export type pujaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puja
     */
    select?: pujaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puja
     */
    omit?: pujaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pujaInclude<ExtArgs> | null
    /**
     * Filter, which puja to fetch.
     */
    where?: pujaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pujas to fetch.
     */
    orderBy?: pujaOrderByWithRelationInput | pujaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pujas.
     */
    cursor?: pujaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pujas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pujas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pujas.
     */
    distinct?: PujaScalarFieldEnum | PujaScalarFieldEnum[]
  }

  /**
   * puja findFirstOrThrow
   */
  export type pujaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puja
     */
    select?: pujaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puja
     */
    omit?: pujaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pujaInclude<ExtArgs> | null
    /**
     * Filter, which puja to fetch.
     */
    where?: pujaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pujas to fetch.
     */
    orderBy?: pujaOrderByWithRelationInput | pujaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pujas.
     */
    cursor?: pujaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pujas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pujas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pujas.
     */
    distinct?: PujaScalarFieldEnum | PujaScalarFieldEnum[]
  }

  /**
   * puja findMany
   */
  export type pujaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puja
     */
    select?: pujaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puja
     */
    omit?: pujaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pujaInclude<ExtArgs> | null
    /**
     * Filter, which pujas to fetch.
     */
    where?: pujaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pujas to fetch.
     */
    orderBy?: pujaOrderByWithRelationInput | pujaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pujas.
     */
    cursor?: pujaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pujas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pujas.
     */
    skip?: number
    distinct?: PujaScalarFieldEnum | PujaScalarFieldEnum[]
  }

  /**
   * puja create
   */
  export type pujaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puja
     */
    select?: pujaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puja
     */
    omit?: pujaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pujaInclude<ExtArgs> | null
    /**
     * The data needed to create a puja.
     */
    data: XOR<pujaCreateInput, pujaUncheckedCreateInput>
  }

  /**
   * puja createMany
   */
  export type pujaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pujas.
     */
    data: pujaCreateManyInput | pujaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * puja createManyAndReturn
   */
  export type pujaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puja
     */
    select?: pujaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the puja
     */
    omit?: pujaOmit<ExtArgs> | null
    /**
     * The data used to create many pujas.
     */
    data: pujaCreateManyInput | pujaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pujaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * puja update
   */
  export type pujaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puja
     */
    select?: pujaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puja
     */
    omit?: pujaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pujaInclude<ExtArgs> | null
    /**
     * The data needed to update a puja.
     */
    data: XOR<pujaUpdateInput, pujaUncheckedUpdateInput>
    /**
     * Choose, which puja to update.
     */
    where: pujaWhereUniqueInput
  }

  /**
   * puja updateMany
   */
  export type pujaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pujas.
     */
    data: XOR<pujaUpdateManyMutationInput, pujaUncheckedUpdateManyInput>
    /**
     * Filter which pujas to update
     */
    where?: pujaWhereInput
    /**
     * Limit how many pujas to update.
     */
    limit?: number
  }

  /**
   * puja updateManyAndReturn
   */
  export type pujaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puja
     */
    select?: pujaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the puja
     */
    omit?: pujaOmit<ExtArgs> | null
    /**
     * The data used to update pujas.
     */
    data: XOR<pujaUpdateManyMutationInput, pujaUncheckedUpdateManyInput>
    /**
     * Filter which pujas to update
     */
    where?: pujaWhereInput
    /**
     * Limit how many pujas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pujaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * puja upsert
   */
  export type pujaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puja
     */
    select?: pujaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puja
     */
    omit?: pujaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pujaInclude<ExtArgs> | null
    /**
     * The filter to search for the puja to update in case it exists.
     */
    where: pujaWhereUniqueInput
    /**
     * In case the puja found by the `where` argument doesn't exist, create a new puja with this data.
     */
    create: XOR<pujaCreateInput, pujaUncheckedCreateInput>
    /**
     * In case the puja was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pujaUpdateInput, pujaUncheckedUpdateInput>
  }

  /**
   * puja delete
   */
  export type pujaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puja
     */
    select?: pujaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puja
     */
    omit?: pujaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pujaInclude<ExtArgs> | null
    /**
     * Filter which puja to delete.
     */
    where: pujaWhereUniqueInput
  }

  /**
   * puja deleteMany
   */
  export type pujaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pujas to delete
     */
    where?: pujaWhereInput
    /**
     * Limit how many pujas to delete.
     */
    limit?: number
  }

  /**
   * puja without action
   */
  export type pujaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the puja
     */
    select?: pujaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the puja
     */
    omit?: pujaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pujaInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    lastname: 'lastname',
    password: 'password',
    fechaCreacion: 'fechaCreacion'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const PublicacionScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    fecha: 'fecha',
    precio: 'precio',
    createdAt: 'createdAt',
    usuarioId: 'usuarioId',
    categoriaId: 'categoriaId'
  };

  export type PublicacionScalarFieldEnum = (typeof PublicacionScalarFieldEnum)[keyof typeof PublicacionScalarFieldEnum]


  export const PujaScalarFieldEnum: {
    id: 'id',
    monto: 'monto',
    fecha: 'fecha',
    usuarioId: 'usuarioId',
    publicacionId: 'publicacionId'
  };

  export type PujaScalarFieldEnum = (typeof PujaScalarFieldEnum)[keyof typeof PujaScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fechaCreacion?: DateTimeFilter<"User"> | Date | string
    publicaciones?: PublicacionListRelationFilter
    pujas?: PujaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    fechaCreacion?: SortOrder
    publicaciones?: PublicacionOrderByRelationAggregateInput
    pujas?: pujaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    fechaCreacion?: DateTimeFilter<"User"> | Date | string
    publicaciones?: PublicacionListRelationFilter
    pujas?: PujaListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    fechaCreacion?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    fechaCreacion?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    publicaciones?: PublicacionListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    publicaciones?: PublicacionOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    publicaciones?: PublicacionListRelationFilter
  }, "id" | "nombre">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
  }

  export type PublicacionWhereInput = {
    AND?: PublicacionWhereInput | PublicacionWhereInput[]
    OR?: PublicacionWhereInput[]
    NOT?: PublicacionWhereInput | PublicacionWhereInput[]
    id?: IntFilter<"Publicacion"> | number
    titulo?: StringFilter<"Publicacion"> | string
    descripcion?: StringFilter<"Publicacion"> | string
    fecha?: DateTimeFilter<"Publicacion"> | Date | string
    precio?: FloatFilter<"Publicacion"> | number
    createdAt?: DateTimeFilter<"Publicacion"> | Date | string
    usuarioId?: IntFilter<"Publicacion"> | number
    categoriaId?: IntFilter<"Publicacion"> | number
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    pujas?: PujaListRelationFilter
  }

  export type PublicacionOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
    usuario?: UserOrderByWithRelationInput
    categoria?: CategoriaOrderByWithRelationInput
    pujas?: pujaOrderByRelationAggregateInput
  }

  export type PublicacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PublicacionWhereInput | PublicacionWhereInput[]
    OR?: PublicacionWhereInput[]
    NOT?: PublicacionWhereInput | PublicacionWhereInput[]
    titulo?: StringFilter<"Publicacion"> | string
    descripcion?: StringFilter<"Publicacion"> | string
    fecha?: DateTimeFilter<"Publicacion"> | Date | string
    precio?: FloatFilter<"Publicacion"> | number
    createdAt?: DateTimeFilter<"Publicacion"> | Date | string
    usuarioId?: IntFilter<"Publicacion"> | number
    categoriaId?: IntFilter<"Publicacion"> | number
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    pujas?: PujaListRelationFilter
  }, "id">

  export type PublicacionOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
    _count?: PublicacionCountOrderByAggregateInput
    _avg?: PublicacionAvgOrderByAggregateInput
    _max?: PublicacionMaxOrderByAggregateInput
    _min?: PublicacionMinOrderByAggregateInput
    _sum?: PublicacionSumOrderByAggregateInput
  }

  export type PublicacionScalarWhereWithAggregatesInput = {
    AND?: PublicacionScalarWhereWithAggregatesInput | PublicacionScalarWhereWithAggregatesInput[]
    OR?: PublicacionScalarWhereWithAggregatesInput[]
    NOT?: PublicacionScalarWhereWithAggregatesInput | PublicacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Publicacion"> | number
    titulo?: StringWithAggregatesFilter<"Publicacion"> | string
    descripcion?: StringWithAggregatesFilter<"Publicacion"> | string
    fecha?: DateTimeWithAggregatesFilter<"Publicacion"> | Date | string
    precio?: FloatWithAggregatesFilter<"Publicacion"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Publicacion"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Publicacion"> | number
    categoriaId?: IntWithAggregatesFilter<"Publicacion"> | number
  }

  export type pujaWhereInput = {
    AND?: pujaWhereInput | pujaWhereInput[]
    OR?: pujaWhereInput[]
    NOT?: pujaWhereInput | pujaWhereInput[]
    id?: IntFilter<"puja"> | number
    monto?: IntFilter<"puja"> | number
    fecha?: DateTimeFilter<"puja"> | Date | string
    usuarioId?: IntFilter<"puja"> | number
    publicacionId?: IntFilter<"puja"> | number
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
    publicacion?: XOR<PublicacionScalarRelationFilter, PublicacionWhereInput>
  }

  export type pujaOrderByWithRelationInput = {
    id?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
    publicacionId?: SortOrder
    usuario?: UserOrderByWithRelationInput
    publicacion?: PublicacionOrderByWithRelationInput
  }

  export type pujaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pujaWhereInput | pujaWhereInput[]
    OR?: pujaWhereInput[]
    NOT?: pujaWhereInput | pujaWhereInput[]
    monto?: IntFilter<"puja"> | number
    fecha?: DateTimeFilter<"puja"> | Date | string
    usuarioId?: IntFilter<"puja"> | number
    publicacionId?: IntFilter<"puja"> | number
    usuario?: XOR<UserScalarRelationFilter, UserWhereInput>
    publicacion?: XOR<PublicacionScalarRelationFilter, PublicacionWhereInput>
  }, "id">

  export type pujaOrderByWithAggregationInput = {
    id?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
    publicacionId?: SortOrder
    _count?: pujaCountOrderByAggregateInput
    _avg?: pujaAvgOrderByAggregateInput
    _max?: pujaMaxOrderByAggregateInput
    _min?: pujaMinOrderByAggregateInput
    _sum?: pujaSumOrderByAggregateInput
  }

  export type pujaScalarWhereWithAggregatesInput = {
    AND?: pujaScalarWhereWithAggregatesInput | pujaScalarWhereWithAggregatesInput[]
    OR?: pujaScalarWhereWithAggregatesInput[]
    NOT?: pujaScalarWhereWithAggregatesInput | pujaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"puja"> | number
    monto?: IntWithAggregatesFilter<"puja"> | number
    fecha?: DateTimeWithAggregatesFilter<"puja"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"puja"> | number
    publicacionId?: IntWithAggregatesFilter<"puja"> | number
  }

  export type UserCreateInput = {
    email: string
    name: string
    lastname: string
    password: string
    fechaCreacion?: Date | string
    publicaciones?: PublicacionCreateNestedManyWithoutUsuarioInput
    pujas?: pujaCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    lastname: string
    password: string
    fechaCreacion?: Date | string
    publicaciones?: PublicacionUncheckedCreateNestedManyWithoutUsuarioInput
    pujas?: pujaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    publicaciones?: PublicacionUpdateManyWithoutUsuarioNestedInput
    pujas?: pujaUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    publicaciones?: PublicacionUncheckedUpdateManyWithoutUsuarioNestedInput
    pujas?: pujaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    lastname: string
    password: string
    fechaCreacion?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateInput = {
    nombre: string
    publicaciones?: PublicacionCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nombre: string
    publicaciones?: PublicacionUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    publicaciones?: PublicacionUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    publicaciones?: PublicacionUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nombre: string
  }

  export type CategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PublicacionCreateInput = {
    titulo: string
    descripcion: string
    fecha?: Date | string
    precio: number
    createdAt?: Date | string
    usuario: UserCreateNestedOneWithoutPublicacionesInput
    categoria: CategoriaCreateNestedOneWithoutPublicacionesInput
    pujas?: pujaCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionUncheckedCreateInput = {
    id?: number
    titulo: string
    descripcion: string
    fecha?: Date | string
    precio: number
    createdAt?: Date | string
    usuarioId: number
    categoriaId: number
    pujas?: pujaUncheckedCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutPublicacionesNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutPublicacionesNestedInput
    pujas?: pujaUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    pujas?: pujaUncheckedUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionCreateManyInput = {
    id?: number
    titulo: string
    descripcion: string
    fecha?: Date | string
    precio: number
    createdAt?: Date | string
    usuarioId: number
    categoriaId: number
  }

  export type PublicacionUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type pujaCreateInput = {
    monto?: number
    fecha?: Date | string
    usuario: UserCreateNestedOneWithoutPujasInput
    publicacion: PublicacionCreateNestedOneWithoutPujasInput
  }

  export type pujaUncheckedCreateInput = {
    id?: number
    monto?: number
    fecha?: Date | string
    usuarioId: number
    publicacionId: number
  }

  export type pujaUpdateInput = {
    monto?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutPujasNestedInput
    publicacion?: PublicacionUpdateOneRequiredWithoutPujasNestedInput
  }

  export type pujaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    publicacionId?: IntFieldUpdateOperationsInput | number
  }

  export type pujaCreateManyInput = {
    id?: number
    monto?: number
    fecha?: Date | string
    usuarioId: number
    publicacionId: number
  }

  export type pujaUpdateManyMutationInput = {
    monto?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pujaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    publicacionId?: IntFieldUpdateOperationsInput | number
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

  export type PublicacionListRelationFilter = {
    every?: PublicacionWhereInput
    some?: PublicacionWhereInput
    none?: PublicacionWhereInput
  }

  export type PujaListRelationFilter = {
    every?: pujaWhereInput
    some?: pujaWhereInput
    none?: pujaWhereInput
  }

  export type PublicacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pujaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type PublicacionCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
  }

  export type PublicacionAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
  }

  export type PublicacionMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
  }

  export type PublicacionMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
  }

  export type PublicacionSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PublicacionScalarRelationFilter = {
    is?: PublicacionWhereInput
    isNot?: PublicacionWhereInput
  }

  export type pujaCountOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
    publicacionId?: SortOrder
  }

  export type pujaAvgOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    usuarioId?: SortOrder
    publicacionId?: SortOrder
  }

  export type pujaMaxOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
    publicacionId?: SortOrder
  }

  export type pujaMinOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
    usuarioId?: SortOrder
    publicacionId?: SortOrder
  }

  export type pujaSumOrderByAggregateInput = {
    id?: SortOrder
    monto?: SortOrder
    usuarioId?: SortOrder
    publicacionId?: SortOrder
  }

  export type PublicacionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PublicacionCreateWithoutUsuarioInput, PublicacionUncheckedCreateWithoutUsuarioInput> | PublicacionCreateWithoutUsuarioInput[] | PublicacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PublicacionCreateOrConnectWithoutUsuarioInput | PublicacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: PublicacionCreateManyUsuarioInputEnvelope
    connect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
  }

  export type pujaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<pujaCreateWithoutUsuarioInput, pujaUncheckedCreateWithoutUsuarioInput> | pujaCreateWithoutUsuarioInput[] | pujaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: pujaCreateOrConnectWithoutUsuarioInput | pujaCreateOrConnectWithoutUsuarioInput[]
    createMany?: pujaCreateManyUsuarioInputEnvelope
    connect?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
  }

  export type PublicacionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PublicacionCreateWithoutUsuarioInput, PublicacionUncheckedCreateWithoutUsuarioInput> | PublicacionCreateWithoutUsuarioInput[] | PublicacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PublicacionCreateOrConnectWithoutUsuarioInput | PublicacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: PublicacionCreateManyUsuarioInputEnvelope
    connect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
  }

  export type pujaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<pujaCreateWithoutUsuarioInput, pujaUncheckedCreateWithoutUsuarioInput> | pujaCreateWithoutUsuarioInput[] | pujaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: pujaCreateOrConnectWithoutUsuarioInput | pujaCreateOrConnectWithoutUsuarioInput[]
    createMany?: pujaCreateManyUsuarioInputEnvelope
    connect?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PublicacionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PublicacionCreateWithoutUsuarioInput, PublicacionUncheckedCreateWithoutUsuarioInput> | PublicacionCreateWithoutUsuarioInput[] | PublicacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PublicacionCreateOrConnectWithoutUsuarioInput | PublicacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: PublicacionUpsertWithWhereUniqueWithoutUsuarioInput | PublicacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PublicacionCreateManyUsuarioInputEnvelope
    set?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    disconnect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    delete?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    connect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    update?: PublicacionUpdateWithWhereUniqueWithoutUsuarioInput | PublicacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PublicacionUpdateManyWithWhereWithoutUsuarioInput | PublicacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PublicacionScalarWhereInput | PublicacionScalarWhereInput[]
  }

  export type pujaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<pujaCreateWithoutUsuarioInput, pujaUncheckedCreateWithoutUsuarioInput> | pujaCreateWithoutUsuarioInput[] | pujaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: pujaCreateOrConnectWithoutUsuarioInput | pujaCreateOrConnectWithoutUsuarioInput[]
    upsert?: pujaUpsertWithWhereUniqueWithoutUsuarioInput | pujaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: pujaCreateManyUsuarioInputEnvelope
    set?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
    disconnect?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
    delete?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
    connect?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
    update?: pujaUpdateWithWhereUniqueWithoutUsuarioInput | pujaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: pujaUpdateManyWithWhereWithoutUsuarioInput | pujaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: pujaScalarWhereInput | pujaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PublicacionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PublicacionCreateWithoutUsuarioInput, PublicacionUncheckedCreateWithoutUsuarioInput> | PublicacionCreateWithoutUsuarioInput[] | PublicacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PublicacionCreateOrConnectWithoutUsuarioInput | PublicacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: PublicacionUpsertWithWhereUniqueWithoutUsuarioInput | PublicacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PublicacionCreateManyUsuarioInputEnvelope
    set?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    disconnect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    delete?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    connect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    update?: PublicacionUpdateWithWhereUniqueWithoutUsuarioInput | PublicacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PublicacionUpdateManyWithWhereWithoutUsuarioInput | PublicacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PublicacionScalarWhereInput | PublicacionScalarWhereInput[]
  }

  export type pujaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<pujaCreateWithoutUsuarioInput, pujaUncheckedCreateWithoutUsuarioInput> | pujaCreateWithoutUsuarioInput[] | pujaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: pujaCreateOrConnectWithoutUsuarioInput | pujaCreateOrConnectWithoutUsuarioInput[]
    upsert?: pujaUpsertWithWhereUniqueWithoutUsuarioInput | pujaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: pujaCreateManyUsuarioInputEnvelope
    set?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
    disconnect?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
    delete?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
    connect?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
    update?: pujaUpdateWithWhereUniqueWithoutUsuarioInput | pujaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: pujaUpdateManyWithWhereWithoutUsuarioInput | pujaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: pujaScalarWhereInput | pujaScalarWhereInput[]
  }

  export type PublicacionCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<PublicacionCreateWithoutCategoriaInput, PublicacionUncheckedCreateWithoutCategoriaInput> | PublicacionCreateWithoutCategoriaInput[] | PublicacionUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PublicacionCreateOrConnectWithoutCategoriaInput | PublicacionCreateOrConnectWithoutCategoriaInput[]
    createMany?: PublicacionCreateManyCategoriaInputEnvelope
    connect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
  }

  export type PublicacionUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<PublicacionCreateWithoutCategoriaInput, PublicacionUncheckedCreateWithoutCategoriaInput> | PublicacionCreateWithoutCategoriaInput[] | PublicacionUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PublicacionCreateOrConnectWithoutCategoriaInput | PublicacionCreateOrConnectWithoutCategoriaInput[]
    createMany?: PublicacionCreateManyCategoriaInputEnvelope
    connect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
  }

  export type PublicacionUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<PublicacionCreateWithoutCategoriaInput, PublicacionUncheckedCreateWithoutCategoriaInput> | PublicacionCreateWithoutCategoriaInput[] | PublicacionUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PublicacionCreateOrConnectWithoutCategoriaInput | PublicacionCreateOrConnectWithoutCategoriaInput[]
    upsert?: PublicacionUpsertWithWhereUniqueWithoutCategoriaInput | PublicacionUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: PublicacionCreateManyCategoriaInputEnvelope
    set?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    disconnect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    delete?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    connect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    update?: PublicacionUpdateWithWhereUniqueWithoutCategoriaInput | PublicacionUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: PublicacionUpdateManyWithWhereWithoutCategoriaInput | PublicacionUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: PublicacionScalarWhereInput | PublicacionScalarWhereInput[]
  }

  export type PublicacionUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<PublicacionCreateWithoutCategoriaInput, PublicacionUncheckedCreateWithoutCategoriaInput> | PublicacionCreateWithoutCategoriaInput[] | PublicacionUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PublicacionCreateOrConnectWithoutCategoriaInput | PublicacionCreateOrConnectWithoutCategoriaInput[]
    upsert?: PublicacionUpsertWithWhereUniqueWithoutCategoriaInput | PublicacionUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: PublicacionCreateManyCategoriaInputEnvelope
    set?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    disconnect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    delete?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    connect?: PublicacionWhereUniqueInput | PublicacionWhereUniqueInput[]
    update?: PublicacionUpdateWithWhereUniqueWithoutCategoriaInput | PublicacionUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: PublicacionUpdateManyWithWhereWithoutCategoriaInput | PublicacionUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: PublicacionScalarWhereInput | PublicacionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPublicacionesInput = {
    create?: XOR<UserCreateWithoutPublicacionesInput, UserUncheckedCreateWithoutPublicacionesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublicacionesInput
    connect?: UserWhereUniqueInput
  }

  export type CategoriaCreateNestedOneWithoutPublicacionesInput = {
    create?: XOR<CategoriaCreateWithoutPublicacionesInput, CategoriaUncheckedCreateWithoutPublicacionesInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutPublicacionesInput
    connect?: CategoriaWhereUniqueInput
  }

  export type pujaCreateNestedManyWithoutPublicacionInput = {
    create?: XOR<pujaCreateWithoutPublicacionInput, pujaUncheckedCreateWithoutPublicacionInput> | pujaCreateWithoutPublicacionInput[] | pujaUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: pujaCreateOrConnectWithoutPublicacionInput | pujaCreateOrConnectWithoutPublicacionInput[]
    createMany?: pujaCreateManyPublicacionInputEnvelope
    connect?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
  }

  export type pujaUncheckedCreateNestedManyWithoutPublicacionInput = {
    create?: XOR<pujaCreateWithoutPublicacionInput, pujaUncheckedCreateWithoutPublicacionInput> | pujaCreateWithoutPublicacionInput[] | pujaUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: pujaCreateOrConnectWithoutPublicacionInput | pujaCreateOrConnectWithoutPublicacionInput[]
    createMany?: pujaCreateManyPublicacionInputEnvelope
    connect?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPublicacionesNestedInput = {
    create?: XOR<UserCreateWithoutPublicacionesInput, UserUncheckedCreateWithoutPublicacionesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublicacionesInput
    upsert?: UserUpsertWithoutPublicacionesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPublicacionesInput, UserUpdateWithoutPublicacionesInput>, UserUncheckedUpdateWithoutPublicacionesInput>
  }

  export type CategoriaUpdateOneRequiredWithoutPublicacionesNestedInput = {
    create?: XOR<CategoriaCreateWithoutPublicacionesInput, CategoriaUncheckedCreateWithoutPublicacionesInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutPublicacionesInput
    upsert?: CategoriaUpsertWithoutPublicacionesInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutPublicacionesInput, CategoriaUpdateWithoutPublicacionesInput>, CategoriaUncheckedUpdateWithoutPublicacionesInput>
  }

  export type pujaUpdateManyWithoutPublicacionNestedInput = {
    create?: XOR<pujaCreateWithoutPublicacionInput, pujaUncheckedCreateWithoutPublicacionInput> | pujaCreateWithoutPublicacionInput[] | pujaUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: pujaCreateOrConnectWithoutPublicacionInput | pujaCreateOrConnectWithoutPublicacionInput[]
    upsert?: pujaUpsertWithWhereUniqueWithoutPublicacionInput | pujaUpsertWithWhereUniqueWithoutPublicacionInput[]
    createMany?: pujaCreateManyPublicacionInputEnvelope
    set?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
    disconnect?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
    delete?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
    connect?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
    update?: pujaUpdateWithWhereUniqueWithoutPublicacionInput | pujaUpdateWithWhereUniqueWithoutPublicacionInput[]
    updateMany?: pujaUpdateManyWithWhereWithoutPublicacionInput | pujaUpdateManyWithWhereWithoutPublicacionInput[]
    deleteMany?: pujaScalarWhereInput | pujaScalarWhereInput[]
  }

  export type pujaUncheckedUpdateManyWithoutPublicacionNestedInput = {
    create?: XOR<pujaCreateWithoutPublicacionInput, pujaUncheckedCreateWithoutPublicacionInput> | pujaCreateWithoutPublicacionInput[] | pujaUncheckedCreateWithoutPublicacionInput[]
    connectOrCreate?: pujaCreateOrConnectWithoutPublicacionInput | pujaCreateOrConnectWithoutPublicacionInput[]
    upsert?: pujaUpsertWithWhereUniqueWithoutPublicacionInput | pujaUpsertWithWhereUniqueWithoutPublicacionInput[]
    createMany?: pujaCreateManyPublicacionInputEnvelope
    set?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
    disconnect?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
    delete?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
    connect?: pujaWhereUniqueInput | pujaWhereUniqueInput[]
    update?: pujaUpdateWithWhereUniqueWithoutPublicacionInput | pujaUpdateWithWhereUniqueWithoutPublicacionInput[]
    updateMany?: pujaUpdateManyWithWhereWithoutPublicacionInput | pujaUpdateManyWithWhereWithoutPublicacionInput[]
    deleteMany?: pujaScalarWhereInput | pujaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPujasInput = {
    create?: XOR<UserCreateWithoutPujasInput, UserUncheckedCreateWithoutPujasInput>
    connectOrCreate?: UserCreateOrConnectWithoutPujasInput
    connect?: UserWhereUniqueInput
  }

  export type PublicacionCreateNestedOneWithoutPujasInput = {
    create?: XOR<PublicacionCreateWithoutPujasInput, PublicacionUncheckedCreateWithoutPujasInput>
    connectOrCreate?: PublicacionCreateOrConnectWithoutPujasInput
    connect?: PublicacionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPujasNestedInput = {
    create?: XOR<UserCreateWithoutPujasInput, UserUncheckedCreateWithoutPujasInput>
    connectOrCreate?: UserCreateOrConnectWithoutPujasInput
    upsert?: UserUpsertWithoutPujasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPujasInput, UserUpdateWithoutPujasInput>, UserUncheckedUpdateWithoutPujasInput>
  }

  export type PublicacionUpdateOneRequiredWithoutPujasNestedInput = {
    create?: XOR<PublicacionCreateWithoutPujasInput, PublicacionUncheckedCreateWithoutPujasInput>
    connectOrCreate?: PublicacionCreateOrConnectWithoutPujasInput
    upsert?: PublicacionUpsertWithoutPujasInput
    connect?: PublicacionWhereUniqueInput
    update?: XOR<XOR<PublicacionUpdateToOneWithWhereWithoutPujasInput, PublicacionUpdateWithoutPujasInput>, PublicacionUncheckedUpdateWithoutPujasInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PublicacionCreateWithoutUsuarioInput = {
    titulo: string
    descripcion: string
    fecha?: Date | string
    precio: number
    createdAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutPublicacionesInput
    pujas?: pujaCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionUncheckedCreateWithoutUsuarioInput = {
    id?: number
    titulo: string
    descripcion: string
    fecha?: Date | string
    precio: number
    createdAt?: Date | string
    categoriaId: number
    pujas?: pujaUncheckedCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionCreateOrConnectWithoutUsuarioInput = {
    where: PublicacionWhereUniqueInput
    create: XOR<PublicacionCreateWithoutUsuarioInput, PublicacionUncheckedCreateWithoutUsuarioInput>
  }

  export type PublicacionCreateManyUsuarioInputEnvelope = {
    data: PublicacionCreateManyUsuarioInput | PublicacionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type pujaCreateWithoutUsuarioInput = {
    monto?: number
    fecha?: Date | string
    publicacion: PublicacionCreateNestedOneWithoutPujasInput
  }

  export type pujaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    monto?: number
    fecha?: Date | string
    publicacionId: number
  }

  export type pujaCreateOrConnectWithoutUsuarioInput = {
    where: pujaWhereUniqueInput
    create: XOR<pujaCreateWithoutUsuarioInput, pujaUncheckedCreateWithoutUsuarioInput>
  }

  export type pujaCreateManyUsuarioInputEnvelope = {
    data: pujaCreateManyUsuarioInput | pujaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PublicacionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PublicacionWhereUniqueInput
    update: XOR<PublicacionUpdateWithoutUsuarioInput, PublicacionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PublicacionCreateWithoutUsuarioInput, PublicacionUncheckedCreateWithoutUsuarioInput>
  }

  export type PublicacionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PublicacionWhereUniqueInput
    data: XOR<PublicacionUpdateWithoutUsuarioInput, PublicacionUncheckedUpdateWithoutUsuarioInput>
  }

  export type PublicacionUpdateManyWithWhereWithoutUsuarioInput = {
    where: PublicacionScalarWhereInput
    data: XOR<PublicacionUpdateManyMutationInput, PublicacionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PublicacionScalarWhereInput = {
    AND?: PublicacionScalarWhereInput | PublicacionScalarWhereInput[]
    OR?: PublicacionScalarWhereInput[]
    NOT?: PublicacionScalarWhereInput | PublicacionScalarWhereInput[]
    id?: IntFilter<"Publicacion"> | number
    titulo?: StringFilter<"Publicacion"> | string
    descripcion?: StringFilter<"Publicacion"> | string
    fecha?: DateTimeFilter<"Publicacion"> | Date | string
    precio?: FloatFilter<"Publicacion"> | number
    createdAt?: DateTimeFilter<"Publicacion"> | Date | string
    usuarioId?: IntFilter<"Publicacion"> | number
    categoriaId?: IntFilter<"Publicacion"> | number
  }

  export type pujaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: pujaWhereUniqueInput
    update: XOR<pujaUpdateWithoutUsuarioInput, pujaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<pujaCreateWithoutUsuarioInput, pujaUncheckedCreateWithoutUsuarioInput>
  }

  export type pujaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: pujaWhereUniqueInput
    data: XOR<pujaUpdateWithoutUsuarioInput, pujaUncheckedUpdateWithoutUsuarioInput>
  }

  export type pujaUpdateManyWithWhereWithoutUsuarioInput = {
    where: pujaScalarWhereInput
    data: XOR<pujaUpdateManyMutationInput, pujaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type pujaScalarWhereInput = {
    AND?: pujaScalarWhereInput | pujaScalarWhereInput[]
    OR?: pujaScalarWhereInput[]
    NOT?: pujaScalarWhereInput | pujaScalarWhereInput[]
    id?: IntFilter<"puja"> | number
    monto?: IntFilter<"puja"> | number
    fecha?: DateTimeFilter<"puja"> | Date | string
    usuarioId?: IntFilter<"puja"> | number
    publicacionId?: IntFilter<"puja"> | number
  }

  export type PublicacionCreateWithoutCategoriaInput = {
    titulo: string
    descripcion: string
    fecha?: Date | string
    precio: number
    createdAt?: Date | string
    usuario: UserCreateNestedOneWithoutPublicacionesInput
    pujas?: pujaCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionUncheckedCreateWithoutCategoriaInput = {
    id?: number
    titulo: string
    descripcion: string
    fecha?: Date | string
    precio: number
    createdAt?: Date | string
    usuarioId: number
    pujas?: pujaUncheckedCreateNestedManyWithoutPublicacionInput
  }

  export type PublicacionCreateOrConnectWithoutCategoriaInput = {
    where: PublicacionWhereUniqueInput
    create: XOR<PublicacionCreateWithoutCategoriaInput, PublicacionUncheckedCreateWithoutCategoriaInput>
  }

  export type PublicacionCreateManyCategoriaInputEnvelope = {
    data: PublicacionCreateManyCategoriaInput | PublicacionCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type PublicacionUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: PublicacionWhereUniqueInput
    update: XOR<PublicacionUpdateWithoutCategoriaInput, PublicacionUncheckedUpdateWithoutCategoriaInput>
    create: XOR<PublicacionCreateWithoutCategoriaInput, PublicacionUncheckedCreateWithoutCategoriaInput>
  }

  export type PublicacionUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: PublicacionWhereUniqueInput
    data: XOR<PublicacionUpdateWithoutCategoriaInput, PublicacionUncheckedUpdateWithoutCategoriaInput>
  }

  export type PublicacionUpdateManyWithWhereWithoutCategoriaInput = {
    where: PublicacionScalarWhereInput
    data: XOR<PublicacionUpdateManyMutationInput, PublicacionUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type UserCreateWithoutPublicacionesInput = {
    email: string
    name: string
    lastname: string
    password: string
    fechaCreacion?: Date | string
    pujas?: pujaCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutPublicacionesInput = {
    id?: number
    email: string
    name: string
    lastname: string
    password: string
    fechaCreacion?: Date | string
    pujas?: pujaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutPublicacionesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPublicacionesInput, UserUncheckedCreateWithoutPublicacionesInput>
  }

  export type CategoriaCreateWithoutPublicacionesInput = {
    nombre: string
  }

  export type CategoriaUncheckedCreateWithoutPublicacionesInput = {
    id?: number
    nombre: string
  }

  export type CategoriaCreateOrConnectWithoutPublicacionesInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutPublicacionesInput, CategoriaUncheckedCreateWithoutPublicacionesInput>
  }

  export type pujaCreateWithoutPublicacionInput = {
    monto?: number
    fecha?: Date | string
    usuario: UserCreateNestedOneWithoutPujasInput
  }

  export type pujaUncheckedCreateWithoutPublicacionInput = {
    id?: number
    monto?: number
    fecha?: Date | string
    usuarioId: number
  }

  export type pujaCreateOrConnectWithoutPublicacionInput = {
    where: pujaWhereUniqueInput
    create: XOR<pujaCreateWithoutPublicacionInput, pujaUncheckedCreateWithoutPublicacionInput>
  }

  export type pujaCreateManyPublicacionInputEnvelope = {
    data: pujaCreateManyPublicacionInput | pujaCreateManyPublicacionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPublicacionesInput = {
    update: XOR<UserUpdateWithoutPublicacionesInput, UserUncheckedUpdateWithoutPublicacionesInput>
    create: XOR<UserCreateWithoutPublicacionesInput, UserUncheckedCreateWithoutPublicacionesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPublicacionesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPublicacionesInput, UserUncheckedUpdateWithoutPublicacionesInput>
  }

  export type UserUpdateWithoutPublicacionesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    pujas?: pujaUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutPublicacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    pujas?: pujaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CategoriaUpsertWithoutPublicacionesInput = {
    update: XOR<CategoriaUpdateWithoutPublicacionesInput, CategoriaUncheckedUpdateWithoutPublicacionesInput>
    create: XOR<CategoriaCreateWithoutPublicacionesInput, CategoriaUncheckedCreateWithoutPublicacionesInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutPublicacionesInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutPublicacionesInput, CategoriaUncheckedUpdateWithoutPublicacionesInput>
  }

  export type CategoriaUpdateWithoutPublicacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUncheckedUpdateWithoutPublicacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type pujaUpsertWithWhereUniqueWithoutPublicacionInput = {
    where: pujaWhereUniqueInput
    update: XOR<pujaUpdateWithoutPublicacionInput, pujaUncheckedUpdateWithoutPublicacionInput>
    create: XOR<pujaCreateWithoutPublicacionInput, pujaUncheckedCreateWithoutPublicacionInput>
  }

  export type pujaUpdateWithWhereUniqueWithoutPublicacionInput = {
    where: pujaWhereUniqueInput
    data: XOR<pujaUpdateWithoutPublicacionInput, pujaUncheckedUpdateWithoutPublicacionInput>
  }

  export type pujaUpdateManyWithWhereWithoutPublicacionInput = {
    where: pujaScalarWhereInput
    data: XOR<pujaUpdateManyMutationInput, pujaUncheckedUpdateManyWithoutPublicacionInput>
  }

  export type UserCreateWithoutPujasInput = {
    email: string
    name: string
    lastname: string
    password: string
    fechaCreacion?: Date | string
    publicaciones?: PublicacionCreateNestedManyWithoutUsuarioInput
  }

  export type UserUncheckedCreateWithoutPujasInput = {
    id?: number
    email: string
    name: string
    lastname: string
    password: string
    fechaCreacion?: Date | string
    publicaciones?: PublicacionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UserCreateOrConnectWithoutPujasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPujasInput, UserUncheckedCreateWithoutPujasInput>
  }

  export type PublicacionCreateWithoutPujasInput = {
    titulo: string
    descripcion: string
    fecha?: Date | string
    precio: number
    createdAt?: Date | string
    usuario: UserCreateNestedOneWithoutPublicacionesInput
    categoria: CategoriaCreateNestedOneWithoutPublicacionesInput
  }

  export type PublicacionUncheckedCreateWithoutPujasInput = {
    id?: number
    titulo: string
    descripcion: string
    fecha?: Date | string
    precio: number
    createdAt?: Date | string
    usuarioId: number
    categoriaId: number
  }

  export type PublicacionCreateOrConnectWithoutPujasInput = {
    where: PublicacionWhereUniqueInput
    create: XOR<PublicacionCreateWithoutPujasInput, PublicacionUncheckedCreateWithoutPujasInput>
  }

  export type UserUpsertWithoutPujasInput = {
    update: XOR<UserUpdateWithoutPujasInput, UserUncheckedUpdateWithoutPujasInput>
    create: XOR<UserCreateWithoutPujasInput, UserUncheckedCreateWithoutPujasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPujasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPujasInput, UserUncheckedUpdateWithoutPujasInput>
  }

  export type UserUpdateWithoutPujasInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    publicaciones?: PublicacionUpdateManyWithoutUsuarioNestedInput
  }

  export type UserUncheckedUpdateWithoutPujasInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    publicaciones?: PublicacionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PublicacionUpsertWithoutPujasInput = {
    update: XOR<PublicacionUpdateWithoutPujasInput, PublicacionUncheckedUpdateWithoutPujasInput>
    create: XOR<PublicacionCreateWithoutPujasInput, PublicacionUncheckedCreateWithoutPujasInput>
    where?: PublicacionWhereInput
  }

  export type PublicacionUpdateToOneWithWhereWithoutPujasInput = {
    where?: PublicacionWhereInput
    data: XOR<PublicacionUpdateWithoutPujasInput, PublicacionUncheckedUpdateWithoutPujasInput>
  }

  export type PublicacionUpdateWithoutPujasInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutPublicacionesNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutPublicacionesNestedInput
  }

  export type PublicacionUncheckedUpdateWithoutPujasInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type PublicacionCreateManyUsuarioInput = {
    id?: number
    titulo: string
    descripcion: string
    fecha?: Date | string
    precio: number
    createdAt?: Date | string
    categoriaId: number
  }

  export type pujaCreateManyUsuarioInput = {
    id?: number
    monto?: number
    fecha?: Date | string
    publicacionId: number
  }

  export type PublicacionUpdateWithoutUsuarioInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutPublicacionesNestedInput
    pujas?: pujaUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaId?: IntFieldUpdateOperationsInput | number
    pujas?: pujaUncheckedUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type pujaUpdateWithoutUsuarioInput = {
    monto?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacion?: PublicacionUpdateOneRequiredWithoutPujasNestedInput
  }

  export type pujaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacionId?: IntFieldUpdateOperationsInput | number
  }

  export type pujaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    publicacionId?: IntFieldUpdateOperationsInput | number
  }

  export type PublicacionCreateManyCategoriaInput = {
    id?: number
    titulo: string
    descripcion: string
    fecha?: Date | string
    precio: number
    createdAt?: Date | string
    usuarioId: number
  }

  export type PublicacionUpdateWithoutCategoriaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutPublicacionesNestedInput
    pujas?: pujaUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    pujas?: pujaUncheckedUpdateManyWithoutPublicacionNestedInput
  }

  export type PublicacionUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type pujaCreateManyPublicacionInput = {
    id?: number
    monto?: number
    fecha?: Date | string
    usuarioId: number
  }

  export type pujaUpdateWithoutPublicacionInput = {
    monto?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UserUpdateOneRequiredWithoutPujasNestedInput
  }

  export type pujaUncheckedUpdateWithoutPublicacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type pujaUncheckedUpdateManyWithoutPublicacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }



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

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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model activities
 * 
 */
export type activities = $Result.DefaultSelection<Prisma.$activitiesPayload>
/**
 * Model instructors
 * 
 */
export type instructors = $Result.DefaultSelection<Prisma.$instructorsPayload>
/**
 * Model activityLog
 * 
 */
export type activityLog = $Result.DefaultSelection<Prisma.$activityLogPayload>
/**
 * Model activityPlanning
 * 
 */
export type activityPlanning = $Result.DefaultSelection<Prisma.$activityPlanningPayload>
/**
 * Model activityCancellation
 * 
 */
export type activityCancellation = $Result.DefaultSelection<Prisma.$activityCancellationPayload>
/**
 * Model gym
 * 
 */
export type gym = $Result.DefaultSelection<Prisma.$gymPayload>
/**
 * Model contactForm
 * 
 */
export type contactForm = $Result.DefaultSelection<Prisma.$contactFormPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const activityLogStatus: {
  subscribed: 'subscribed',
  canceled: 'canceled',
  attended: 'attended',
  unattended: 'unattended'
};

export type activityLogStatus = (typeof activityLogStatus)[keyof typeof activityLogStatus]

}

export type activityLogStatus = $Enums.activityLogStatus

export const activityLogStatus: typeof $Enums.activityLogStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activities`: Exposes CRUD operations for the **activities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activities.findMany()
    * ```
    */
  get activities(): Prisma.activitiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instructors`: Exposes CRUD operations for the **instructors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instructors
    * const instructors = await prisma.instructors.findMany()
    * ```
    */
  get instructors(): Prisma.instructorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **activityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.activityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityPlanning`: Exposes CRUD operations for the **activityPlanning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityPlannings
    * const activityPlannings = await prisma.activityPlanning.findMany()
    * ```
    */
  get activityPlanning(): Prisma.activityPlanningDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityCancellation`: Exposes CRUD operations for the **activityCancellation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityCancellations
    * const activityCancellations = await prisma.activityCancellation.findMany()
    * ```
    */
  get activityCancellation(): Prisma.activityCancellationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gym`: Exposes CRUD operations for the **gym** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gyms
    * const gyms = await prisma.gym.findMany()
    * ```
    */
  get gym(): Prisma.gymDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactForm`: Exposes CRUD operations for the **contactForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactForms
    * const contactForms = await prisma.contactForm.findMany()
    * ```
    */
  get contactForm(): Prisma.contactFormDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    users: 'users',
    activities: 'activities',
    instructors: 'instructors',
    activityLog: 'activityLog',
    activityPlanning: 'activityPlanning',
    activityCancellation: 'activityCancellation',
    gym: 'gym',
    contactForm: 'contactForm'
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
      modelProps: "users" | "activities" | "instructors" | "activityLog" | "activityPlanning" | "activityCancellation" | "gym" | "contactForm"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      activities: {
        payload: Prisma.$activitiesPayload<ExtArgs>
        fields: Prisma.activitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.activitiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.activitiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          findFirst: {
            args: Prisma.activitiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.activitiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          findMany: {
            args: Prisma.activitiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>[]
          }
          create: {
            args: Prisma.activitiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          createMany: {
            args: Prisma.activitiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.activitiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>[]
          }
          delete: {
            args: Prisma.activitiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          update: {
            args: Prisma.activitiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          deleteMany: {
            args: Prisma.activitiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.activitiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.activitiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>[]
          }
          upsert: {
            args: Prisma.activitiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitiesPayload>
          }
          aggregate: {
            args: Prisma.ActivitiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivities>
          }
          groupBy: {
            args: Prisma.activitiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.activitiesCountArgs<ExtArgs>
            result: $Utils.Optional<ActivitiesCountAggregateOutputType> | number
          }
        }
      }
      instructors: {
        payload: Prisma.$instructorsPayload<ExtArgs>
        fields: Prisma.instructorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.instructorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.instructorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          findFirst: {
            args: Prisma.instructorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.instructorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          findMany: {
            args: Prisma.instructorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>[]
          }
          create: {
            args: Prisma.instructorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          createMany: {
            args: Prisma.instructorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.instructorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>[]
          }
          delete: {
            args: Prisma.instructorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          update: {
            args: Prisma.instructorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          deleteMany: {
            args: Prisma.instructorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.instructorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.instructorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>[]
          }
          upsert: {
            args: Prisma.instructorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$instructorsPayload>
          }
          aggregate: {
            args: Prisma.InstructorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructors>
          }
          groupBy: {
            args: Prisma.instructorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.instructorsCountArgs<ExtArgs>
            result: $Utils.Optional<InstructorsCountAggregateOutputType> | number
          }
        }
      }
      activityLog: {
        payload: Prisma.$activityLogPayload<ExtArgs>
        fields: Prisma.activityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.activityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.activityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityLogPayload>
          }
          findFirst: {
            args: Prisma.activityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.activityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityLogPayload>
          }
          findMany: {
            args: Prisma.activityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityLogPayload>[]
          }
          create: {
            args: Prisma.activityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityLogPayload>
          }
          createMany: {
            args: Prisma.activityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.activityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityLogPayload>[]
          }
          delete: {
            args: Prisma.activityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityLogPayload>
          }
          update: {
            args: Prisma.activityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityLogPayload>
          }
          deleteMany: {
            args: Prisma.activityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.activityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.activityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityLogPayload>[]
          }
          upsert: {
            args: Prisma.activityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.activityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.activityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      activityPlanning: {
        payload: Prisma.$activityPlanningPayload<ExtArgs>
        fields: Prisma.activityPlanningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.activityPlanningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPlanningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.activityPlanningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPlanningPayload>
          }
          findFirst: {
            args: Prisma.activityPlanningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPlanningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.activityPlanningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPlanningPayload>
          }
          findMany: {
            args: Prisma.activityPlanningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPlanningPayload>[]
          }
          create: {
            args: Prisma.activityPlanningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPlanningPayload>
          }
          createMany: {
            args: Prisma.activityPlanningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.activityPlanningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPlanningPayload>[]
          }
          delete: {
            args: Prisma.activityPlanningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPlanningPayload>
          }
          update: {
            args: Prisma.activityPlanningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPlanningPayload>
          }
          deleteMany: {
            args: Prisma.activityPlanningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.activityPlanningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.activityPlanningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPlanningPayload>[]
          }
          upsert: {
            args: Prisma.activityPlanningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPlanningPayload>
          }
          aggregate: {
            args: Prisma.ActivityPlanningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityPlanning>
          }
          groupBy: {
            args: Prisma.activityPlanningGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityPlanningGroupByOutputType>[]
          }
          count: {
            args: Prisma.activityPlanningCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityPlanningCountAggregateOutputType> | number
          }
        }
      }
      activityCancellation: {
        payload: Prisma.$activityCancellationPayload<ExtArgs>
        fields: Prisma.activityCancellationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.activityCancellationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityCancellationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.activityCancellationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityCancellationPayload>
          }
          findFirst: {
            args: Prisma.activityCancellationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityCancellationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.activityCancellationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityCancellationPayload>
          }
          findMany: {
            args: Prisma.activityCancellationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityCancellationPayload>[]
          }
          create: {
            args: Prisma.activityCancellationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityCancellationPayload>
          }
          createMany: {
            args: Prisma.activityCancellationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.activityCancellationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityCancellationPayload>[]
          }
          delete: {
            args: Prisma.activityCancellationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityCancellationPayload>
          }
          update: {
            args: Prisma.activityCancellationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityCancellationPayload>
          }
          deleteMany: {
            args: Prisma.activityCancellationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.activityCancellationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.activityCancellationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityCancellationPayload>[]
          }
          upsert: {
            args: Prisma.activityCancellationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityCancellationPayload>
          }
          aggregate: {
            args: Prisma.ActivityCancellationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityCancellation>
          }
          groupBy: {
            args: Prisma.activityCancellationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityCancellationGroupByOutputType>[]
          }
          count: {
            args: Prisma.activityCancellationCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCancellationCountAggregateOutputType> | number
          }
        }
      }
      gym: {
        payload: Prisma.$gymPayload<ExtArgs>
        fields: Prisma.gymFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gymFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gymPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gymFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gymPayload>
          }
          findFirst: {
            args: Prisma.gymFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gymPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gymFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gymPayload>
          }
          findMany: {
            args: Prisma.gymFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gymPayload>[]
          }
          create: {
            args: Prisma.gymCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gymPayload>
          }
          createMany: {
            args: Prisma.gymCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gymCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gymPayload>[]
          }
          delete: {
            args: Prisma.gymDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gymPayload>
          }
          update: {
            args: Prisma.gymUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gymPayload>
          }
          deleteMany: {
            args: Prisma.gymDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gymUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.gymUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gymPayload>[]
          }
          upsert: {
            args: Prisma.gymUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gymPayload>
          }
          aggregate: {
            args: Prisma.GymAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGym>
          }
          groupBy: {
            args: Prisma.gymGroupByArgs<ExtArgs>
            result: $Utils.Optional<GymGroupByOutputType>[]
          }
          count: {
            args: Prisma.gymCountArgs<ExtArgs>
            result: $Utils.Optional<GymCountAggregateOutputType> | number
          }
        }
      }
      contactForm: {
        payload: Prisma.$contactFormPayload<ExtArgs>
        fields: Prisma.contactFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contactFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contactFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactFormPayload>
          }
          findFirst: {
            args: Prisma.contactFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contactFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactFormPayload>
          }
          findMany: {
            args: Prisma.contactFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactFormPayload>[]
          }
          create: {
            args: Prisma.contactFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactFormPayload>
          }
          createMany: {
            args: Prisma.contactFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.contactFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactFormPayload>[]
          }
          delete: {
            args: Prisma.contactFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactFormPayload>
          }
          update: {
            args: Prisma.contactFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactFormPayload>
          }
          deleteMany: {
            args: Prisma.contactFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contactFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.contactFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactFormPayload>[]
          }
          upsert: {
            args: Prisma.contactFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactFormPayload>
          }
          aggregate: {
            args: Prisma.ContactFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactForm>
          }
          groupBy: {
            args: Prisma.contactFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.contactFormCountArgs<ExtArgs>
            result: $Utils.Optional<ContactFormCountAggregateOutputType> | number
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
    users?: usersOmit
    activities?: activitiesOmit
    instructors?: instructorsOmit
    activityLog?: activityLogOmit
    activityPlanning?: activityPlanningOmit
    activityCancellation?: activityCancellationOmit
    gym?: gymOmit
    contactForm?: contactFormOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    activityLog: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityLog?: boolean | UsersCountOutputTypeCountActivityLogArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountActivityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activityLogWhereInput
  }


  /**
   * Count Type ActivitiesCountOutputType
   */

  export type ActivitiesCountOutputType = {
    activityPlanning: number
  }

  export type ActivitiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityPlanning?: boolean | ActivitiesCountOutputTypeCountActivityPlanningArgs
  }

  // Custom InputTypes
  /**
   * ActivitiesCountOutputType without action
   */
  export type ActivitiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivitiesCountOutputType
     */
    select?: ActivitiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivitiesCountOutputType without action
   */
  export type ActivitiesCountOutputTypeCountActivityPlanningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activityPlanningWhereInput
  }


  /**
   * Count Type InstructorsCountOutputType
   */

  export type InstructorsCountOutputType = {
    activities: number
  }

  export type InstructorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | InstructorsCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * InstructorsCountOutputType without action
   */
  export type InstructorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorsCountOutputType
     */
    select?: InstructorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstructorsCountOutputType without action
   */
  export type InstructorsCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activitiesWhereInput
  }


  /**
   * Count Type ActivityPlanningCountOutputType
   */

  export type ActivityPlanningCountOutputType = {
    activityCancellation: number
    activityLog: number
  }

  export type ActivityPlanningCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityCancellation?: boolean | ActivityPlanningCountOutputTypeCountActivityCancellationArgs
    activityLog?: boolean | ActivityPlanningCountOutputTypeCountActivityLogArgs
  }

  // Custom InputTypes
  /**
   * ActivityPlanningCountOutputType without action
   */
  export type ActivityPlanningCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityPlanningCountOutputType
     */
    select?: ActivityPlanningCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityPlanningCountOutputType without action
   */
  export type ActivityPlanningCountOutputTypeCountActivityCancellationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activityCancellationWhereInput
  }

  /**
   * ActivityPlanningCountOutputType without action
   */
  export type ActivityPlanningCountOutputTypeCountActivityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activityLogWhereInput
  }


  /**
   * Count Type GymCountOutputType
   */

  export type GymCountOutputType = {
    activities: number
  }

  export type GymCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | GymCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * GymCountOutputType without action
   */
  export type GymCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GymCountOutputType
     */
    select?: GymCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GymCountOutputType without action
   */
  export type GymCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activitiesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    abonoRemaining: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    abonoRemaining: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    active: boolean | null
    dateLastActivity: Date | null
    isVerified: boolean | null
    abonoRemaining: number | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    active: boolean | null
    dateLastActivity: Date | null
    isVerified: boolean | null
    abonoRemaining: number | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    active: number
    dateLastActivity: number
    isVerified: number
    abonoRemaining: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    abonoRemaining?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    abonoRemaining?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    active?: true
    dateLastActivity?: true
    isVerified?: true
    abonoRemaining?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    active?: true
    dateLastActivity?: true
    isVerified?: true
    abonoRemaining?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    active?: true
    dateLastActivity?: true
    isVerified?: true
    abonoRemaining?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string | null
    active: boolean | null
    dateLastActivity: Date | null
    isVerified: boolean | null
    abonoRemaining: number
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
    dateLastActivity?: boolean
    isVerified?: boolean
    abonoRemaining?: boolean
    activityLog?: boolean | users$activityLogArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
    dateLastActivity?: boolean
    isVerified?: boolean
    abonoRemaining?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
    dateLastActivity?: boolean
    isVerified?: boolean
    abonoRemaining?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
    dateLastActivity?: boolean
    isVerified?: boolean
    abonoRemaining?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "active" | "dateLastActivity" | "isVerified" | "abonoRemaining", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityLog?: boolean | users$activityLogArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      activityLog: Prisma.$activityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      phone: string | null
      active: boolean | null
      dateLastActivity: Date | null
      isVerified: boolean | null
      abonoRemaining: number
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activityLog<T extends users$activityLogArgs<ExtArgs> = {}>(args?: Subset<T, users$activityLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly firstName: FieldRef<"users", 'String'>
    readonly lastName: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly active: FieldRef<"users", 'Boolean'>
    readonly dateLastActivity: FieldRef<"users", 'DateTime'>
    readonly isVerified: FieldRef<"users", 'Boolean'>
    readonly abonoRemaining: FieldRef<"users", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.activityLog
   */
  export type users$activityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityLog
     */
    select?: activityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityLog
     */
    omit?: activityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityLogInclude<ExtArgs> | null
    where?: activityLogWhereInput
    orderBy?: activityLogOrderByWithRelationInput | activityLogOrderByWithRelationInput[]
    cursor?: activityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model activities
   */

  export type AggregateActivities = {
    _count: ActivitiesCountAggregateOutputType | null
    _avg: ActivitiesAvgAggregateOutputType | null
    _sum: ActivitiesSumAggregateOutputType | null
    _min: ActivitiesMinAggregateOutputType | null
    _max: ActivitiesMaxAggregateOutputType | null
  }

  export type ActivitiesAvgAggregateOutputType = {
    id: number | null
    instructorId: number | null
    gymId: number | null
    quota: number | null
  }

  export type ActivitiesSumAggregateOutputType = {
    id: number | null
    instructorId: number | null
    gymId: number | null
    quota: number | null
  }

  export type ActivitiesMinAggregateOutputType = {
    id: number | null
    instructorId: number | null
    name: string | null
    active: boolean | null
    description: string | null
    gymId: number | null
    quota: number | null
  }

  export type ActivitiesMaxAggregateOutputType = {
    id: number | null
    instructorId: number | null
    name: string | null
    active: boolean | null
    description: string | null
    gymId: number | null
    quota: number | null
  }

  export type ActivitiesCountAggregateOutputType = {
    id: number
    instructorId: number
    name: number
    active: number
    description: number
    gymId: number
    quota: number
    _all: number
  }


  export type ActivitiesAvgAggregateInputType = {
    id?: true
    instructorId?: true
    gymId?: true
    quota?: true
  }

  export type ActivitiesSumAggregateInputType = {
    id?: true
    instructorId?: true
    gymId?: true
    quota?: true
  }

  export type ActivitiesMinAggregateInputType = {
    id?: true
    instructorId?: true
    name?: true
    active?: true
    description?: true
    gymId?: true
    quota?: true
  }

  export type ActivitiesMaxAggregateInputType = {
    id?: true
    instructorId?: true
    name?: true
    active?: true
    description?: true
    gymId?: true
    quota?: true
  }

  export type ActivitiesCountAggregateInputType = {
    id?: true
    instructorId?: true
    name?: true
    active?: true
    description?: true
    gymId?: true
    quota?: true
    _all?: true
  }

  export type ActivitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activities to aggregate.
     */
    where?: activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activitiesOrderByWithRelationInput | activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned activities
    **/
    _count?: true | ActivitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivitiesMaxAggregateInputType
  }

  export type GetActivitiesAggregateType<T extends ActivitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateActivities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivities[P]>
      : GetScalarType<T[P], AggregateActivities[P]>
  }




  export type activitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activitiesWhereInput
    orderBy?: activitiesOrderByWithAggregationInput | activitiesOrderByWithAggregationInput[]
    by: ActivitiesScalarFieldEnum[] | ActivitiesScalarFieldEnum
    having?: activitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivitiesCountAggregateInputType | true
    _avg?: ActivitiesAvgAggregateInputType
    _sum?: ActivitiesSumAggregateInputType
    _min?: ActivitiesMinAggregateInputType
    _max?: ActivitiesMaxAggregateInputType
  }

  export type ActivitiesGroupByOutputType = {
    id: number
    instructorId: number | null
    name: string
    active: boolean | null
    description: string
    gymId: number
    quota: number
    _count: ActivitiesCountAggregateOutputType | null
    _avg: ActivitiesAvgAggregateOutputType | null
    _sum: ActivitiesSumAggregateOutputType | null
    _min: ActivitiesMinAggregateOutputType | null
    _max: ActivitiesMaxAggregateOutputType | null
  }

  type GetActivitiesGroupByPayload<T extends activitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivitiesGroupByOutputType[P]>
            : GetScalarType<T[P], ActivitiesGroupByOutputType[P]>
        }
      >
    >


  export type activitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    name?: boolean
    active?: boolean
    description?: boolean
    gymId?: boolean
    quota?: boolean
    gym?: boolean | gymDefaultArgs<ExtArgs>
    instructors?: boolean | activities$instructorsArgs<ExtArgs>
    activityPlanning?: boolean | activities$activityPlanningArgs<ExtArgs>
    _count?: boolean | ActivitiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activities"]>

  export type activitiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    name?: boolean
    active?: boolean
    description?: boolean
    gymId?: boolean
    quota?: boolean
    gym?: boolean | gymDefaultArgs<ExtArgs>
    instructors?: boolean | activities$instructorsArgs<ExtArgs>
  }, ExtArgs["result"]["activities"]>

  export type activitiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instructorId?: boolean
    name?: boolean
    active?: boolean
    description?: boolean
    gymId?: boolean
    quota?: boolean
    gym?: boolean | gymDefaultArgs<ExtArgs>
    instructors?: boolean | activities$instructorsArgs<ExtArgs>
  }, ExtArgs["result"]["activities"]>

  export type activitiesSelectScalar = {
    id?: boolean
    instructorId?: boolean
    name?: boolean
    active?: boolean
    description?: boolean
    gymId?: boolean
    quota?: boolean
  }

  export type activitiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "instructorId" | "name" | "active" | "description" | "gymId" | "quota", ExtArgs["result"]["activities"]>
  export type activitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | gymDefaultArgs<ExtArgs>
    instructors?: boolean | activities$instructorsArgs<ExtArgs>
    activityPlanning?: boolean | activities$activityPlanningArgs<ExtArgs>
    _count?: boolean | ActivitiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type activitiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | gymDefaultArgs<ExtArgs>
    instructors?: boolean | activities$instructorsArgs<ExtArgs>
  }
  export type activitiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gym?: boolean | gymDefaultArgs<ExtArgs>
    instructors?: boolean | activities$instructorsArgs<ExtArgs>
  }

  export type $activitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "activities"
    objects: {
      gym: Prisma.$gymPayload<ExtArgs>
      instructors: Prisma.$instructorsPayload<ExtArgs> | null
      activityPlanning: Prisma.$activityPlanningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      instructorId: number | null
      name: string
      active: boolean | null
      description: string
      gymId: number
      quota: number
    }, ExtArgs["result"]["activities"]>
    composites: {}
  }

  type activitiesGetPayload<S extends boolean | null | undefined | activitiesDefaultArgs> = $Result.GetResult<Prisma.$activitiesPayload, S>

  type activitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<activitiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivitiesCountAggregateInputType | true
    }

  export interface activitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['activities'], meta: { name: 'activities' } }
    /**
     * Find zero or one Activities that matches the filter.
     * @param {activitiesFindUniqueArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends activitiesFindUniqueArgs>(args: SelectSubset<T, activitiesFindUniqueArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activities that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {activitiesFindUniqueOrThrowArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends activitiesFindUniqueOrThrowArgs>(args: SelectSubset<T, activitiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesFindFirstArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends activitiesFindFirstArgs>(args?: SelectSubset<T, activitiesFindFirstArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesFindFirstOrThrowArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends activitiesFindFirstOrThrowArgs>(args?: SelectSubset<T, activitiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activities.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activitiesWithIdOnly = await prisma.activities.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends activitiesFindManyArgs>(args?: SelectSubset<T, activitiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activities.
     * @param {activitiesCreateArgs} args - Arguments to create a Activities.
     * @example
     * // Create one Activities
     * const Activities = await prisma.activities.create({
     *   data: {
     *     // ... data to create a Activities
     *   }
     * })
     * 
     */
    create<T extends activitiesCreateArgs>(args: SelectSubset<T, activitiesCreateArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {activitiesCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activities = await prisma.activities.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends activitiesCreateManyArgs>(args?: SelectSubset<T, activitiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {activitiesCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activities = await prisma.activities.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activitiesWithIdOnly = await prisma.activities.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends activitiesCreateManyAndReturnArgs>(args?: SelectSubset<T, activitiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activities.
     * @param {activitiesDeleteArgs} args - Arguments to delete one Activities.
     * @example
     * // Delete one Activities
     * const Activities = await prisma.activities.delete({
     *   where: {
     *     // ... filter to delete one Activities
     *   }
     * })
     * 
     */
    delete<T extends activitiesDeleteArgs>(args: SelectSubset<T, activitiesDeleteArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activities.
     * @param {activitiesUpdateArgs} args - Arguments to update one Activities.
     * @example
     * // Update one Activities
     * const activities = await prisma.activities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends activitiesUpdateArgs>(args: SelectSubset<T, activitiesUpdateArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {activitiesDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends activitiesDeleteManyArgs>(args?: SelectSubset<T, activitiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activities = await prisma.activities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends activitiesUpdateManyArgs>(args: SelectSubset<T, activitiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {activitiesUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activities = await prisma.activities.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activitiesWithIdOnly = await prisma.activities.updateManyAndReturn({
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
    updateManyAndReturn<T extends activitiesUpdateManyAndReturnArgs>(args: SelectSubset<T, activitiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activities.
     * @param {activitiesUpsertArgs} args - Arguments to update or create a Activities.
     * @example
     * // Update or create a Activities
     * const activities = await prisma.activities.upsert({
     *   create: {
     *     // ... data to create a Activities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activities we want to update
     *   }
     * })
     */
    upsert<T extends activitiesUpsertArgs>(args: SelectSubset<T, activitiesUpsertArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activities.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends activitiesCountArgs>(
      args?: Subset<T, activitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivitiesAggregateArgs>(args: Subset<T, ActivitiesAggregateArgs>): Prisma.PrismaPromise<GetActivitiesAggregateType<T>>

    /**
     * Group by Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitiesGroupByArgs} args - Group by arguments.
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
      T extends activitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: activitiesGroupByArgs['orderBy'] }
        : { orderBy?: activitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, activitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the activities model
   */
  readonly fields: activitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for activities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__activitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gym<T extends gymDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gymDefaultArgs<ExtArgs>>): Prisma__gymClient<$Result.GetResult<Prisma.$gymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instructors<T extends activities$instructorsArgs<ExtArgs> = {}>(args?: Subset<T, activities$instructorsArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    activityPlanning<T extends activities$activityPlanningArgs<ExtArgs> = {}>(args?: Subset<T, activities$activityPlanningArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityPlanningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the activities model
   */
  interface activitiesFieldRefs {
    readonly id: FieldRef<"activities", 'Int'>
    readonly instructorId: FieldRef<"activities", 'Int'>
    readonly name: FieldRef<"activities", 'String'>
    readonly active: FieldRef<"activities", 'Boolean'>
    readonly description: FieldRef<"activities", 'String'>
    readonly gymId: FieldRef<"activities", 'Int'>
    readonly quota: FieldRef<"activities", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * activities findUnique
   */
  export type activitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter, which activities to fetch.
     */
    where: activitiesWhereUniqueInput
  }

  /**
   * activities findUniqueOrThrow
   */
  export type activitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter, which activities to fetch.
     */
    where: activitiesWhereUniqueInput
  }

  /**
   * activities findFirst
   */
  export type activitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter, which activities to fetch.
     */
    where?: activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activitiesOrderByWithRelationInput | activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activities.
     */
    cursor?: activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activities.
     */
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * activities findFirstOrThrow
   */
  export type activitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter, which activities to fetch.
     */
    where?: activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activitiesOrderByWithRelationInput | activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activities.
     */
    cursor?: activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activities.
     */
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * activities findMany
   */
  export type activitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter, which activities to fetch.
     */
    where?: activitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activitiesOrderByWithRelationInput | activitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing activities.
     */
    cursor?: activitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * activities create
   */
  export type activitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a activities.
     */
    data: XOR<activitiesCreateInput, activitiesUncheckedCreateInput>
  }

  /**
   * activities createMany
   */
  export type activitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many activities.
     */
    data: activitiesCreateManyInput | activitiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * activities createManyAndReturn
   */
  export type activitiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * The data used to create many activities.
     */
    data: activitiesCreateManyInput | activitiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * activities update
   */
  export type activitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a activities.
     */
    data: XOR<activitiesUpdateInput, activitiesUncheckedUpdateInput>
    /**
     * Choose, which activities to update.
     */
    where: activitiesWhereUniqueInput
  }

  /**
   * activities updateMany
   */
  export type activitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update activities.
     */
    data: XOR<activitiesUpdateManyMutationInput, activitiesUncheckedUpdateManyInput>
    /**
     * Filter which activities to update
     */
    where?: activitiesWhereInput
    /**
     * Limit how many activities to update.
     */
    limit?: number
  }

  /**
   * activities updateManyAndReturn
   */
  export type activitiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * The data used to update activities.
     */
    data: XOR<activitiesUpdateManyMutationInput, activitiesUncheckedUpdateManyInput>
    /**
     * Filter which activities to update
     */
    where?: activitiesWhereInput
    /**
     * Limit how many activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * activities upsert
   */
  export type activitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the activities to update in case it exists.
     */
    where: activitiesWhereUniqueInput
    /**
     * In case the activities found by the `where` argument doesn't exist, create a new activities with this data.
     */
    create: XOR<activitiesCreateInput, activitiesUncheckedCreateInput>
    /**
     * In case the activities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<activitiesUpdateInput, activitiesUncheckedUpdateInput>
  }

  /**
   * activities delete
   */
  export type activitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    /**
     * Filter which activities to delete.
     */
    where: activitiesWhereUniqueInput
  }

  /**
   * activities deleteMany
   */
  export type activitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activities to delete
     */
    where?: activitiesWhereInput
    /**
     * Limit how many activities to delete.
     */
    limit?: number
  }

  /**
   * activities.instructors
   */
  export type activities$instructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    where?: instructorsWhereInput
  }

  /**
   * activities.activityPlanning
   */
  export type activities$activityPlanningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityPlanning
     */
    select?: activityPlanningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityPlanning
     */
    omit?: activityPlanningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityPlanningInclude<ExtArgs> | null
    where?: activityPlanningWhereInput
    orderBy?: activityPlanningOrderByWithRelationInput | activityPlanningOrderByWithRelationInput[]
    cursor?: activityPlanningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityPlanningScalarFieldEnum | ActivityPlanningScalarFieldEnum[]
  }

  /**
   * activities without action
   */
  export type activitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
  }


  /**
   * Model instructors
   */

  export type AggregateInstructors = {
    _count: InstructorsCountAggregateOutputType | null
    _avg: InstructorsAvgAggregateOutputType | null
    _sum: InstructorsSumAggregateOutputType | null
    _min: InstructorsMinAggregateOutputType | null
    _max: InstructorsMaxAggregateOutputType | null
  }

  export type InstructorsAvgAggregateOutputType = {
    id: number | null
  }

  export type InstructorsSumAggregateOutputType = {
    id: number | null
  }

  export type InstructorsMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    active: boolean | null
  }

  export type InstructorsMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    active: boolean | null
  }

  export type InstructorsCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    active: number
    _all: number
  }


  export type InstructorsAvgAggregateInputType = {
    id?: true
  }

  export type InstructorsSumAggregateInputType = {
    id?: true
  }

  export type InstructorsMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    active?: true
  }

  export type InstructorsMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    active?: true
  }

  export type InstructorsCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    active?: true
    _all?: true
  }

  export type InstructorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which instructors to aggregate.
     */
    where?: instructorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instructors to fetch.
     */
    orderBy?: instructorsOrderByWithRelationInput | instructorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: instructorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned instructors
    **/
    _count?: true | InstructorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstructorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstructorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorsMaxAggregateInputType
  }

  export type GetInstructorsAggregateType<T extends InstructorsAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructors[P]>
      : GetScalarType<T[P], AggregateInstructors[P]>
  }




  export type instructorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: instructorsWhereInput
    orderBy?: instructorsOrderByWithAggregationInput | instructorsOrderByWithAggregationInput[]
    by: InstructorsScalarFieldEnum[] | InstructorsScalarFieldEnum
    having?: instructorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorsCountAggregateInputType | true
    _avg?: InstructorsAvgAggregateInputType
    _sum?: InstructorsSumAggregateInputType
    _min?: InstructorsMinAggregateInputType
    _max?: InstructorsMaxAggregateInputType
  }

  export type InstructorsGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string | null
    phone: string | null
    active: boolean | null
    _count: InstructorsCountAggregateOutputType | null
    _avg: InstructorsAvgAggregateOutputType | null
    _sum: InstructorsSumAggregateOutputType | null
    _min: InstructorsMinAggregateOutputType | null
    _max: InstructorsMaxAggregateOutputType | null
  }

  type GetInstructorsGroupByPayload<T extends instructorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorsGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorsGroupByOutputType[P]>
        }
      >
    >


  export type instructorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
    activities?: boolean | instructors$activitiesArgs<ExtArgs>
    _count?: boolean | InstructorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructors"]>

  export type instructorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
  }, ExtArgs["result"]["instructors"]>

  export type instructorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
  }, ExtArgs["result"]["instructors"]>

  export type instructorsSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
  }

  export type instructorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "active", ExtArgs["result"]["instructors"]>
  export type instructorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | instructors$activitiesArgs<ExtArgs>
    _count?: boolean | InstructorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type instructorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type instructorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $instructorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "instructors"
    objects: {
      activities: Prisma.$activitiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string | null
      phone: string | null
      active: boolean | null
    }, ExtArgs["result"]["instructors"]>
    composites: {}
  }

  type instructorsGetPayload<S extends boolean | null | undefined | instructorsDefaultArgs> = $Result.GetResult<Prisma.$instructorsPayload, S>

  type instructorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<instructorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructorsCountAggregateInputType | true
    }

  export interface instructorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['instructors'], meta: { name: 'instructors' } }
    /**
     * Find zero or one Instructors that matches the filter.
     * @param {instructorsFindUniqueArgs} args - Arguments to find a Instructors
     * @example
     * // Get one Instructors
     * const instructors = await prisma.instructors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends instructorsFindUniqueArgs>(args: SelectSubset<T, instructorsFindUniqueArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instructors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {instructorsFindUniqueOrThrowArgs} args - Arguments to find a Instructors
     * @example
     * // Get one Instructors
     * const instructors = await prisma.instructors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends instructorsFindUniqueOrThrowArgs>(args: SelectSubset<T, instructorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsFindFirstArgs} args - Arguments to find a Instructors
     * @example
     * // Get one Instructors
     * const instructors = await prisma.instructors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends instructorsFindFirstArgs>(args?: SelectSubset<T, instructorsFindFirstArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsFindFirstOrThrowArgs} args - Arguments to find a Instructors
     * @example
     * // Get one Instructors
     * const instructors = await prisma.instructors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends instructorsFindFirstOrThrowArgs>(args?: SelectSubset<T, instructorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instructors
     * const instructors = await prisma.instructors.findMany()
     * 
     * // Get first 10 Instructors
     * const instructors = await prisma.instructors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructorsWithIdOnly = await prisma.instructors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends instructorsFindManyArgs>(args?: SelectSubset<T, instructorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instructors.
     * @param {instructorsCreateArgs} args - Arguments to create a Instructors.
     * @example
     * // Create one Instructors
     * const Instructors = await prisma.instructors.create({
     *   data: {
     *     // ... data to create a Instructors
     *   }
     * })
     * 
     */
    create<T extends instructorsCreateArgs>(args: SelectSubset<T, instructorsCreateArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instructors.
     * @param {instructorsCreateManyArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructors = await prisma.instructors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends instructorsCreateManyArgs>(args?: SelectSubset<T, instructorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instructors and returns the data saved in the database.
     * @param {instructorsCreateManyAndReturnArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructors = await prisma.instructors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instructors and only return the `id`
     * const instructorsWithIdOnly = await prisma.instructors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends instructorsCreateManyAndReturnArgs>(args?: SelectSubset<T, instructorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instructors.
     * @param {instructorsDeleteArgs} args - Arguments to delete one Instructors.
     * @example
     * // Delete one Instructors
     * const Instructors = await prisma.instructors.delete({
     *   where: {
     *     // ... filter to delete one Instructors
     *   }
     * })
     * 
     */
    delete<T extends instructorsDeleteArgs>(args: SelectSubset<T, instructorsDeleteArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instructors.
     * @param {instructorsUpdateArgs} args - Arguments to update one Instructors.
     * @example
     * // Update one Instructors
     * const instructors = await prisma.instructors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends instructorsUpdateArgs>(args: SelectSubset<T, instructorsUpdateArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instructors.
     * @param {instructorsDeleteManyArgs} args - Arguments to filter Instructors to delete.
     * @example
     * // Delete a few Instructors
     * const { count } = await prisma.instructors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends instructorsDeleteManyArgs>(args?: SelectSubset<T, instructorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instructors
     * const instructors = await prisma.instructors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends instructorsUpdateManyArgs>(args: SelectSubset<T, instructorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors and returns the data updated in the database.
     * @param {instructorsUpdateManyAndReturnArgs} args - Arguments to update many Instructors.
     * @example
     * // Update many Instructors
     * const instructors = await prisma.instructors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instructors and only return the `id`
     * const instructorsWithIdOnly = await prisma.instructors.updateManyAndReturn({
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
    updateManyAndReturn<T extends instructorsUpdateManyAndReturnArgs>(args: SelectSubset<T, instructorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instructors.
     * @param {instructorsUpsertArgs} args - Arguments to update or create a Instructors.
     * @example
     * // Update or create a Instructors
     * const instructors = await prisma.instructors.upsert({
     *   create: {
     *     // ... data to create a Instructors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instructors we want to update
     *   }
     * })
     */
    upsert<T extends instructorsUpsertArgs>(args: SelectSubset<T, instructorsUpsertArgs<ExtArgs>>): Prisma__instructorsClient<$Result.GetResult<Prisma.$instructorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsCountArgs} args - Arguments to filter Instructors to count.
     * @example
     * // Count the number of Instructors
     * const count = await prisma.instructors.count({
     *   where: {
     *     // ... the filter for the Instructors we want to count
     *   }
     * })
    **/
    count<T extends instructorsCountArgs>(
      args?: Subset<T, instructorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstructorsAggregateArgs>(args: Subset<T, InstructorsAggregateArgs>): Prisma.PrismaPromise<GetInstructorsAggregateType<T>>

    /**
     * Group by Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instructorsGroupByArgs} args - Group by arguments.
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
      T extends instructorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: instructorsGroupByArgs['orderBy'] }
        : { orderBy?: instructorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, instructorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the instructors model
   */
  readonly fields: instructorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for instructors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__instructorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activities<T extends instructors$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, instructors$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the instructors model
   */
  interface instructorsFieldRefs {
    readonly id: FieldRef<"instructors", 'Int'>
    readonly firstName: FieldRef<"instructors", 'String'>
    readonly lastName: FieldRef<"instructors", 'String'>
    readonly email: FieldRef<"instructors", 'String'>
    readonly phone: FieldRef<"instructors", 'String'>
    readonly active: FieldRef<"instructors", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * instructors findUnique
   */
  export type instructorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * Filter, which instructors to fetch.
     */
    where: instructorsWhereUniqueInput
  }

  /**
   * instructors findUniqueOrThrow
   */
  export type instructorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * Filter, which instructors to fetch.
     */
    where: instructorsWhereUniqueInput
  }

  /**
   * instructors findFirst
   */
  export type instructorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * Filter, which instructors to fetch.
     */
    where?: instructorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instructors to fetch.
     */
    orderBy?: instructorsOrderByWithRelationInput | instructorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for instructors.
     */
    cursor?: instructorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of instructors.
     */
    distinct?: InstructorsScalarFieldEnum | InstructorsScalarFieldEnum[]
  }

  /**
   * instructors findFirstOrThrow
   */
  export type instructorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * Filter, which instructors to fetch.
     */
    where?: instructorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instructors to fetch.
     */
    orderBy?: instructorsOrderByWithRelationInput | instructorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for instructors.
     */
    cursor?: instructorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of instructors.
     */
    distinct?: InstructorsScalarFieldEnum | InstructorsScalarFieldEnum[]
  }

  /**
   * instructors findMany
   */
  export type instructorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * Filter, which instructors to fetch.
     */
    where?: instructorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of instructors to fetch.
     */
    orderBy?: instructorsOrderByWithRelationInput | instructorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing instructors.
     */
    cursor?: instructorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` instructors.
     */
    skip?: number
    distinct?: InstructorsScalarFieldEnum | InstructorsScalarFieldEnum[]
  }

  /**
   * instructors create
   */
  export type instructorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * The data needed to create a instructors.
     */
    data: XOR<instructorsCreateInput, instructorsUncheckedCreateInput>
  }

  /**
   * instructors createMany
   */
  export type instructorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many instructors.
     */
    data: instructorsCreateManyInput | instructorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * instructors createManyAndReturn
   */
  export type instructorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * The data used to create many instructors.
     */
    data: instructorsCreateManyInput | instructorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * instructors update
   */
  export type instructorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * The data needed to update a instructors.
     */
    data: XOR<instructorsUpdateInput, instructorsUncheckedUpdateInput>
    /**
     * Choose, which instructors to update.
     */
    where: instructorsWhereUniqueInput
  }

  /**
   * instructors updateMany
   */
  export type instructorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update instructors.
     */
    data: XOR<instructorsUpdateManyMutationInput, instructorsUncheckedUpdateManyInput>
    /**
     * Filter which instructors to update
     */
    where?: instructorsWhereInput
    /**
     * Limit how many instructors to update.
     */
    limit?: number
  }

  /**
   * instructors updateManyAndReturn
   */
  export type instructorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * The data used to update instructors.
     */
    data: XOR<instructorsUpdateManyMutationInput, instructorsUncheckedUpdateManyInput>
    /**
     * Filter which instructors to update
     */
    where?: instructorsWhereInput
    /**
     * Limit how many instructors to update.
     */
    limit?: number
  }

  /**
   * instructors upsert
   */
  export type instructorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * The filter to search for the instructors to update in case it exists.
     */
    where: instructorsWhereUniqueInput
    /**
     * In case the instructors found by the `where` argument doesn't exist, create a new instructors with this data.
     */
    create: XOR<instructorsCreateInput, instructorsUncheckedCreateInput>
    /**
     * In case the instructors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<instructorsUpdateInput, instructorsUncheckedUpdateInput>
  }

  /**
   * instructors delete
   */
  export type instructorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
    /**
     * Filter which instructors to delete.
     */
    where: instructorsWhereUniqueInput
  }

  /**
   * instructors deleteMany
   */
  export type instructorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which instructors to delete
     */
    where?: instructorsWhereInput
    /**
     * Limit how many instructors to delete.
     */
    limit?: number
  }

  /**
   * instructors.activities
   */
  export type instructors$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    where?: activitiesWhereInput
    orderBy?: activitiesOrderByWithRelationInput | activitiesOrderByWithRelationInput[]
    cursor?: activitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * instructors without action
   */
  export type instructorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instructors
     */
    select?: instructorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the instructors
     */
    omit?: instructorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: instructorsInclude<ExtArgs> | null
  }


  /**
   * Model activityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogAvgAggregateOutputType = {
    id: number | null
    activityPlanId: number | null
    participantId: number | null
  }

  export type ActivityLogSumAggregateOutputType = {
    id: number | null
    activityPlanId: number | null
    participantId: number | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: number | null
    activityPlanId: number | null
    participantId: number | null
    status: string | null
    date: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: number | null
    activityPlanId: number | null
    participantId: number | null
    status: string | null
    date: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    activityPlanId: number
    participantId: number
    status: number
    date: number
    _all: number
  }


  export type ActivityLogAvgAggregateInputType = {
    id?: true
    activityPlanId?: true
    participantId?: true
  }

  export type ActivityLogSumAggregateInputType = {
    id?: true
    activityPlanId?: true
    participantId?: true
  }

  export type ActivityLogMinAggregateInputType = {
    id?: true
    activityPlanId?: true
    participantId?: true
    status?: true
    date?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    activityPlanId?: true
    participantId?: true
    status?: true
    date?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    activityPlanId?: true
    participantId?: true
    status?: true
    date?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activityLog to aggregate.
     */
    where?: activityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activityLogs to fetch.
     */
    orderBy?: activityLogOrderByWithRelationInput | activityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: activityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned activityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type activityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activityLogWhereInput
    orderBy?: activityLogOrderByWithAggregationInput | activityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: activityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _avg?: ActivityLogAvgAggregateInputType
    _sum?: ActivityLogSumAggregateInputType
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: number
    activityPlanId: number
    participantId: number
    status: string
    date: Date
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends activityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type activityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityPlanId?: boolean
    participantId?: boolean
    status?: boolean
    date?: boolean
    activityPlanning?: boolean | activityPlanningDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type activityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityPlanId?: boolean
    participantId?: boolean
    status?: boolean
    date?: boolean
    activityPlanning?: boolean | activityPlanningDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type activityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityPlanId?: boolean
    participantId?: boolean
    status?: boolean
    date?: boolean
    activityPlanning?: boolean | activityPlanningDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type activityLogSelectScalar = {
    id?: boolean
    activityPlanId?: boolean
    participantId?: boolean
    status?: boolean
    date?: boolean
  }

  export type activityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activityPlanId" | "participantId" | "status" | "date", ExtArgs["result"]["activityLog"]>
  export type activityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityPlanning?: boolean | activityPlanningDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type activityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityPlanning?: boolean | activityPlanningDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type activityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityPlanning?: boolean | activityPlanningDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $activityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "activityLog"
    objects: {
      activityPlanning: Prisma.$activityPlanningPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      activityPlanId: number
      participantId: number
      status: string
      date: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type activityLogGetPayload<S extends boolean | null | undefined | activityLogDefaultArgs> = $Result.GetResult<Prisma.$activityLogPayload, S>

  type activityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<activityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface activityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['activityLog'], meta: { name: 'activityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {activityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends activityLogFindUniqueArgs>(args: SelectSubset<T, activityLogFindUniqueArgs<ExtArgs>>): Prisma__activityLogClient<$Result.GetResult<Prisma.$activityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {activityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends activityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, activityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__activityLogClient<$Result.GetResult<Prisma.$activityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends activityLogFindFirstArgs>(args?: SelectSubset<T, activityLogFindFirstArgs<ExtArgs>>): Prisma__activityLogClient<$Result.GetResult<Prisma.$activityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends activityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, activityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__activityLogClient<$Result.GetResult<Prisma.$activityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends activityLogFindManyArgs>(args?: SelectSubset<T, activityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {activityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends activityLogCreateArgs>(args: SelectSubset<T, activityLogCreateArgs<ExtArgs>>): Prisma__activityLogClient<$Result.GetResult<Prisma.$activityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {activityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends activityLogCreateManyArgs>(args?: SelectSubset<T, activityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {activityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends activityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, activityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {activityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends activityLogDeleteArgs>(args: SelectSubset<T, activityLogDeleteArgs<ExtArgs>>): Prisma__activityLogClient<$Result.GetResult<Prisma.$activityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {activityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends activityLogUpdateArgs>(args: SelectSubset<T, activityLogUpdateArgs<ExtArgs>>): Prisma__activityLogClient<$Result.GetResult<Prisma.$activityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {activityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends activityLogDeleteManyArgs>(args?: SelectSubset<T, activityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends activityLogUpdateManyArgs>(args: SelectSubset<T, activityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {activityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends activityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, activityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {activityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends activityLogUpsertArgs>(args: SelectSubset<T, activityLogUpsertArgs<ExtArgs>>): Prisma__activityLogClient<$Result.GetResult<Prisma.$activityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends activityLogCountArgs>(
      args?: Subset<T, activityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityLogGroupByArgs} args - Group by arguments.
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
      T extends activityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: activityLogGroupByArgs['orderBy'] }
        : { orderBy?: activityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, activityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the activityLog model
   */
  readonly fields: activityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for activityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__activityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activityPlanning<T extends activityPlanningDefaultArgs<ExtArgs> = {}>(args?: Subset<T, activityPlanningDefaultArgs<ExtArgs>>): Prisma__activityPlanningClient<$Result.GetResult<Prisma.$activityPlanningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the activityLog model
   */
  interface activityLogFieldRefs {
    readonly id: FieldRef<"activityLog", 'Int'>
    readonly activityPlanId: FieldRef<"activityLog", 'Int'>
    readonly participantId: FieldRef<"activityLog", 'Int'>
    readonly status: FieldRef<"activityLog", 'String'>
    readonly date: FieldRef<"activityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * activityLog findUnique
   */
  export type activityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityLog
     */
    select?: activityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityLog
     */
    omit?: activityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityLogInclude<ExtArgs> | null
    /**
     * Filter, which activityLog to fetch.
     */
    where: activityLogWhereUniqueInput
  }

  /**
   * activityLog findUniqueOrThrow
   */
  export type activityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityLog
     */
    select?: activityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityLog
     */
    omit?: activityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityLogInclude<ExtArgs> | null
    /**
     * Filter, which activityLog to fetch.
     */
    where: activityLogWhereUniqueInput
  }

  /**
   * activityLog findFirst
   */
  export type activityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityLog
     */
    select?: activityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityLog
     */
    omit?: activityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityLogInclude<ExtArgs> | null
    /**
     * Filter, which activityLog to fetch.
     */
    where?: activityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activityLogs to fetch.
     */
    orderBy?: activityLogOrderByWithRelationInput | activityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activityLogs.
     */
    cursor?: activityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * activityLog findFirstOrThrow
   */
  export type activityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityLog
     */
    select?: activityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityLog
     */
    omit?: activityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityLogInclude<ExtArgs> | null
    /**
     * Filter, which activityLog to fetch.
     */
    where?: activityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activityLogs to fetch.
     */
    orderBy?: activityLogOrderByWithRelationInput | activityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activityLogs.
     */
    cursor?: activityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * activityLog findMany
   */
  export type activityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityLog
     */
    select?: activityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityLog
     */
    omit?: activityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityLogInclude<ExtArgs> | null
    /**
     * Filter, which activityLogs to fetch.
     */
    where?: activityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activityLogs to fetch.
     */
    orderBy?: activityLogOrderByWithRelationInput | activityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing activityLogs.
     */
    cursor?: activityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * activityLog create
   */
  export type activityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityLog
     */
    select?: activityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityLog
     */
    omit?: activityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a activityLog.
     */
    data: XOR<activityLogCreateInput, activityLogUncheckedCreateInput>
  }

  /**
   * activityLog createMany
   */
  export type activityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many activityLogs.
     */
    data: activityLogCreateManyInput | activityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * activityLog createManyAndReturn
   */
  export type activityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityLog
     */
    select?: activityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activityLog
     */
    omit?: activityLogOmit<ExtArgs> | null
    /**
     * The data used to create many activityLogs.
     */
    data: activityLogCreateManyInput | activityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * activityLog update
   */
  export type activityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityLog
     */
    select?: activityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityLog
     */
    omit?: activityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a activityLog.
     */
    data: XOR<activityLogUpdateInput, activityLogUncheckedUpdateInput>
    /**
     * Choose, which activityLog to update.
     */
    where: activityLogWhereUniqueInput
  }

  /**
   * activityLog updateMany
   */
  export type activityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update activityLogs.
     */
    data: XOR<activityLogUpdateManyMutationInput, activityLogUncheckedUpdateManyInput>
    /**
     * Filter which activityLogs to update
     */
    where?: activityLogWhereInput
    /**
     * Limit how many activityLogs to update.
     */
    limit?: number
  }

  /**
   * activityLog updateManyAndReturn
   */
  export type activityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityLog
     */
    select?: activityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activityLog
     */
    omit?: activityLogOmit<ExtArgs> | null
    /**
     * The data used to update activityLogs.
     */
    data: XOR<activityLogUpdateManyMutationInput, activityLogUncheckedUpdateManyInput>
    /**
     * Filter which activityLogs to update
     */
    where?: activityLogWhereInput
    /**
     * Limit how many activityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * activityLog upsert
   */
  export type activityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityLog
     */
    select?: activityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityLog
     */
    omit?: activityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the activityLog to update in case it exists.
     */
    where: activityLogWhereUniqueInput
    /**
     * In case the activityLog found by the `where` argument doesn't exist, create a new activityLog with this data.
     */
    create: XOR<activityLogCreateInput, activityLogUncheckedCreateInput>
    /**
     * In case the activityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<activityLogUpdateInput, activityLogUncheckedUpdateInput>
  }

  /**
   * activityLog delete
   */
  export type activityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityLog
     */
    select?: activityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityLog
     */
    omit?: activityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityLogInclude<ExtArgs> | null
    /**
     * Filter which activityLog to delete.
     */
    where: activityLogWhereUniqueInput
  }

  /**
   * activityLog deleteMany
   */
  export type activityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activityLogs to delete
     */
    where?: activityLogWhereInput
    /**
     * Limit how many activityLogs to delete.
     */
    limit?: number
  }

  /**
   * activityLog without action
   */
  export type activityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityLog
     */
    select?: activityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityLog
     */
    omit?: activityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityLogInclude<ExtArgs> | null
  }


  /**
   * Model activityPlanning
   */

  export type AggregateActivityPlanning = {
    _count: ActivityPlanningCountAggregateOutputType | null
    _avg: ActivityPlanningAvgAggregateOutputType | null
    _sum: ActivityPlanningSumAggregateOutputType | null
    _min: ActivityPlanningMinAggregateOutputType | null
    _max: ActivityPlanningMaxAggregateOutputType | null
  }

  export type ActivityPlanningAvgAggregateOutputType = {
    id: number | null
    activityId: number | null
  }

  export type ActivityPlanningSumAggregateOutputType = {
    id: number | null
    activityId: number | null
  }

  export type ActivityPlanningMinAggregateOutputType = {
    id: number | null
    activityId: number | null
    day: string | null
    startTime: Date | null
    active: boolean | null
    endTime: Date | null
  }

  export type ActivityPlanningMaxAggregateOutputType = {
    id: number | null
    activityId: number | null
    day: string | null
    startTime: Date | null
    active: boolean | null
    endTime: Date | null
  }

  export type ActivityPlanningCountAggregateOutputType = {
    id: number
    activityId: number
    day: number
    startTime: number
    active: number
    endTime: number
    _all: number
  }


  export type ActivityPlanningAvgAggregateInputType = {
    id?: true
    activityId?: true
  }

  export type ActivityPlanningSumAggregateInputType = {
    id?: true
    activityId?: true
  }

  export type ActivityPlanningMinAggregateInputType = {
    id?: true
    activityId?: true
    day?: true
    startTime?: true
    active?: true
    endTime?: true
  }

  export type ActivityPlanningMaxAggregateInputType = {
    id?: true
    activityId?: true
    day?: true
    startTime?: true
    active?: true
    endTime?: true
  }

  export type ActivityPlanningCountAggregateInputType = {
    id?: true
    activityId?: true
    day?: true
    startTime?: true
    active?: true
    endTime?: true
    _all?: true
  }

  export type ActivityPlanningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activityPlanning to aggregate.
     */
    where?: activityPlanningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activityPlannings to fetch.
     */
    orderBy?: activityPlanningOrderByWithRelationInput | activityPlanningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: activityPlanningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activityPlannings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activityPlannings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned activityPlannings
    **/
    _count?: true | ActivityPlanningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityPlanningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityPlanningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityPlanningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityPlanningMaxAggregateInputType
  }

  export type GetActivityPlanningAggregateType<T extends ActivityPlanningAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityPlanning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityPlanning[P]>
      : GetScalarType<T[P], AggregateActivityPlanning[P]>
  }




  export type activityPlanningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activityPlanningWhereInput
    orderBy?: activityPlanningOrderByWithAggregationInput | activityPlanningOrderByWithAggregationInput[]
    by: ActivityPlanningScalarFieldEnum[] | ActivityPlanningScalarFieldEnum
    having?: activityPlanningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityPlanningCountAggregateInputType | true
    _avg?: ActivityPlanningAvgAggregateInputType
    _sum?: ActivityPlanningSumAggregateInputType
    _min?: ActivityPlanningMinAggregateInputType
    _max?: ActivityPlanningMaxAggregateInputType
  }

  export type ActivityPlanningGroupByOutputType = {
    id: number
    activityId: number
    day: string
    startTime: Date
    active: boolean | null
    endTime: Date
    _count: ActivityPlanningCountAggregateOutputType | null
    _avg: ActivityPlanningAvgAggregateOutputType | null
    _sum: ActivityPlanningSumAggregateOutputType | null
    _min: ActivityPlanningMinAggregateOutputType | null
    _max: ActivityPlanningMaxAggregateOutputType | null
  }

  type GetActivityPlanningGroupByPayload<T extends activityPlanningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityPlanningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityPlanningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityPlanningGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityPlanningGroupByOutputType[P]>
        }
      >
    >


  export type activityPlanningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityId?: boolean
    day?: boolean
    startTime?: boolean
    active?: boolean
    endTime?: boolean
    activityCancellation?: boolean | activityPlanning$activityCancellationArgs<ExtArgs>
    activityLog?: boolean | activityPlanning$activityLogArgs<ExtArgs>
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
    _count?: boolean | ActivityPlanningCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityPlanning"]>

  export type activityPlanningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityId?: boolean
    day?: boolean
    startTime?: boolean
    active?: boolean
    endTime?: boolean
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityPlanning"]>

  export type activityPlanningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityId?: boolean
    day?: boolean
    startTime?: boolean
    active?: boolean
    endTime?: boolean
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityPlanning"]>

  export type activityPlanningSelectScalar = {
    id?: boolean
    activityId?: boolean
    day?: boolean
    startTime?: boolean
    active?: boolean
    endTime?: boolean
  }

  export type activityPlanningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activityId" | "day" | "startTime" | "active" | "endTime", ExtArgs["result"]["activityPlanning"]>
  export type activityPlanningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityCancellation?: boolean | activityPlanning$activityCancellationArgs<ExtArgs>
    activityLog?: boolean | activityPlanning$activityLogArgs<ExtArgs>
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
    _count?: boolean | ActivityPlanningCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type activityPlanningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
  }
  export type activityPlanningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | activitiesDefaultArgs<ExtArgs>
  }

  export type $activityPlanningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "activityPlanning"
    objects: {
      activityCancellation: Prisma.$activityCancellationPayload<ExtArgs>[]
      activityLog: Prisma.$activityLogPayload<ExtArgs>[]
      activities: Prisma.$activitiesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      activityId: number
      day: string
      startTime: Date
      active: boolean | null
      endTime: Date
    }, ExtArgs["result"]["activityPlanning"]>
    composites: {}
  }

  type activityPlanningGetPayload<S extends boolean | null | undefined | activityPlanningDefaultArgs> = $Result.GetResult<Prisma.$activityPlanningPayload, S>

  type activityPlanningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<activityPlanningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityPlanningCountAggregateInputType | true
    }

  export interface activityPlanningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['activityPlanning'], meta: { name: 'activityPlanning' } }
    /**
     * Find zero or one ActivityPlanning that matches the filter.
     * @param {activityPlanningFindUniqueArgs} args - Arguments to find a ActivityPlanning
     * @example
     * // Get one ActivityPlanning
     * const activityPlanning = await prisma.activityPlanning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends activityPlanningFindUniqueArgs>(args: SelectSubset<T, activityPlanningFindUniqueArgs<ExtArgs>>): Prisma__activityPlanningClient<$Result.GetResult<Prisma.$activityPlanningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityPlanning that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {activityPlanningFindUniqueOrThrowArgs} args - Arguments to find a ActivityPlanning
     * @example
     * // Get one ActivityPlanning
     * const activityPlanning = await prisma.activityPlanning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends activityPlanningFindUniqueOrThrowArgs>(args: SelectSubset<T, activityPlanningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__activityPlanningClient<$Result.GetResult<Prisma.$activityPlanningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityPlanning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityPlanningFindFirstArgs} args - Arguments to find a ActivityPlanning
     * @example
     * // Get one ActivityPlanning
     * const activityPlanning = await prisma.activityPlanning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends activityPlanningFindFirstArgs>(args?: SelectSubset<T, activityPlanningFindFirstArgs<ExtArgs>>): Prisma__activityPlanningClient<$Result.GetResult<Prisma.$activityPlanningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityPlanning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityPlanningFindFirstOrThrowArgs} args - Arguments to find a ActivityPlanning
     * @example
     * // Get one ActivityPlanning
     * const activityPlanning = await prisma.activityPlanning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends activityPlanningFindFirstOrThrowArgs>(args?: SelectSubset<T, activityPlanningFindFirstOrThrowArgs<ExtArgs>>): Prisma__activityPlanningClient<$Result.GetResult<Prisma.$activityPlanningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityPlannings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityPlanningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityPlannings
     * const activityPlannings = await prisma.activityPlanning.findMany()
     * 
     * // Get first 10 ActivityPlannings
     * const activityPlannings = await prisma.activityPlanning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityPlanningWithIdOnly = await prisma.activityPlanning.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends activityPlanningFindManyArgs>(args?: SelectSubset<T, activityPlanningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityPlanningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityPlanning.
     * @param {activityPlanningCreateArgs} args - Arguments to create a ActivityPlanning.
     * @example
     * // Create one ActivityPlanning
     * const ActivityPlanning = await prisma.activityPlanning.create({
     *   data: {
     *     // ... data to create a ActivityPlanning
     *   }
     * })
     * 
     */
    create<T extends activityPlanningCreateArgs>(args: SelectSubset<T, activityPlanningCreateArgs<ExtArgs>>): Prisma__activityPlanningClient<$Result.GetResult<Prisma.$activityPlanningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityPlannings.
     * @param {activityPlanningCreateManyArgs} args - Arguments to create many ActivityPlannings.
     * @example
     * // Create many ActivityPlannings
     * const activityPlanning = await prisma.activityPlanning.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends activityPlanningCreateManyArgs>(args?: SelectSubset<T, activityPlanningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityPlannings and returns the data saved in the database.
     * @param {activityPlanningCreateManyAndReturnArgs} args - Arguments to create many ActivityPlannings.
     * @example
     * // Create many ActivityPlannings
     * const activityPlanning = await prisma.activityPlanning.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityPlannings and only return the `id`
     * const activityPlanningWithIdOnly = await prisma.activityPlanning.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends activityPlanningCreateManyAndReturnArgs>(args?: SelectSubset<T, activityPlanningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityPlanningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityPlanning.
     * @param {activityPlanningDeleteArgs} args - Arguments to delete one ActivityPlanning.
     * @example
     * // Delete one ActivityPlanning
     * const ActivityPlanning = await prisma.activityPlanning.delete({
     *   where: {
     *     // ... filter to delete one ActivityPlanning
     *   }
     * })
     * 
     */
    delete<T extends activityPlanningDeleteArgs>(args: SelectSubset<T, activityPlanningDeleteArgs<ExtArgs>>): Prisma__activityPlanningClient<$Result.GetResult<Prisma.$activityPlanningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityPlanning.
     * @param {activityPlanningUpdateArgs} args - Arguments to update one ActivityPlanning.
     * @example
     * // Update one ActivityPlanning
     * const activityPlanning = await prisma.activityPlanning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends activityPlanningUpdateArgs>(args: SelectSubset<T, activityPlanningUpdateArgs<ExtArgs>>): Prisma__activityPlanningClient<$Result.GetResult<Prisma.$activityPlanningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityPlannings.
     * @param {activityPlanningDeleteManyArgs} args - Arguments to filter ActivityPlannings to delete.
     * @example
     * // Delete a few ActivityPlannings
     * const { count } = await prisma.activityPlanning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends activityPlanningDeleteManyArgs>(args?: SelectSubset<T, activityPlanningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityPlannings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityPlanningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityPlannings
     * const activityPlanning = await prisma.activityPlanning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends activityPlanningUpdateManyArgs>(args: SelectSubset<T, activityPlanningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityPlannings and returns the data updated in the database.
     * @param {activityPlanningUpdateManyAndReturnArgs} args - Arguments to update many ActivityPlannings.
     * @example
     * // Update many ActivityPlannings
     * const activityPlanning = await prisma.activityPlanning.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityPlannings and only return the `id`
     * const activityPlanningWithIdOnly = await prisma.activityPlanning.updateManyAndReturn({
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
    updateManyAndReturn<T extends activityPlanningUpdateManyAndReturnArgs>(args: SelectSubset<T, activityPlanningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityPlanningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityPlanning.
     * @param {activityPlanningUpsertArgs} args - Arguments to update or create a ActivityPlanning.
     * @example
     * // Update or create a ActivityPlanning
     * const activityPlanning = await prisma.activityPlanning.upsert({
     *   create: {
     *     // ... data to create a ActivityPlanning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityPlanning we want to update
     *   }
     * })
     */
    upsert<T extends activityPlanningUpsertArgs>(args: SelectSubset<T, activityPlanningUpsertArgs<ExtArgs>>): Prisma__activityPlanningClient<$Result.GetResult<Prisma.$activityPlanningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityPlannings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityPlanningCountArgs} args - Arguments to filter ActivityPlannings to count.
     * @example
     * // Count the number of ActivityPlannings
     * const count = await prisma.activityPlanning.count({
     *   where: {
     *     // ... the filter for the ActivityPlannings we want to count
     *   }
     * })
    **/
    count<T extends activityPlanningCountArgs>(
      args?: Subset<T, activityPlanningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityPlanningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityPlanning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityPlanningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityPlanningAggregateArgs>(args: Subset<T, ActivityPlanningAggregateArgs>): Prisma.PrismaPromise<GetActivityPlanningAggregateType<T>>

    /**
     * Group by ActivityPlanning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityPlanningGroupByArgs} args - Group by arguments.
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
      T extends activityPlanningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: activityPlanningGroupByArgs['orderBy'] }
        : { orderBy?: activityPlanningGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, activityPlanningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityPlanningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the activityPlanning model
   */
  readonly fields: activityPlanningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for activityPlanning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__activityPlanningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activityCancellation<T extends activityPlanning$activityCancellationArgs<ExtArgs> = {}>(args?: Subset<T, activityPlanning$activityCancellationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityCancellationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLog<T extends activityPlanning$activityLogArgs<ExtArgs> = {}>(args?: Subset<T, activityPlanning$activityLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends activitiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, activitiesDefaultArgs<ExtArgs>>): Prisma__activitiesClient<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the activityPlanning model
   */
  interface activityPlanningFieldRefs {
    readonly id: FieldRef<"activityPlanning", 'Int'>
    readonly activityId: FieldRef<"activityPlanning", 'Int'>
    readonly day: FieldRef<"activityPlanning", 'String'>
    readonly startTime: FieldRef<"activityPlanning", 'DateTime'>
    readonly active: FieldRef<"activityPlanning", 'Boolean'>
    readonly endTime: FieldRef<"activityPlanning", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * activityPlanning findUnique
   */
  export type activityPlanningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityPlanning
     */
    select?: activityPlanningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityPlanning
     */
    omit?: activityPlanningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityPlanningInclude<ExtArgs> | null
    /**
     * Filter, which activityPlanning to fetch.
     */
    where: activityPlanningWhereUniqueInput
  }

  /**
   * activityPlanning findUniqueOrThrow
   */
  export type activityPlanningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityPlanning
     */
    select?: activityPlanningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityPlanning
     */
    omit?: activityPlanningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityPlanningInclude<ExtArgs> | null
    /**
     * Filter, which activityPlanning to fetch.
     */
    where: activityPlanningWhereUniqueInput
  }

  /**
   * activityPlanning findFirst
   */
  export type activityPlanningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityPlanning
     */
    select?: activityPlanningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityPlanning
     */
    omit?: activityPlanningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityPlanningInclude<ExtArgs> | null
    /**
     * Filter, which activityPlanning to fetch.
     */
    where?: activityPlanningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activityPlannings to fetch.
     */
    orderBy?: activityPlanningOrderByWithRelationInput | activityPlanningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activityPlannings.
     */
    cursor?: activityPlanningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activityPlannings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activityPlannings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activityPlannings.
     */
    distinct?: ActivityPlanningScalarFieldEnum | ActivityPlanningScalarFieldEnum[]
  }

  /**
   * activityPlanning findFirstOrThrow
   */
  export type activityPlanningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityPlanning
     */
    select?: activityPlanningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityPlanning
     */
    omit?: activityPlanningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityPlanningInclude<ExtArgs> | null
    /**
     * Filter, which activityPlanning to fetch.
     */
    where?: activityPlanningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activityPlannings to fetch.
     */
    orderBy?: activityPlanningOrderByWithRelationInput | activityPlanningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activityPlannings.
     */
    cursor?: activityPlanningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activityPlannings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activityPlannings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activityPlannings.
     */
    distinct?: ActivityPlanningScalarFieldEnum | ActivityPlanningScalarFieldEnum[]
  }

  /**
   * activityPlanning findMany
   */
  export type activityPlanningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityPlanning
     */
    select?: activityPlanningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityPlanning
     */
    omit?: activityPlanningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityPlanningInclude<ExtArgs> | null
    /**
     * Filter, which activityPlannings to fetch.
     */
    where?: activityPlanningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activityPlannings to fetch.
     */
    orderBy?: activityPlanningOrderByWithRelationInput | activityPlanningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing activityPlannings.
     */
    cursor?: activityPlanningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activityPlannings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activityPlannings.
     */
    skip?: number
    distinct?: ActivityPlanningScalarFieldEnum | ActivityPlanningScalarFieldEnum[]
  }

  /**
   * activityPlanning create
   */
  export type activityPlanningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityPlanning
     */
    select?: activityPlanningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityPlanning
     */
    omit?: activityPlanningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityPlanningInclude<ExtArgs> | null
    /**
     * The data needed to create a activityPlanning.
     */
    data: XOR<activityPlanningCreateInput, activityPlanningUncheckedCreateInput>
  }

  /**
   * activityPlanning createMany
   */
  export type activityPlanningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many activityPlannings.
     */
    data: activityPlanningCreateManyInput | activityPlanningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * activityPlanning createManyAndReturn
   */
  export type activityPlanningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityPlanning
     */
    select?: activityPlanningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activityPlanning
     */
    omit?: activityPlanningOmit<ExtArgs> | null
    /**
     * The data used to create many activityPlannings.
     */
    data: activityPlanningCreateManyInput | activityPlanningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityPlanningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * activityPlanning update
   */
  export type activityPlanningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityPlanning
     */
    select?: activityPlanningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityPlanning
     */
    omit?: activityPlanningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityPlanningInclude<ExtArgs> | null
    /**
     * The data needed to update a activityPlanning.
     */
    data: XOR<activityPlanningUpdateInput, activityPlanningUncheckedUpdateInput>
    /**
     * Choose, which activityPlanning to update.
     */
    where: activityPlanningWhereUniqueInput
  }

  /**
   * activityPlanning updateMany
   */
  export type activityPlanningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update activityPlannings.
     */
    data: XOR<activityPlanningUpdateManyMutationInput, activityPlanningUncheckedUpdateManyInput>
    /**
     * Filter which activityPlannings to update
     */
    where?: activityPlanningWhereInput
    /**
     * Limit how many activityPlannings to update.
     */
    limit?: number
  }

  /**
   * activityPlanning updateManyAndReturn
   */
  export type activityPlanningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityPlanning
     */
    select?: activityPlanningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activityPlanning
     */
    omit?: activityPlanningOmit<ExtArgs> | null
    /**
     * The data used to update activityPlannings.
     */
    data: XOR<activityPlanningUpdateManyMutationInput, activityPlanningUncheckedUpdateManyInput>
    /**
     * Filter which activityPlannings to update
     */
    where?: activityPlanningWhereInput
    /**
     * Limit how many activityPlannings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityPlanningIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * activityPlanning upsert
   */
  export type activityPlanningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityPlanning
     */
    select?: activityPlanningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityPlanning
     */
    omit?: activityPlanningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityPlanningInclude<ExtArgs> | null
    /**
     * The filter to search for the activityPlanning to update in case it exists.
     */
    where: activityPlanningWhereUniqueInput
    /**
     * In case the activityPlanning found by the `where` argument doesn't exist, create a new activityPlanning with this data.
     */
    create: XOR<activityPlanningCreateInput, activityPlanningUncheckedCreateInput>
    /**
     * In case the activityPlanning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<activityPlanningUpdateInput, activityPlanningUncheckedUpdateInput>
  }

  /**
   * activityPlanning delete
   */
  export type activityPlanningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityPlanning
     */
    select?: activityPlanningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityPlanning
     */
    omit?: activityPlanningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityPlanningInclude<ExtArgs> | null
    /**
     * Filter which activityPlanning to delete.
     */
    where: activityPlanningWhereUniqueInput
  }

  /**
   * activityPlanning deleteMany
   */
  export type activityPlanningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activityPlannings to delete
     */
    where?: activityPlanningWhereInput
    /**
     * Limit how many activityPlannings to delete.
     */
    limit?: number
  }

  /**
   * activityPlanning.activityCancellation
   */
  export type activityPlanning$activityCancellationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityCancellation
     */
    select?: activityCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityCancellation
     */
    omit?: activityCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityCancellationInclude<ExtArgs> | null
    where?: activityCancellationWhereInput
    orderBy?: activityCancellationOrderByWithRelationInput | activityCancellationOrderByWithRelationInput[]
    cursor?: activityCancellationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityCancellationScalarFieldEnum | ActivityCancellationScalarFieldEnum[]
  }

  /**
   * activityPlanning.activityLog
   */
  export type activityPlanning$activityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityLog
     */
    select?: activityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityLog
     */
    omit?: activityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityLogInclude<ExtArgs> | null
    where?: activityLogWhereInput
    orderBy?: activityLogOrderByWithRelationInput | activityLogOrderByWithRelationInput[]
    cursor?: activityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * activityPlanning without action
   */
  export type activityPlanningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityPlanning
     */
    select?: activityPlanningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityPlanning
     */
    omit?: activityPlanningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityPlanningInclude<ExtArgs> | null
  }


  /**
   * Model activityCancellation
   */

  export type AggregateActivityCancellation = {
    _count: ActivityCancellationCountAggregateOutputType | null
    _avg: ActivityCancellationAvgAggregateOutputType | null
    _sum: ActivityCancellationSumAggregateOutputType | null
    _min: ActivityCancellationMinAggregateOutputType | null
    _max: ActivityCancellationMaxAggregateOutputType | null
  }

  export type ActivityCancellationAvgAggregateOutputType = {
    id: number | null
    activityPlanningId: number | null
  }

  export type ActivityCancellationSumAggregateOutputType = {
    id: number | null
    activityPlanningId: number | null
  }

  export type ActivityCancellationMinAggregateOutputType = {
    id: number | null
    activityPlanningId: number | null
    date: Date | null
    reason: string | null
  }

  export type ActivityCancellationMaxAggregateOutputType = {
    id: number | null
    activityPlanningId: number | null
    date: Date | null
    reason: string | null
  }

  export type ActivityCancellationCountAggregateOutputType = {
    id: number
    activityPlanningId: number
    date: number
    reason: number
    _all: number
  }


  export type ActivityCancellationAvgAggregateInputType = {
    id?: true
    activityPlanningId?: true
  }

  export type ActivityCancellationSumAggregateInputType = {
    id?: true
    activityPlanningId?: true
  }

  export type ActivityCancellationMinAggregateInputType = {
    id?: true
    activityPlanningId?: true
    date?: true
    reason?: true
  }

  export type ActivityCancellationMaxAggregateInputType = {
    id?: true
    activityPlanningId?: true
    date?: true
    reason?: true
  }

  export type ActivityCancellationCountAggregateInputType = {
    id?: true
    activityPlanningId?: true
    date?: true
    reason?: true
    _all?: true
  }

  export type ActivityCancellationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activityCancellation to aggregate.
     */
    where?: activityCancellationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activityCancellations to fetch.
     */
    orderBy?: activityCancellationOrderByWithRelationInput | activityCancellationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: activityCancellationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activityCancellations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activityCancellations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned activityCancellations
    **/
    _count?: true | ActivityCancellationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityCancellationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityCancellationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityCancellationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityCancellationMaxAggregateInputType
  }

  export type GetActivityCancellationAggregateType<T extends ActivityCancellationAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityCancellation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityCancellation[P]>
      : GetScalarType<T[P], AggregateActivityCancellation[P]>
  }




  export type activityCancellationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activityCancellationWhereInput
    orderBy?: activityCancellationOrderByWithAggregationInput | activityCancellationOrderByWithAggregationInput[]
    by: ActivityCancellationScalarFieldEnum[] | ActivityCancellationScalarFieldEnum
    having?: activityCancellationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCancellationCountAggregateInputType | true
    _avg?: ActivityCancellationAvgAggregateInputType
    _sum?: ActivityCancellationSumAggregateInputType
    _min?: ActivityCancellationMinAggregateInputType
    _max?: ActivityCancellationMaxAggregateInputType
  }

  export type ActivityCancellationGroupByOutputType = {
    id: number
    activityPlanningId: number | null
    date: Date
    reason: string | null
    _count: ActivityCancellationCountAggregateOutputType | null
    _avg: ActivityCancellationAvgAggregateOutputType | null
    _sum: ActivityCancellationSumAggregateOutputType | null
    _min: ActivityCancellationMinAggregateOutputType | null
    _max: ActivityCancellationMaxAggregateOutputType | null
  }

  type GetActivityCancellationGroupByPayload<T extends activityCancellationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityCancellationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityCancellationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityCancellationGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityCancellationGroupByOutputType[P]>
        }
      >
    >


  export type activityCancellationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityPlanningId?: boolean
    date?: boolean
    reason?: boolean
    activityPlanning?: boolean | activityCancellation$activityPlanningArgs<ExtArgs>
  }, ExtArgs["result"]["activityCancellation"]>

  export type activityCancellationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityPlanningId?: boolean
    date?: boolean
    reason?: boolean
    activityPlanning?: boolean | activityCancellation$activityPlanningArgs<ExtArgs>
  }, ExtArgs["result"]["activityCancellation"]>

  export type activityCancellationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activityPlanningId?: boolean
    date?: boolean
    reason?: boolean
    activityPlanning?: boolean | activityCancellation$activityPlanningArgs<ExtArgs>
  }, ExtArgs["result"]["activityCancellation"]>

  export type activityCancellationSelectScalar = {
    id?: boolean
    activityPlanningId?: boolean
    date?: boolean
    reason?: boolean
  }

  export type activityCancellationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activityPlanningId" | "date" | "reason", ExtArgs["result"]["activityCancellation"]>
  export type activityCancellationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityPlanning?: boolean | activityCancellation$activityPlanningArgs<ExtArgs>
  }
  export type activityCancellationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityPlanning?: boolean | activityCancellation$activityPlanningArgs<ExtArgs>
  }
  export type activityCancellationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activityPlanning?: boolean | activityCancellation$activityPlanningArgs<ExtArgs>
  }

  export type $activityCancellationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "activityCancellation"
    objects: {
      activityPlanning: Prisma.$activityPlanningPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      activityPlanningId: number | null
      date: Date
      reason: string | null
    }, ExtArgs["result"]["activityCancellation"]>
    composites: {}
  }

  type activityCancellationGetPayload<S extends boolean | null | undefined | activityCancellationDefaultArgs> = $Result.GetResult<Prisma.$activityCancellationPayload, S>

  type activityCancellationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<activityCancellationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCancellationCountAggregateInputType | true
    }

  export interface activityCancellationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['activityCancellation'], meta: { name: 'activityCancellation' } }
    /**
     * Find zero or one ActivityCancellation that matches the filter.
     * @param {activityCancellationFindUniqueArgs} args - Arguments to find a ActivityCancellation
     * @example
     * // Get one ActivityCancellation
     * const activityCancellation = await prisma.activityCancellation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends activityCancellationFindUniqueArgs>(args: SelectSubset<T, activityCancellationFindUniqueArgs<ExtArgs>>): Prisma__activityCancellationClient<$Result.GetResult<Prisma.$activityCancellationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityCancellation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {activityCancellationFindUniqueOrThrowArgs} args - Arguments to find a ActivityCancellation
     * @example
     * // Get one ActivityCancellation
     * const activityCancellation = await prisma.activityCancellation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends activityCancellationFindUniqueOrThrowArgs>(args: SelectSubset<T, activityCancellationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__activityCancellationClient<$Result.GetResult<Prisma.$activityCancellationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityCancellation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityCancellationFindFirstArgs} args - Arguments to find a ActivityCancellation
     * @example
     * // Get one ActivityCancellation
     * const activityCancellation = await prisma.activityCancellation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends activityCancellationFindFirstArgs>(args?: SelectSubset<T, activityCancellationFindFirstArgs<ExtArgs>>): Prisma__activityCancellationClient<$Result.GetResult<Prisma.$activityCancellationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityCancellation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityCancellationFindFirstOrThrowArgs} args - Arguments to find a ActivityCancellation
     * @example
     * // Get one ActivityCancellation
     * const activityCancellation = await prisma.activityCancellation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends activityCancellationFindFirstOrThrowArgs>(args?: SelectSubset<T, activityCancellationFindFirstOrThrowArgs<ExtArgs>>): Prisma__activityCancellationClient<$Result.GetResult<Prisma.$activityCancellationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityCancellations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityCancellationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityCancellations
     * const activityCancellations = await prisma.activityCancellation.findMany()
     * 
     * // Get first 10 ActivityCancellations
     * const activityCancellations = await prisma.activityCancellation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityCancellationWithIdOnly = await prisma.activityCancellation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends activityCancellationFindManyArgs>(args?: SelectSubset<T, activityCancellationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityCancellationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityCancellation.
     * @param {activityCancellationCreateArgs} args - Arguments to create a ActivityCancellation.
     * @example
     * // Create one ActivityCancellation
     * const ActivityCancellation = await prisma.activityCancellation.create({
     *   data: {
     *     // ... data to create a ActivityCancellation
     *   }
     * })
     * 
     */
    create<T extends activityCancellationCreateArgs>(args: SelectSubset<T, activityCancellationCreateArgs<ExtArgs>>): Prisma__activityCancellationClient<$Result.GetResult<Prisma.$activityCancellationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityCancellations.
     * @param {activityCancellationCreateManyArgs} args - Arguments to create many ActivityCancellations.
     * @example
     * // Create many ActivityCancellations
     * const activityCancellation = await prisma.activityCancellation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends activityCancellationCreateManyArgs>(args?: SelectSubset<T, activityCancellationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityCancellations and returns the data saved in the database.
     * @param {activityCancellationCreateManyAndReturnArgs} args - Arguments to create many ActivityCancellations.
     * @example
     * // Create many ActivityCancellations
     * const activityCancellation = await prisma.activityCancellation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityCancellations and only return the `id`
     * const activityCancellationWithIdOnly = await prisma.activityCancellation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends activityCancellationCreateManyAndReturnArgs>(args?: SelectSubset<T, activityCancellationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityCancellationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityCancellation.
     * @param {activityCancellationDeleteArgs} args - Arguments to delete one ActivityCancellation.
     * @example
     * // Delete one ActivityCancellation
     * const ActivityCancellation = await prisma.activityCancellation.delete({
     *   where: {
     *     // ... filter to delete one ActivityCancellation
     *   }
     * })
     * 
     */
    delete<T extends activityCancellationDeleteArgs>(args: SelectSubset<T, activityCancellationDeleteArgs<ExtArgs>>): Prisma__activityCancellationClient<$Result.GetResult<Prisma.$activityCancellationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityCancellation.
     * @param {activityCancellationUpdateArgs} args - Arguments to update one ActivityCancellation.
     * @example
     * // Update one ActivityCancellation
     * const activityCancellation = await prisma.activityCancellation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends activityCancellationUpdateArgs>(args: SelectSubset<T, activityCancellationUpdateArgs<ExtArgs>>): Prisma__activityCancellationClient<$Result.GetResult<Prisma.$activityCancellationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityCancellations.
     * @param {activityCancellationDeleteManyArgs} args - Arguments to filter ActivityCancellations to delete.
     * @example
     * // Delete a few ActivityCancellations
     * const { count } = await prisma.activityCancellation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends activityCancellationDeleteManyArgs>(args?: SelectSubset<T, activityCancellationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityCancellations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityCancellationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityCancellations
     * const activityCancellation = await prisma.activityCancellation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends activityCancellationUpdateManyArgs>(args: SelectSubset<T, activityCancellationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityCancellations and returns the data updated in the database.
     * @param {activityCancellationUpdateManyAndReturnArgs} args - Arguments to update many ActivityCancellations.
     * @example
     * // Update many ActivityCancellations
     * const activityCancellation = await prisma.activityCancellation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityCancellations and only return the `id`
     * const activityCancellationWithIdOnly = await prisma.activityCancellation.updateManyAndReturn({
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
    updateManyAndReturn<T extends activityCancellationUpdateManyAndReturnArgs>(args: SelectSubset<T, activityCancellationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityCancellationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityCancellation.
     * @param {activityCancellationUpsertArgs} args - Arguments to update or create a ActivityCancellation.
     * @example
     * // Update or create a ActivityCancellation
     * const activityCancellation = await prisma.activityCancellation.upsert({
     *   create: {
     *     // ... data to create a ActivityCancellation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityCancellation we want to update
     *   }
     * })
     */
    upsert<T extends activityCancellationUpsertArgs>(args: SelectSubset<T, activityCancellationUpsertArgs<ExtArgs>>): Prisma__activityCancellationClient<$Result.GetResult<Prisma.$activityCancellationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityCancellations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityCancellationCountArgs} args - Arguments to filter ActivityCancellations to count.
     * @example
     * // Count the number of ActivityCancellations
     * const count = await prisma.activityCancellation.count({
     *   where: {
     *     // ... the filter for the ActivityCancellations we want to count
     *   }
     * })
    **/
    count<T extends activityCancellationCountArgs>(
      args?: Subset<T, activityCancellationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCancellationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityCancellation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCancellationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityCancellationAggregateArgs>(args: Subset<T, ActivityCancellationAggregateArgs>): Prisma.PrismaPromise<GetActivityCancellationAggregateType<T>>

    /**
     * Group by ActivityCancellation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityCancellationGroupByArgs} args - Group by arguments.
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
      T extends activityCancellationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: activityCancellationGroupByArgs['orderBy'] }
        : { orderBy?: activityCancellationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, activityCancellationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityCancellationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the activityCancellation model
   */
  readonly fields: activityCancellationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for activityCancellation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__activityCancellationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activityPlanning<T extends activityCancellation$activityPlanningArgs<ExtArgs> = {}>(args?: Subset<T, activityCancellation$activityPlanningArgs<ExtArgs>>): Prisma__activityPlanningClient<$Result.GetResult<Prisma.$activityPlanningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the activityCancellation model
   */
  interface activityCancellationFieldRefs {
    readonly id: FieldRef<"activityCancellation", 'Int'>
    readonly activityPlanningId: FieldRef<"activityCancellation", 'Int'>
    readonly date: FieldRef<"activityCancellation", 'DateTime'>
    readonly reason: FieldRef<"activityCancellation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * activityCancellation findUnique
   */
  export type activityCancellationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityCancellation
     */
    select?: activityCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityCancellation
     */
    omit?: activityCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityCancellationInclude<ExtArgs> | null
    /**
     * Filter, which activityCancellation to fetch.
     */
    where: activityCancellationWhereUniqueInput
  }

  /**
   * activityCancellation findUniqueOrThrow
   */
  export type activityCancellationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityCancellation
     */
    select?: activityCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityCancellation
     */
    omit?: activityCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityCancellationInclude<ExtArgs> | null
    /**
     * Filter, which activityCancellation to fetch.
     */
    where: activityCancellationWhereUniqueInput
  }

  /**
   * activityCancellation findFirst
   */
  export type activityCancellationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityCancellation
     */
    select?: activityCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityCancellation
     */
    omit?: activityCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityCancellationInclude<ExtArgs> | null
    /**
     * Filter, which activityCancellation to fetch.
     */
    where?: activityCancellationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activityCancellations to fetch.
     */
    orderBy?: activityCancellationOrderByWithRelationInput | activityCancellationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activityCancellations.
     */
    cursor?: activityCancellationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activityCancellations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activityCancellations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activityCancellations.
     */
    distinct?: ActivityCancellationScalarFieldEnum | ActivityCancellationScalarFieldEnum[]
  }

  /**
   * activityCancellation findFirstOrThrow
   */
  export type activityCancellationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityCancellation
     */
    select?: activityCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityCancellation
     */
    omit?: activityCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityCancellationInclude<ExtArgs> | null
    /**
     * Filter, which activityCancellation to fetch.
     */
    where?: activityCancellationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activityCancellations to fetch.
     */
    orderBy?: activityCancellationOrderByWithRelationInput | activityCancellationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activityCancellations.
     */
    cursor?: activityCancellationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activityCancellations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activityCancellations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activityCancellations.
     */
    distinct?: ActivityCancellationScalarFieldEnum | ActivityCancellationScalarFieldEnum[]
  }

  /**
   * activityCancellation findMany
   */
  export type activityCancellationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityCancellation
     */
    select?: activityCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityCancellation
     */
    omit?: activityCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityCancellationInclude<ExtArgs> | null
    /**
     * Filter, which activityCancellations to fetch.
     */
    where?: activityCancellationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activityCancellations to fetch.
     */
    orderBy?: activityCancellationOrderByWithRelationInput | activityCancellationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing activityCancellations.
     */
    cursor?: activityCancellationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activityCancellations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activityCancellations.
     */
    skip?: number
    distinct?: ActivityCancellationScalarFieldEnum | ActivityCancellationScalarFieldEnum[]
  }

  /**
   * activityCancellation create
   */
  export type activityCancellationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityCancellation
     */
    select?: activityCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityCancellation
     */
    omit?: activityCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityCancellationInclude<ExtArgs> | null
    /**
     * The data needed to create a activityCancellation.
     */
    data: XOR<activityCancellationCreateInput, activityCancellationUncheckedCreateInput>
  }

  /**
   * activityCancellation createMany
   */
  export type activityCancellationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many activityCancellations.
     */
    data: activityCancellationCreateManyInput | activityCancellationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * activityCancellation createManyAndReturn
   */
  export type activityCancellationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityCancellation
     */
    select?: activityCancellationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activityCancellation
     */
    omit?: activityCancellationOmit<ExtArgs> | null
    /**
     * The data used to create many activityCancellations.
     */
    data: activityCancellationCreateManyInput | activityCancellationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityCancellationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * activityCancellation update
   */
  export type activityCancellationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityCancellation
     */
    select?: activityCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityCancellation
     */
    omit?: activityCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityCancellationInclude<ExtArgs> | null
    /**
     * The data needed to update a activityCancellation.
     */
    data: XOR<activityCancellationUpdateInput, activityCancellationUncheckedUpdateInput>
    /**
     * Choose, which activityCancellation to update.
     */
    where: activityCancellationWhereUniqueInput
  }

  /**
   * activityCancellation updateMany
   */
  export type activityCancellationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update activityCancellations.
     */
    data: XOR<activityCancellationUpdateManyMutationInput, activityCancellationUncheckedUpdateManyInput>
    /**
     * Filter which activityCancellations to update
     */
    where?: activityCancellationWhereInput
    /**
     * Limit how many activityCancellations to update.
     */
    limit?: number
  }

  /**
   * activityCancellation updateManyAndReturn
   */
  export type activityCancellationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityCancellation
     */
    select?: activityCancellationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activityCancellation
     */
    omit?: activityCancellationOmit<ExtArgs> | null
    /**
     * The data used to update activityCancellations.
     */
    data: XOR<activityCancellationUpdateManyMutationInput, activityCancellationUncheckedUpdateManyInput>
    /**
     * Filter which activityCancellations to update
     */
    where?: activityCancellationWhereInput
    /**
     * Limit how many activityCancellations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityCancellationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * activityCancellation upsert
   */
  export type activityCancellationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityCancellation
     */
    select?: activityCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityCancellation
     */
    omit?: activityCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityCancellationInclude<ExtArgs> | null
    /**
     * The filter to search for the activityCancellation to update in case it exists.
     */
    where: activityCancellationWhereUniqueInput
    /**
     * In case the activityCancellation found by the `where` argument doesn't exist, create a new activityCancellation with this data.
     */
    create: XOR<activityCancellationCreateInput, activityCancellationUncheckedCreateInput>
    /**
     * In case the activityCancellation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<activityCancellationUpdateInput, activityCancellationUncheckedUpdateInput>
  }

  /**
   * activityCancellation delete
   */
  export type activityCancellationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityCancellation
     */
    select?: activityCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityCancellation
     */
    omit?: activityCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityCancellationInclude<ExtArgs> | null
    /**
     * Filter which activityCancellation to delete.
     */
    where: activityCancellationWhereUniqueInput
  }

  /**
   * activityCancellation deleteMany
   */
  export type activityCancellationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activityCancellations to delete
     */
    where?: activityCancellationWhereInput
    /**
     * Limit how many activityCancellations to delete.
     */
    limit?: number
  }

  /**
   * activityCancellation.activityPlanning
   */
  export type activityCancellation$activityPlanningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityPlanning
     */
    select?: activityPlanningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityPlanning
     */
    omit?: activityPlanningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityPlanningInclude<ExtArgs> | null
    where?: activityPlanningWhereInput
  }

  /**
   * activityCancellation without action
   */
  export type activityCancellationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activityCancellation
     */
    select?: activityCancellationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activityCancellation
     */
    omit?: activityCancellationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityCancellationInclude<ExtArgs> | null
  }


  /**
   * Model gym
   */

  export type AggregateGym = {
    _count: GymCountAggregateOutputType | null
    _avg: GymAvgAggregateOutputType | null
    _sum: GymSumAggregateOutputType | null
    _min: GymMinAggregateOutputType | null
    _max: GymMaxAggregateOutputType | null
  }

  export type GymAvgAggregateOutputType = {
    id: number | null
  }

  export type GymSumAggregateOutputType = {
    id: number | null
  }

  export type GymMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    phone: string | null
    email: string | null
  }

  export type GymMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    phone: string | null
    email: string | null
  }

  export type GymCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    email: number
    _all: number
  }


  export type GymAvgAggregateInputType = {
    id?: true
  }

  export type GymSumAggregateInputType = {
    id?: true
  }

  export type GymMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
  }

  export type GymMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
  }

  export type GymCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    _all?: true
  }

  export type GymAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gym to aggregate.
     */
    where?: gymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gyms to fetch.
     */
    orderBy?: gymOrderByWithRelationInput | gymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gyms
    **/
    _count?: true | GymCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymMaxAggregateInputType
  }

  export type GetGymAggregateType<T extends GymAggregateArgs> = {
        [P in keyof T & keyof AggregateGym]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGym[P]>
      : GetScalarType<T[P], AggregateGym[P]>
  }




  export type gymGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gymWhereInput
    orderBy?: gymOrderByWithAggregationInput | gymOrderByWithAggregationInput[]
    by: GymScalarFieldEnum[] | GymScalarFieldEnum
    having?: gymScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymCountAggregateInputType | true
    _avg?: GymAvgAggregateInputType
    _sum?: GymSumAggregateInputType
    _min?: GymMinAggregateInputType
    _max?: GymMaxAggregateInputType
  }

  export type GymGroupByOutputType = {
    id: number
    name: string
    address: string
    phone: string
    email: string
    _count: GymCountAggregateOutputType | null
    _avg: GymAvgAggregateOutputType | null
    _sum: GymSumAggregateOutputType | null
    _min: GymMinAggregateOutputType | null
    _max: GymMaxAggregateOutputType | null
  }

  type GetGymGroupByPayload<T extends gymGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GymGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymGroupByOutputType[P]>
            : GetScalarType<T[P], GymGroupByOutputType[P]>
        }
      >
    >


  export type gymSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    activities?: boolean | gym$activitiesArgs<ExtArgs>
    _count?: boolean | GymCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gym"]>

  export type gymSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
  }, ExtArgs["result"]["gym"]>

  export type gymSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
  }, ExtArgs["result"]["gym"]>

  export type gymSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
  }

  export type gymOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phone" | "email", ExtArgs["result"]["gym"]>
  export type gymInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | gym$activitiesArgs<ExtArgs>
    _count?: boolean | GymCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type gymIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type gymIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $gymPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gym"
    objects: {
      activities: Prisma.$activitiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      phone: string
      email: string
    }, ExtArgs["result"]["gym"]>
    composites: {}
  }

  type gymGetPayload<S extends boolean | null | undefined | gymDefaultArgs> = $Result.GetResult<Prisma.$gymPayload, S>

  type gymCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gymFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GymCountAggregateInputType | true
    }

  export interface gymDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gym'], meta: { name: 'gym' } }
    /**
     * Find zero or one Gym that matches the filter.
     * @param {gymFindUniqueArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gymFindUniqueArgs>(args: SelectSubset<T, gymFindUniqueArgs<ExtArgs>>): Prisma__gymClient<$Result.GetResult<Prisma.$gymPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gym that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gymFindUniqueOrThrowArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gymFindUniqueOrThrowArgs>(args: SelectSubset<T, gymFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gymClient<$Result.GetResult<Prisma.$gymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gym that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gymFindFirstArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gymFindFirstArgs>(args?: SelectSubset<T, gymFindFirstArgs<ExtArgs>>): Prisma__gymClient<$Result.GetResult<Prisma.$gymPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gym that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gymFindFirstOrThrowArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gymFindFirstOrThrowArgs>(args?: SelectSubset<T, gymFindFirstOrThrowArgs<ExtArgs>>): Prisma__gymClient<$Result.GetResult<Prisma.$gymPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gyms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gymFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gyms
     * const gyms = await prisma.gym.findMany()
     * 
     * // Get first 10 Gyms
     * const gyms = await prisma.gym.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymWithIdOnly = await prisma.gym.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gymFindManyArgs>(args?: SelectSubset<T, gymFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gym.
     * @param {gymCreateArgs} args - Arguments to create a Gym.
     * @example
     * // Create one Gym
     * const Gym = await prisma.gym.create({
     *   data: {
     *     // ... data to create a Gym
     *   }
     * })
     * 
     */
    create<T extends gymCreateArgs>(args: SelectSubset<T, gymCreateArgs<ExtArgs>>): Prisma__gymClient<$Result.GetResult<Prisma.$gymPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gyms.
     * @param {gymCreateManyArgs} args - Arguments to create many Gyms.
     * @example
     * // Create many Gyms
     * const gym = await prisma.gym.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gymCreateManyArgs>(args?: SelectSubset<T, gymCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gyms and returns the data saved in the database.
     * @param {gymCreateManyAndReturnArgs} args - Arguments to create many Gyms.
     * @example
     * // Create many Gyms
     * const gym = await prisma.gym.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gyms and only return the `id`
     * const gymWithIdOnly = await prisma.gym.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gymCreateManyAndReturnArgs>(args?: SelectSubset<T, gymCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gymPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gym.
     * @param {gymDeleteArgs} args - Arguments to delete one Gym.
     * @example
     * // Delete one Gym
     * const Gym = await prisma.gym.delete({
     *   where: {
     *     // ... filter to delete one Gym
     *   }
     * })
     * 
     */
    delete<T extends gymDeleteArgs>(args: SelectSubset<T, gymDeleteArgs<ExtArgs>>): Prisma__gymClient<$Result.GetResult<Prisma.$gymPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gym.
     * @param {gymUpdateArgs} args - Arguments to update one Gym.
     * @example
     * // Update one Gym
     * const gym = await prisma.gym.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gymUpdateArgs>(args: SelectSubset<T, gymUpdateArgs<ExtArgs>>): Prisma__gymClient<$Result.GetResult<Prisma.$gymPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gyms.
     * @param {gymDeleteManyArgs} args - Arguments to filter Gyms to delete.
     * @example
     * // Delete a few Gyms
     * const { count } = await prisma.gym.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gymDeleteManyArgs>(args?: SelectSubset<T, gymDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gymUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gyms
     * const gym = await prisma.gym.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gymUpdateManyArgs>(args: SelectSubset<T, gymUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gyms and returns the data updated in the database.
     * @param {gymUpdateManyAndReturnArgs} args - Arguments to update many Gyms.
     * @example
     * // Update many Gyms
     * const gym = await prisma.gym.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gyms and only return the `id`
     * const gymWithIdOnly = await prisma.gym.updateManyAndReturn({
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
    updateManyAndReturn<T extends gymUpdateManyAndReturnArgs>(args: SelectSubset<T, gymUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gymPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gym.
     * @param {gymUpsertArgs} args - Arguments to update or create a Gym.
     * @example
     * // Update or create a Gym
     * const gym = await prisma.gym.upsert({
     *   create: {
     *     // ... data to create a Gym
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gym we want to update
     *   }
     * })
     */
    upsert<T extends gymUpsertArgs>(args: SelectSubset<T, gymUpsertArgs<ExtArgs>>): Prisma__gymClient<$Result.GetResult<Prisma.$gymPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gymCountArgs} args - Arguments to filter Gyms to count.
     * @example
     * // Count the number of Gyms
     * const count = await prisma.gym.count({
     *   where: {
     *     // ... the filter for the Gyms we want to count
     *   }
     * })
    **/
    count<T extends gymCountArgs>(
      args?: Subset<T, gymCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GymAggregateArgs>(args: Subset<T, GymAggregateArgs>): Prisma.PrismaPromise<GetGymAggregateType<T>>

    /**
     * Group by Gym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gymGroupByArgs} args - Group by arguments.
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
      T extends gymGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gymGroupByArgs['orderBy'] }
        : { orderBy?: gymGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gymGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gym model
   */
  readonly fields: gymFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gym.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gymClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activities<T extends gym$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, gym$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activitiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the gym model
   */
  interface gymFieldRefs {
    readonly id: FieldRef<"gym", 'Int'>
    readonly name: FieldRef<"gym", 'String'>
    readonly address: FieldRef<"gym", 'String'>
    readonly phone: FieldRef<"gym", 'String'>
    readonly email: FieldRef<"gym", 'String'>
  }
    

  // Custom InputTypes
  /**
   * gym findUnique
   */
  export type gymFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gym
     */
    select?: gymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gym
     */
    omit?: gymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gymInclude<ExtArgs> | null
    /**
     * Filter, which gym to fetch.
     */
    where: gymWhereUniqueInput
  }

  /**
   * gym findUniqueOrThrow
   */
  export type gymFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gym
     */
    select?: gymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gym
     */
    omit?: gymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gymInclude<ExtArgs> | null
    /**
     * Filter, which gym to fetch.
     */
    where: gymWhereUniqueInput
  }

  /**
   * gym findFirst
   */
  export type gymFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gym
     */
    select?: gymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gym
     */
    omit?: gymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gymInclude<ExtArgs> | null
    /**
     * Filter, which gym to fetch.
     */
    where?: gymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gyms to fetch.
     */
    orderBy?: gymOrderByWithRelationInput | gymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gyms.
     */
    cursor?: gymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gyms.
     */
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }

  /**
   * gym findFirstOrThrow
   */
  export type gymFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gym
     */
    select?: gymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gym
     */
    omit?: gymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gymInclude<ExtArgs> | null
    /**
     * Filter, which gym to fetch.
     */
    where?: gymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gyms to fetch.
     */
    orderBy?: gymOrderByWithRelationInput | gymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gyms.
     */
    cursor?: gymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gyms.
     */
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }

  /**
   * gym findMany
   */
  export type gymFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gym
     */
    select?: gymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gym
     */
    omit?: gymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gymInclude<ExtArgs> | null
    /**
     * Filter, which gyms to fetch.
     */
    where?: gymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gyms to fetch.
     */
    orderBy?: gymOrderByWithRelationInput | gymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gyms.
     */
    cursor?: gymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gyms.
     */
    skip?: number
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }

  /**
   * gym create
   */
  export type gymCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gym
     */
    select?: gymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gym
     */
    omit?: gymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gymInclude<ExtArgs> | null
    /**
     * The data needed to create a gym.
     */
    data: XOR<gymCreateInput, gymUncheckedCreateInput>
  }

  /**
   * gym createMany
   */
  export type gymCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gyms.
     */
    data: gymCreateManyInput | gymCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gym createManyAndReturn
   */
  export type gymCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gym
     */
    select?: gymSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gym
     */
    omit?: gymOmit<ExtArgs> | null
    /**
     * The data used to create many gyms.
     */
    data: gymCreateManyInput | gymCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gym update
   */
  export type gymUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gym
     */
    select?: gymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gym
     */
    omit?: gymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gymInclude<ExtArgs> | null
    /**
     * The data needed to update a gym.
     */
    data: XOR<gymUpdateInput, gymUncheckedUpdateInput>
    /**
     * Choose, which gym to update.
     */
    where: gymWhereUniqueInput
  }

  /**
   * gym updateMany
   */
  export type gymUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gyms.
     */
    data: XOR<gymUpdateManyMutationInput, gymUncheckedUpdateManyInput>
    /**
     * Filter which gyms to update
     */
    where?: gymWhereInput
    /**
     * Limit how many gyms to update.
     */
    limit?: number
  }

  /**
   * gym updateManyAndReturn
   */
  export type gymUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gym
     */
    select?: gymSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gym
     */
    omit?: gymOmit<ExtArgs> | null
    /**
     * The data used to update gyms.
     */
    data: XOR<gymUpdateManyMutationInput, gymUncheckedUpdateManyInput>
    /**
     * Filter which gyms to update
     */
    where?: gymWhereInput
    /**
     * Limit how many gyms to update.
     */
    limit?: number
  }

  /**
   * gym upsert
   */
  export type gymUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gym
     */
    select?: gymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gym
     */
    omit?: gymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gymInclude<ExtArgs> | null
    /**
     * The filter to search for the gym to update in case it exists.
     */
    where: gymWhereUniqueInput
    /**
     * In case the gym found by the `where` argument doesn't exist, create a new gym with this data.
     */
    create: XOR<gymCreateInput, gymUncheckedCreateInput>
    /**
     * In case the gym was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gymUpdateInput, gymUncheckedUpdateInput>
  }

  /**
   * gym delete
   */
  export type gymDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gym
     */
    select?: gymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gym
     */
    omit?: gymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gymInclude<ExtArgs> | null
    /**
     * Filter which gym to delete.
     */
    where: gymWhereUniqueInput
  }

  /**
   * gym deleteMany
   */
  export type gymDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gyms to delete
     */
    where?: gymWhereInput
    /**
     * Limit how many gyms to delete.
     */
    limit?: number
  }

  /**
   * gym.activities
   */
  export type gym$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activities
     */
    select?: activitiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activities
     */
    omit?: activitiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activitiesInclude<ExtArgs> | null
    where?: activitiesWhereInput
    orderBy?: activitiesOrderByWithRelationInput | activitiesOrderByWithRelationInput[]
    cursor?: activitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }

  /**
   * gym without action
   */
  export type gymDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gym
     */
    select?: gymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gym
     */
    omit?: gymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gymInclude<ExtArgs> | null
  }


  /**
   * Model contactForm
   */

  export type AggregateContactForm = {
    _count: ContactFormCountAggregateOutputType | null
    _avg: ContactFormAvgAggregateOutputType | null
    _sum: ContactFormSumAggregateOutputType | null
    _min: ContactFormMinAggregateOutputType | null
    _max: ContactFormMaxAggregateOutputType | null
  }

  export type ContactFormAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactFormSumAggregateOutputType = {
    id: number | null
  }

  export type ContactFormMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    message: string | null
  }

  export type ContactFormMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    message: string | null
  }

  export type ContactFormCountAggregateOutputType = {
    id: number
    name: number
    email: number
    message: number
    _all: number
  }


  export type ContactFormAvgAggregateInputType = {
    id?: true
  }

  export type ContactFormSumAggregateInputType = {
    id?: true
  }

  export type ContactFormMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
  }

  export type ContactFormMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
  }

  export type ContactFormCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    _all?: true
  }

  export type ContactFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contactForm to aggregate.
     */
    where?: contactFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactForms to fetch.
     */
    orderBy?: contactFormOrderByWithRelationInput | contactFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contactFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contactForms
    **/
    _count?: true | ContactFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactFormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactFormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactFormMaxAggregateInputType
  }

  export type GetContactFormAggregateType<T extends ContactFormAggregateArgs> = {
        [P in keyof T & keyof AggregateContactForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactForm[P]>
      : GetScalarType<T[P], AggregateContactForm[P]>
  }




  export type contactFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactFormWhereInput
    orderBy?: contactFormOrderByWithAggregationInput | contactFormOrderByWithAggregationInput[]
    by: ContactFormScalarFieldEnum[] | ContactFormScalarFieldEnum
    having?: contactFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactFormCountAggregateInputType | true
    _avg?: ContactFormAvgAggregateInputType
    _sum?: ContactFormSumAggregateInputType
    _min?: ContactFormMinAggregateInputType
    _max?: ContactFormMaxAggregateInputType
  }

  export type ContactFormGroupByOutputType = {
    id: number
    name: string
    email: string
    message: string
    _count: ContactFormCountAggregateOutputType | null
    _avg: ContactFormAvgAggregateOutputType | null
    _sum: ContactFormSumAggregateOutputType | null
    _min: ContactFormMinAggregateOutputType | null
    _max: ContactFormMaxAggregateOutputType | null
  }

  type GetContactFormGroupByPayload<T extends contactFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactFormGroupByOutputType[P]>
            : GetScalarType<T[P], ContactFormGroupByOutputType[P]>
        }
      >
    >


  export type contactFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
  }, ExtArgs["result"]["contactForm"]>

  export type contactFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
  }, ExtArgs["result"]["contactForm"]>

  export type contactFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
  }, ExtArgs["result"]["contactForm"]>

  export type contactFormSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
  }

  export type contactFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "message", ExtArgs["result"]["contactForm"]>

  export type $contactFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contactForm"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      message: string
    }, ExtArgs["result"]["contactForm"]>
    composites: {}
  }

  type contactFormGetPayload<S extends boolean | null | undefined | contactFormDefaultArgs> = $Result.GetResult<Prisma.$contactFormPayload, S>

  type contactFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contactFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactFormCountAggregateInputType | true
    }

  export interface contactFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contactForm'], meta: { name: 'contactForm' } }
    /**
     * Find zero or one ContactForm that matches the filter.
     * @param {contactFormFindUniqueArgs} args - Arguments to find a ContactForm
     * @example
     * // Get one ContactForm
     * const contactForm = await prisma.contactForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contactFormFindUniqueArgs>(args: SelectSubset<T, contactFormFindUniqueArgs<ExtArgs>>): Prisma__contactFormClient<$Result.GetResult<Prisma.$contactFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contactFormFindUniqueOrThrowArgs} args - Arguments to find a ContactForm
     * @example
     * // Get one ContactForm
     * const contactForm = await prisma.contactForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contactFormFindUniqueOrThrowArgs>(args: SelectSubset<T, contactFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contactFormClient<$Result.GetResult<Prisma.$contactFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFormFindFirstArgs} args - Arguments to find a ContactForm
     * @example
     * // Get one ContactForm
     * const contactForm = await prisma.contactForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contactFormFindFirstArgs>(args?: SelectSubset<T, contactFormFindFirstArgs<ExtArgs>>): Prisma__contactFormClient<$Result.GetResult<Prisma.$contactFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFormFindFirstOrThrowArgs} args - Arguments to find a ContactForm
     * @example
     * // Get one ContactForm
     * const contactForm = await prisma.contactForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contactFormFindFirstOrThrowArgs>(args?: SelectSubset<T, contactFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__contactFormClient<$Result.GetResult<Prisma.$contactFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactForms
     * const contactForms = await prisma.contactForm.findMany()
     * 
     * // Get first 10 ContactForms
     * const contactForms = await prisma.contactForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactFormWithIdOnly = await prisma.contactForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contactFormFindManyArgs>(args?: SelectSubset<T, contactFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactForm.
     * @param {contactFormCreateArgs} args - Arguments to create a ContactForm.
     * @example
     * // Create one ContactForm
     * const ContactForm = await prisma.contactForm.create({
     *   data: {
     *     // ... data to create a ContactForm
     *   }
     * })
     * 
     */
    create<T extends contactFormCreateArgs>(args: SelectSubset<T, contactFormCreateArgs<ExtArgs>>): Prisma__contactFormClient<$Result.GetResult<Prisma.$contactFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactForms.
     * @param {contactFormCreateManyArgs} args - Arguments to create many ContactForms.
     * @example
     * // Create many ContactForms
     * const contactForm = await prisma.contactForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contactFormCreateManyArgs>(args?: SelectSubset<T, contactFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactForms and returns the data saved in the database.
     * @param {contactFormCreateManyAndReturnArgs} args - Arguments to create many ContactForms.
     * @example
     * // Create many ContactForms
     * const contactForm = await prisma.contactForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactForms and only return the `id`
     * const contactFormWithIdOnly = await prisma.contactForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends contactFormCreateManyAndReturnArgs>(args?: SelectSubset<T, contactFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactForm.
     * @param {contactFormDeleteArgs} args - Arguments to delete one ContactForm.
     * @example
     * // Delete one ContactForm
     * const ContactForm = await prisma.contactForm.delete({
     *   where: {
     *     // ... filter to delete one ContactForm
     *   }
     * })
     * 
     */
    delete<T extends contactFormDeleteArgs>(args: SelectSubset<T, contactFormDeleteArgs<ExtArgs>>): Prisma__contactFormClient<$Result.GetResult<Prisma.$contactFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactForm.
     * @param {contactFormUpdateArgs} args - Arguments to update one ContactForm.
     * @example
     * // Update one ContactForm
     * const contactForm = await prisma.contactForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contactFormUpdateArgs>(args: SelectSubset<T, contactFormUpdateArgs<ExtArgs>>): Prisma__contactFormClient<$Result.GetResult<Prisma.$contactFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactForms.
     * @param {contactFormDeleteManyArgs} args - Arguments to filter ContactForms to delete.
     * @example
     * // Delete a few ContactForms
     * const { count } = await prisma.contactForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contactFormDeleteManyArgs>(args?: SelectSubset<T, contactFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactForms
     * const contactForm = await prisma.contactForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contactFormUpdateManyArgs>(args: SelectSubset<T, contactFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactForms and returns the data updated in the database.
     * @param {contactFormUpdateManyAndReturnArgs} args - Arguments to update many ContactForms.
     * @example
     * // Update many ContactForms
     * const contactForm = await prisma.contactForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactForms and only return the `id`
     * const contactFormWithIdOnly = await prisma.contactForm.updateManyAndReturn({
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
    updateManyAndReturn<T extends contactFormUpdateManyAndReturnArgs>(args: SelectSubset<T, contactFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactForm.
     * @param {contactFormUpsertArgs} args - Arguments to update or create a ContactForm.
     * @example
     * // Update or create a ContactForm
     * const contactForm = await prisma.contactForm.upsert({
     *   create: {
     *     // ... data to create a ContactForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactForm we want to update
     *   }
     * })
     */
    upsert<T extends contactFormUpsertArgs>(args: SelectSubset<T, contactFormUpsertArgs<ExtArgs>>): Prisma__contactFormClient<$Result.GetResult<Prisma.$contactFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFormCountArgs} args - Arguments to filter ContactForms to count.
     * @example
     * // Count the number of ContactForms
     * const count = await prisma.contactForm.count({
     *   where: {
     *     // ... the filter for the ContactForms we want to count
     *   }
     * })
    **/
    count<T extends contactFormCountArgs>(
      args?: Subset<T, contactFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactFormAggregateArgs>(args: Subset<T, ContactFormAggregateArgs>): Prisma.PrismaPromise<GetContactFormAggregateType<T>>

    /**
     * Group by ContactForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFormGroupByArgs} args - Group by arguments.
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
      T extends contactFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contactFormGroupByArgs['orderBy'] }
        : { orderBy?: contactFormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, contactFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contactForm model
   */
  readonly fields: contactFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contactForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contactFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the contactForm model
   */
  interface contactFormFieldRefs {
    readonly id: FieldRef<"contactForm", 'Int'>
    readonly name: FieldRef<"contactForm", 'String'>
    readonly email: FieldRef<"contactForm", 'String'>
    readonly message: FieldRef<"contactForm", 'String'>
  }
    

  // Custom InputTypes
  /**
   * contactForm findUnique
   */
  export type contactFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactForm
     */
    select?: contactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactForm
     */
    omit?: contactFormOmit<ExtArgs> | null
    /**
     * Filter, which contactForm to fetch.
     */
    where: contactFormWhereUniqueInput
  }

  /**
   * contactForm findUniqueOrThrow
   */
  export type contactFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactForm
     */
    select?: contactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactForm
     */
    omit?: contactFormOmit<ExtArgs> | null
    /**
     * Filter, which contactForm to fetch.
     */
    where: contactFormWhereUniqueInput
  }

  /**
   * contactForm findFirst
   */
  export type contactFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactForm
     */
    select?: contactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactForm
     */
    omit?: contactFormOmit<ExtArgs> | null
    /**
     * Filter, which contactForm to fetch.
     */
    where?: contactFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactForms to fetch.
     */
    orderBy?: contactFormOrderByWithRelationInput | contactFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contactForms.
     */
    cursor?: contactFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contactForms.
     */
    distinct?: ContactFormScalarFieldEnum | ContactFormScalarFieldEnum[]
  }

  /**
   * contactForm findFirstOrThrow
   */
  export type contactFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactForm
     */
    select?: contactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactForm
     */
    omit?: contactFormOmit<ExtArgs> | null
    /**
     * Filter, which contactForm to fetch.
     */
    where?: contactFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactForms to fetch.
     */
    orderBy?: contactFormOrderByWithRelationInput | contactFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contactForms.
     */
    cursor?: contactFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contactForms.
     */
    distinct?: ContactFormScalarFieldEnum | ContactFormScalarFieldEnum[]
  }

  /**
   * contactForm findMany
   */
  export type contactFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactForm
     */
    select?: contactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactForm
     */
    omit?: contactFormOmit<ExtArgs> | null
    /**
     * Filter, which contactForms to fetch.
     */
    where?: contactFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactForms to fetch.
     */
    orderBy?: contactFormOrderByWithRelationInput | contactFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contactForms.
     */
    cursor?: contactFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactForms.
     */
    skip?: number
    distinct?: ContactFormScalarFieldEnum | ContactFormScalarFieldEnum[]
  }

  /**
   * contactForm create
   */
  export type contactFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactForm
     */
    select?: contactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactForm
     */
    omit?: contactFormOmit<ExtArgs> | null
    /**
     * The data needed to create a contactForm.
     */
    data: XOR<contactFormCreateInput, contactFormUncheckedCreateInput>
  }

  /**
   * contactForm createMany
   */
  export type contactFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contactForms.
     */
    data: contactFormCreateManyInput | contactFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contactForm createManyAndReturn
   */
  export type contactFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactForm
     */
    select?: contactFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contactForm
     */
    omit?: contactFormOmit<ExtArgs> | null
    /**
     * The data used to create many contactForms.
     */
    data: contactFormCreateManyInput | contactFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contactForm update
   */
  export type contactFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactForm
     */
    select?: contactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactForm
     */
    omit?: contactFormOmit<ExtArgs> | null
    /**
     * The data needed to update a contactForm.
     */
    data: XOR<contactFormUpdateInput, contactFormUncheckedUpdateInput>
    /**
     * Choose, which contactForm to update.
     */
    where: contactFormWhereUniqueInput
  }

  /**
   * contactForm updateMany
   */
  export type contactFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contactForms.
     */
    data: XOR<contactFormUpdateManyMutationInput, contactFormUncheckedUpdateManyInput>
    /**
     * Filter which contactForms to update
     */
    where?: contactFormWhereInput
    /**
     * Limit how many contactForms to update.
     */
    limit?: number
  }

  /**
   * contactForm updateManyAndReturn
   */
  export type contactFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactForm
     */
    select?: contactFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contactForm
     */
    omit?: contactFormOmit<ExtArgs> | null
    /**
     * The data used to update contactForms.
     */
    data: XOR<contactFormUpdateManyMutationInput, contactFormUncheckedUpdateManyInput>
    /**
     * Filter which contactForms to update
     */
    where?: contactFormWhereInput
    /**
     * Limit how many contactForms to update.
     */
    limit?: number
  }

  /**
   * contactForm upsert
   */
  export type contactFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactForm
     */
    select?: contactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactForm
     */
    omit?: contactFormOmit<ExtArgs> | null
    /**
     * The filter to search for the contactForm to update in case it exists.
     */
    where: contactFormWhereUniqueInput
    /**
     * In case the contactForm found by the `where` argument doesn't exist, create a new contactForm with this data.
     */
    create: XOR<contactFormCreateInput, contactFormUncheckedCreateInput>
    /**
     * In case the contactForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contactFormUpdateInput, contactFormUncheckedUpdateInput>
  }

  /**
   * contactForm delete
   */
  export type contactFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactForm
     */
    select?: contactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactForm
     */
    omit?: contactFormOmit<ExtArgs> | null
    /**
     * Filter which contactForm to delete.
     */
    where: contactFormWhereUniqueInput
  }

  /**
   * contactForm deleteMany
   */
  export type contactFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contactForms to delete
     */
    where?: contactFormWhereInput
    /**
     * Limit how many contactForms to delete.
     */
    limit?: number
  }

  /**
   * contactForm without action
   */
  export type contactFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactForm
     */
    select?: contactFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactForm
     */
    omit?: contactFormOmit<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    active: 'active',
    dateLastActivity: 'dateLastActivity',
    isVerified: 'isVerified',
    abonoRemaining: 'abonoRemaining'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ActivitiesScalarFieldEnum: {
    id: 'id',
    instructorId: 'instructorId',
    name: 'name',
    active: 'active',
    description: 'description',
    gymId: 'gymId',
    quota: 'quota'
  };

  export type ActivitiesScalarFieldEnum = (typeof ActivitiesScalarFieldEnum)[keyof typeof ActivitiesScalarFieldEnum]


  export const InstructorsScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    active: 'active'
  };

  export type InstructorsScalarFieldEnum = (typeof InstructorsScalarFieldEnum)[keyof typeof InstructorsScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    activityPlanId: 'activityPlanId',
    participantId: 'participantId',
    status: 'status',
    date: 'date'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const ActivityPlanningScalarFieldEnum: {
    id: 'id',
    activityId: 'activityId',
    day: 'day',
    startTime: 'startTime',
    active: 'active',
    endTime: 'endTime'
  };

  export type ActivityPlanningScalarFieldEnum = (typeof ActivityPlanningScalarFieldEnum)[keyof typeof ActivityPlanningScalarFieldEnum]


  export const ActivityCancellationScalarFieldEnum: {
    id: 'id',
    activityPlanningId: 'activityPlanningId',
    date: 'date',
    reason: 'reason'
  };

  export type ActivityCancellationScalarFieldEnum = (typeof ActivityCancellationScalarFieldEnum)[keyof typeof ActivityCancellationScalarFieldEnum]


  export const GymScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    email: 'email'
  };

  export type GymScalarFieldEnum = (typeof GymScalarFieldEnum)[keyof typeof GymScalarFieldEnum]


  export const ContactFormScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    message: 'message'
  };

  export type ContactFormScalarFieldEnum = (typeof ContactFormScalarFieldEnum)[keyof typeof ContactFormScalarFieldEnum]


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


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    firstName?: StringFilter<"users"> | string
    lastName?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    phone?: StringNullableFilter<"users"> | string | null
    active?: BoolNullableFilter<"users"> | boolean | null
    dateLastActivity?: DateTimeNullableFilter<"users"> | Date | string | null
    isVerified?: BoolNullableFilter<"users"> | boolean | null
    abonoRemaining?: IntFilter<"users"> | number
    activityLog?: ActivityLogListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    dateLastActivity?: SortOrderInput | SortOrder
    isVerified?: SortOrderInput | SortOrder
    abonoRemaining?: SortOrder
    activityLog?: activityLogOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    firstName?: StringFilter<"users"> | string
    lastName?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    phone?: StringNullableFilter<"users"> | string | null
    active?: BoolNullableFilter<"users"> | boolean | null
    dateLastActivity?: DateTimeNullableFilter<"users"> | Date | string | null
    isVerified?: BoolNullableFilter<"users"> | boolean | null
    abonoRemaining?: IntFilter<"users"> | number
    activityLog?: ActivityLogListRelationFilter
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    dateLastActivity?: SortOrderInput | SortOrder
    isVerified?: SortOrderInput | SortOrder
    abonoRemaining?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    firstName?: StringWithAggregatesFilter<"users"> | string
    lastName?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    active?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    dateLastActivity?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    isVerified?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    abonoRemaining?: IntWithAggregatesFilter<"users"> | number
  }

  export type activitiesWhereInput = {
    AND?: activitiesWhereInput | activitiesWhereInput[]
    OR?: activitiesWhereInput[]
    NOT?: activitiesWhereInput | activitiesWhereInput[]
    id?: IntFilter<"activities"> | number
    instructorId?: IntNullableFilter<"activities"> | number | null
    name?: StringFilter<"activities"> | string
    active?: BoolNullableFilter<"activities"> | boolean | null
    description?: StringFilter<"activities"> | string
    gymId?: IntFilter<"activities"> | number
    quota?: IntFilter<"activities"> | number
    gym?: XOR<GymScalarRelationFilter, gymWhereInput>
    instructors?: XOR<InstructorsNullableScalarRelationFilter, instructorsWhereInput> | null
    activityPlanning?: ActivityPlanningListRelationFilter
  }

  export type activitiesOrderByWithRelationInput = {
    id?: SortOrder
    instructorId?: SortOrderInput | SortOrder
    name?: SortOrder
    active?: SortOrderInput | SortOrder
    description?: SortOrder
    gymId?: SortOrder
    quota?: SortOrder
    gym?: gymOrderByWithRelationInput
    instructors?: instructorsOrderByWithRelationInput
    activityPlanning?: activityPlanningOrderByRelationAggregateInput
  }

  export type activitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: activitiesWhereInput | activitiesWhereInput[]
    OR?: activitiesWhereInput[]
    NOT?: activitiesWhereInput | activitiesWhereInput[]
    instructorId?: IntNullableFilter<"activities"> | number | null
    name?: StringFilter<"activities"> | string
    active?: BoolNullableFilter<"activities"> | boolean | null
    description?: StringFilter<"activities"> | string
    gymId?: IntFilter<"activities"> | number
    quota?: IntFilter<"activities"> | number
    gym?: XOR<GymScalarRelationFilter, gymWhereInput>
    instructors?: XOR<InstructorsNullableScalarRelationFilter, instructorsWhereInput> | null
    activityPlanning?: ActivityPlanningListRelationFilter
  }, "id">

  export type activitiesOrderByWithAggregationInput = {
    id?: SortOrder
    instructorId?: SortOrderInput | SortOrder
    name?: SortOrder
    active?: SortOrderInput | SortOrder
    description?: SortOrder
    gymId?: SortOrder
    quota?: SortOrder
    _count?: activitiesCountOrderByAggregateInput
    _avg?: activitiesAvgOrderByAggregateInput
    _max?: activitiesMaxOrderByAggregateInput
    _min?: activitiesMinOrderByAggregateInput
    _sum?: activitiesSumOrderByAggregateInput
  }

  export type activitiesScalarWhereWithAggregatesInput = {
    AND?: activitiesScalarWhereWithAggregatesInput | activitiesScalarWhereWithAggregatesInput[]
    OR?: activitiesScalarWhereWithAggregatesInput[]
    NOT?: activitiesScalarWhereWithAggregatesInput | activitiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"activities"> | number
    instructorId?: IntNullableWithAggregatesFilter<"activities"> | number | null
    name?: StringWithAggregatesFilter<"activities"> | string
    active?: BoolNullableWithAggregatesFilter<"activities"> | boolean | null
    description?: StringWithAggregatesFilter<"activities"> | string
    gymId?: IntWithAggregatesFilter<"activities"> | number
    quota?: IntWithAggregatesFilter<"activities"> | number
  }

  export type instructorsWhereInput = {
    AND?: instructorsWhereInput | instructorsWhereInput[]
    OR?: instructorsWhereInput[]
    NOT?: instructorsWhereInput | instructorsWhereInput[]
    id?: IntFilter<"instructors"> | number
    firstName?: StringFilter<"instructors"> | string
    lastName?: StringFilter<"instructors"> | string
    email?: StringNullableFilter<"instructors"> | string | null
    phone?: StringNullableFilter<"instructors"> | string | null
    active?: BoolNullableFilter<"instructors"> | boolean | null
    activities?: ActivitiesListRelationFilter
  }

  export type instructorsOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    activities?: activitiesOrderByRelationAggregateInput
  }

  export type instructorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: instructorsWhereInput | instructorsWhereInput[]
    OR?: instructorsWhereInput[]
    NOT?: instructorsWhereInput | instructorsWhereInput[]
    firstName?: StringFilter<"instructors"> | string
    lastName?: StringFilter<"instructors"> | string
    email?: StringNullableFilter<"instructors"> | string | null
    phone?: StringNullableFilter<"instructors"> | string | null
    active?: BoolNullableFilter<"instructors"> | boolean | null
    activities?: ActivitiesListRelationFilter
  }, "id">

  export type instructorsOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    _count?: instructorsCountOrderByAggregateInput
    _avg?: instructorsAvgOrderByAggregateInput
    _max?: instructorsMaxOrderByAggregateInput
    _min?: instructorsMinOrderByAggregateInput
    _sum?: instructorsSumOrderByAggregateInput
  }

  export type instructorsScalarWhereWithAggregatesInput = {
    AND?: instructorsScalarWhereWithAggregatesInput | instructorsScalarWhereWithAggregatesInput[]
    OR?: instructorsScalarWhereWithAggregatesInput[]
    NOT?: instructorsScalarWhereWithAggregatesInput | instructorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"instructors"> | number
    firstName?: StringWithAggregatesFilter<"instructors"> | string
    lastName?: StringWithAggregatesFilter<"instructors"> | string
    email?: StringNullableWithAggregatesFilter<"instructors"> | string | null
    phone?: StringNullableWithAggregatesFilter<"instructors"> | string | null
    active?: BoolNullableWithAggregatesFilter<"instructors"> | boolean | null
  }

  export type activityLogWhereInput = {
    AND?: activityLogWhereInput | activityLogWhereInput[]
    OR?: activityLogWhereInput[]
    NOT?: activityLogWhereInput | activityLogWhereInput[]
    id?: IntFilter<"activityLog"> | number
    activityPlanId?: IntFilter<"activityLog"> | number
    participantId?: IntFilter<"activityLog"> | number
    status?: StringFilter<"activityLog"> | string
    date?: DateTimeFilter<"activityLog"> | Date | string
    activityPlanning?: XOR<ActivityPlanningScalarRelationFilter, activityPlanningWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type activityLogOrderByWithRelationInput = {
    id?: SortOrder
    activityPlanId?: SortOrder
    participantId?: SortOrder
    status?: SortOrder
    date?: SortOrder
    activityPlanning?: activityPlanningOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type activityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: activityLogWhereInput | activityLogWhereInput[]
    OR?: activityLogWhereInput[]
    NOT?: activityLogWhereInput | activityLogWhereInput[]
    activityPlanId?: IntFilter<"activityLog"> | number
    participantId?: IntFilter<"activityLog"> | number
    status?: StringFilter<"activityLog"> | string
    date?: DateTimeFilter<"activityLog"> | Date | string
    activityPlanning?: XOR<ActivityPlanningScalarRelationFilter, activityPlanningWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type activityLogOrderByWithAggregationInput = {
    id?: SortOrder
    activityPlanId?: SortOrder
    participantId?: SortOrder
    status?: SortOrder
    date?: SortOrder
    _count?: activityLogCountOrderByAggregateInput
    _avg?: activityLogAvgOrderByAggregateInput
    _max?: activityLogMaxOrderByAggregateInput
    _min?: activityLogMinOrderByAggregateInput
    _sum?: activityLogSumOrderByAggregateInput
  }

  export type activityLogScalarWhereWithAggregatesInput = {
    AND?: activityLogScalarWhereWithAggregatesInput | activityLogScalarWhereWithAggregatesInput[]
    OR?: activityLogScalarWhereWithAggregatesInput[]
    NOT?: activityLogScalarWhereWithAggregatesInput | activityLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"activityLog"> | number
    activityPlanId?: IntWithAggregatesFilter<"activityLog"> | number
    participantId?: IntWithAggregatesFilter<"activityLog"> | number
    status?: StringWithAggregatesFilter<"activityLog"> | string
    date?: DateTimeWithAggregatesFilter<"activityLog"> | Date | string
  }

  export type activityPlanningWhereInput = {
    AND?: activityPlanningWhereInput | activityPlanningWhereInput[]
    OR?: activityPlanningWhereInput[]
    NOT?: activityPlanningWhereInput | activityPlanningWhereInput[]
    id?: IntFilter<"activityPlanning"> | number
    activityId?: IntFilter<"activityPlanning"> | number
    day?: StringFilter<"activityPlanning"> | string
    startTime?: DateTimeFilter<"activityPlanning"> | Date | string
    active?: BoolNullableFilter<"activityPlanning"> | boolean | null
    endTime?: DateTimeFilter<"activityPlanning"> | Date | string
    activityCancellation?: ActivityCancellationListRelationFilter
    activityLog?: ActivityLogListRelationFilter
    activities?: XOR<ActivitiesScalarRelationFilter, activitiesWhereInput>
  }

  export type activityPlanningOrderByWithRelationInput = {
    id?: SortOrder
    activityId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    active?: SortOrderInput | SortOrder
    endTime?: SortOrder
    activityCancellation?: activityCancellationOrderByRelationAggregateInput
    activityLog?: activityLogOrderByRelationAggregateInput
    activities?: activitiesOrderByWithRelationInput
  }

  export type activityPlanningWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: activityPlanningWhereInput | activityPlanningWhereInput[]
    OR?: activityPlanningWhereInput[]
    NOT?: activityPlanningWhereInput | activityPlanningWhereInput[]
    activityId?: IntFilter<"activityPlanning"> | number
    day?: StringFilter<"activityPlanning"> | string
    startTime?: DateTimeFilter<"activityPlanning"> | Date | string
    active?: BoolNullableFilter<"activityPlanning"> | boolean | null
    endTime?: DateTimeFilter<"activityPlanning"> | Date | string
    activityCancellation?: ActivityCancellationListRelationFilter
    activityLog?: ActivityLogListRelationFilter
    activities?: XOR<ActivitiesScalarRelationFilter, activitiesWhereInput>
  }, "id">

  export type activityPlanningOrderByWithAggregationInput = {
    id?: SortOrder
    activityId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    active?: SortOrderInput | SortOrder
    endTime?: SortOrder
    _count?: activityPlanningCountOrderByAggregateInput
    _avg?: activityPlanningAvgOrderByAggregateInput
    _max?: activityPlanningMaxOrderByAggregateInput
    _min?: activityPlanningMinOrderByAggregateInput
    _sum?: activityPlanningSumOrderByAggregateInput
  }

  export type activityPlanningScalarWhereWithAggregatesInput = {
    AND?: activityPlanningScalarWhereWithAggregatesInput | activityPlanningScalarWhereWithAggregatesInput[]
    OR?: activityPlanningScalarWhereWithAggregatesInput[]
    NOT?: activityPlanningScalarWhereWithAggregatesInput | activityPlanningScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"activityPlanning"> | number
    activityId?: IntWithAggregatesFilter<"activityPlanning"> | number
    day?: StringWithAggregatesFilter<"activityPlanning"> | string
    startTime?: DateTimeWithAggregatesFilter<"activityPlanning"> | Date | string
    active?: BoolNullableWithAggregatesFilter<"activityPlanning"> | boolean | null
    endTime?: DateTimeWithAggregatesFilter<"activityPlanning"> | Date | string
  }

  export type activityCancellationWhereInput = {
    AND?: activityCancellationWhereInput | activityCancellationWhereInput[]
    OR?: activityCancellationWhereInput[]
    NOT?: activityCancellationWhereInput | activityCancellationWhereInput[]
    id?: IntFilter<"activityCancellation"> | number
    activityPlanningId?: IntNullableFilter<"activityCancellation"> | number | null
    date?: DateTimeFilter<"activityCancellation"> | Date | string
    reason?: StringNullableFilter<"activityCancellation"> | string | null
    activityPlanning?: XOR<ActivityPlanningNullableScalarRelationFilter, activityPlanningWhereInput> | null
  }

  export type activityCancellationOrderByWithRelationInput = {
    id?: SortOrder
    activityPlanningId?: SortOrderInput | SortOrder
    date?: SortOrder
    reason?: SortOrderInput | SortOrder
    activityPlanning?: activityPlanningOrderByWithRelationInput
  }

  export type activityCancellationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: activityCancellationWhereInput | activityCancellationWhereInput[]
    OR?: activityCancellationWhereInput[]
    NOT?: activityCancellationWhereInput | activityCancellationWhereInput[]
    activityPlanningId?: IntNullableFilter<"activityCancellation"> | number | null
    date?: DateTimeFilter<"activityCancellation"> | Date | string
    reason?: StringNullableFilter<"activityCancellation"> | string | null
    activityPlanning?: XOR<ActivityPlanningNullableScalarRelationFilter, activityPlanningWhereInput> | null
  }, "id">

  export type activityCancellationOrderByWithAggregationInput = {
    id?: SortOrder
    activityPlanningId?: SortOrderInput | SortOrder
    date?: SortOrder
    reason?: SortOrderInput | SortOrder
    _count?: activityCancellationCountOrderByAggregateInput
    _avg?: activityCancellationAvgOrderByAggregateInput
    _max?: activityCancellationMaxOrderByAggregateInput
    _min?: activityCancellationMinOrderByAggregateInput
    _sum?: activityCancellationSumOrderByAggregateInput
  }

  export type activityCancellationScalarWhereWithAggregatesInput = {
    AND?: activityCancellationScalarWhereWithAggregatesInput | activityCancellationScalarWhereWithAggregatesInput[]
    OR?: activityCancellationScalarWhereWithAggregatesInput[]
    NOT?: activityCancellationScalarWhereWithAggregatesInput | activityCancellationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"activityCancellation"> | number
    activityPlanningId?: IntNullableWithAggregatesFilter<"activityCancellation"> | number | null
    date?: DateTimeWithAggregatesFilter<"activityCancellation"> | Date | string
    reason?: StringNullableWithAggregatesFilter<"activityCancellation"> | string | null
  }

  export type gymWhereInput = {
    AND?: gymWhereInput | gymWhereInput[]
    OR?: gymWhereInput[]
    NOT?: gymWhereInput | gymWhereInput[]
    id?: IntFilter<"gym"> | number
    name?: StringFilter<"gym"> | string
    address?: StringFilter<"gym"> | string
    phone?: StringFilter<"gym"> | string
    email?: StringFilter<"gym"> | string
    activities?: ActivitiesListRelationFilter
  }

  export type gymOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    activities?: activitiesOrderByRelationAggregateInput
  }

  export type gymWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: gymWhereInput | gymWhereInput[]
    OR?: gymWhereInput[]
    NOT?: gymWhereInput | gymWhereInput[]
    name?: StringFilter<"gym"> | string
    address?: StringFilter<"gym"> | string
    phone?: StringFilter<"gym"> | string
    email?: StringFilter<"gym"> | string
    activities?: ActivitiesListRelationFilter
  }, "id">

  export type gymOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    _count?: gymCountOrderByAggregateInput
    _avg?: gymAvgOrderByAggregateInput
    _max?: gymMaxOrderByAggregateInput
    _min?: gymMinOrderByAggregateInput
    _sum?: gymSumOrderByAggregateInput
  }

  export type gymScalarWhereWithAggregatesInput = {
    AND?: gymScalarWhereWithAggregatesInput | gymScalarWhereWithAggregatesInput[]
    OR?: gymScalarWhereWithAggregatesInput[]
    NOT?: gymScalarWhereWithAggregatesInput | gymScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"gym"> | number
    name?: StringWithAggregatesFilter<"gym"> | string
    address?: StringWithAggregatesFilter<"gym"> | string
    phone?: StringWithAggregatesFilter<"gym"> | string
    email?: StringWithAggregatesFilter<"gym"> | string
  }

  export type contactFormWhereInput = {
    AND?: contactFormWhereInput | contactFormWhereInput[]
    OR?: contactFormWhereInput[]
    NOT?: contactFormWhereInput | contactFormWhereInput[]
    id?: IntFilter<"contactForm"> | number
    name?: StringFilter<"contactForm"> | string
    email?: StringFilter<"contactForm"> | string
    message?: StringFilter<"contactForm"> | string
  }

  export type contactFormOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
  }

  export type contactFormWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: contactFormWhereInput | contactFormWhereInput[]
    OR?: contactFormWhereInput[]
    NOT?: contactFormWhereInput | contactFormWhereInput[]
    name?: StringFilter<"contactForm"> | string
    email?: StringFilter<"contactForm"> | string
    message?: StringFilter<"contactForm"> | string
  }, "id">

  export type contactFormOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    _count?: contactFormCountOrderByAggregateInput
    _avg?: contactFormAvgOrderByAggregateInput
    _max?: contactFormMaxOrderByAggregateInput
    _min?: contactFormMinOrderByAggregateInput
    _sum?: contactFormSumOrderByAggregateInput
  }

  export type contactFormScalarWhereWithAggregatesInput = {
    AND?: contactFormScalarWhereWithAggregatesInput | contactFormScalarWhereWithAggregatesInput[]
    OR?: contactFormScalarWhereWithAggregatesInput[]
    NOT?: contactFormScalarWhereWithAggregatesInput | contactFormScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"contactForm"> | number
    name?: StringWithAggregatesFilter<"contactForm"> | string
    email?: StringWithAggregatesFilter<"contactForm"> | string
    message?: StringWithAggregatesFilter<"contactForm"> | string
  }

  export type usersCreateInput = {
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    active?: boolean | null
    dateLastActivity?: Date | string | null
    isVerified?: boolean | null
    abonoRemaining?: number
    activityLog?: activityLogCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    active?: boolean | null
    dateLastActivity?: Date | string | null
    isVerified?: boolean | null
    abonoRemaining?: number
    activityLog?: activityLogUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateLastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    abonoRemaining?: IntFieldUpdateOperationsInput | number
    activityLog?: activityLogUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateLastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    abonoRemaining?: IntFieldUpdateOperationsInput | number
    activityLog?: activityLogUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    active?: boolean | null
    dateLastActivity?: Date | string | null
    isVerified?: boolean | null
    abonoRemaining?: number
  }

  export type usersUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateLastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    abonoRemaining?: IntFieldUpdateOperationsInput | number
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateLastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    abonoRemaining?: IntFieldUpdateOperationsInput | number
  }

  export type activitiesCreateInput = {
    name: string
    active?: boolean | null
    description: string
    quota: number
    gym: gymCreateNestedOneWithoutActivitiesInput
    instructors?: instructorsCreateNestedOneWithoutActivitiesInput
    activityPlanning?: activityPlanningCreateNestedManyWithoutActivitiesInput
  }

  export type activitiesUncheckedCreateInput = {
    id?: number
    instructorId?: number | null
    name: string
    active?: boolean | null
    description: string
    gymId: number
    quota: number
    activityPlanning?: activityPlanningUncheckedCreateNestedManyWithoutActivitiesInput
  }

  export type activitiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    gym?: gymUpdateOneRequiredWithoutActivitiesNestedInput
    instructors?: instructorsUpdateOneWithoutActivitiesNestedInput
    activityPlanning?: activityPlanningUpdateManyWithoutActivitiesNestedInput
  }

  export type activitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructorId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
    gymId?: IntFieldUpdateOperationsInput | number
    quota?: IntFieldUpdateOperationsInput | number
    activityPlanning?: activityPlanningUncheckedUpdateManyWithoutActivitiesNestedInput
  }

  export type activitiesCreateManyInput = {
    id?: number
    instructorId?: number | null
    name: string
    active?: boolean | null
    description: string
    gymId: number
    quota: number
  }

  export type activitiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
  }

  export type activitiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructorId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
    gymId?: IntFieldUpdateOperationsInput | number
    quota?: IntFieldUpdateOperationsInput | number
  }

  export type instructorsCreateInput = {
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    active?: boolean | null
    activities?: activitiesCreateNestedManyWithoutInstructorsInput
  }

  export type instructorsUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    active?: boolean | null
    activities?: activitiesUncheckedCreateNestedManyWithoutInstructorsInput
  }

  export type instructorsUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activities?: activitiesUpdateManyWithoutInstructorsNestedInput
  }

  export type instructorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    activities?: activitiesUncheckedUpdateManyWithoutInstructorsNestedInput
  }

  export type instructorsCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    active?: boolean | null
  }

  export type instructorsUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type instructorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type activityLogCreateInput = {
    status: string
    date: Date | string
    activityPlanning: activityPlanningCreateNestedOneWithoutActivityLogInput
    users: usersCreateNestedOneWithoutActivityLogInput
  }

  export type activityLogUncheckedCreateInput = {
    id?: number
    activityPlanId: number
    participantId: number
    status: string
    date: Date | string
  }

  export type activityLogUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    activityPlanning?: activityPlanningUpdateOneRequiredWithoutActivityLogNestedInput
    users?: usersUpdateOneRequiredWithoutActivityLogNestedInput
  }

  export type activityLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityPlanId?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activityLogCreateManyInput = {
    id?: number
    activityPlanId: number
    participantId: number
    status: string
    date: Date | string
  }

  export type activityLogUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activityLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityPlanId?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activityPlanningCreateInput = {
    day: string
    startTime: Date | string
    active?: boolean | null
    endTime: Date | string
    activityCancellation?: activityCancellationCreateNestedManyWithoutActivityPlanningInput
    activityLog?: activityLogCreateNestedManyWithoutActivityPlanningInput
    activities: activitiesCreateNestedOneWithoutActivityPlanningInput
  }

  export type activityPlanningUncheckedCreateInput = {
    id?: number
    activityId: number
    day: string
    startTime: Date | string
    active?: boolean | null
    endTime: Date | string
    activityCancellation?: activityCancellationUncheckedCreateNestedManyWithoutActivityPlanningInput
    activityLog?: activityLogUncheckedCreateNestedManyWithoutActivityPlanningInput
  }

  export type activityPlanningUpdateInput = {
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    activityCancellation?: activityCancellationUpdateManyWithoutActivityPlanningNestedInput
    activityLog?: activityLogUpdateManyWithoutActivityPlanningNestedInput
    activities?: activitiesUpdateOneRequiredWithoutActivityPlanningNestedInput
  }

  export type activityPlanningUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    activityCancellation?: activityCancellationUncheckedUpdateManyWithoutActivityPlanningNestedInput
    activityLog?: activityLogUncheckedUpdateManyWithoutActivityPlanningNestedInput
  }

  export type activityPlanningCreateManyInput = {
    id?: number
    activityId: number
    day: string
    startTime: Date | string
    active?: boolean | null
    endTime: Date | string
  }

  export type activityPlanningUpdateManyMutationInput = {
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activityPlanningUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activityCancellationCreateInput = {
    date: Date | string
    reason?: string | null
    activityPlanning?: activityPlanningCreateNestedOneWithoutActivityCancellationInput
  }

  export type activityCancellationUncheckedCreateInput = {
    id?: number
    activityPlanningId?: number | null
    date: Date | string
    reason?: string | null
  }

  export type activityCancellationUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    activityPlanning?: activityPlanningUpdateOneWithoutActivityCancellationNestedInput
  }

  export type activityCancellationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityPlanningId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type activityCancellationCreateManyInput = {
    id?: number
    activityPlanningId?: number | null
    date: Date | string
    reason?: string | null
  }

  export type activityCancellationUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type activityCancellationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityPlanningId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type gymCreateInput = {
    name: string
    address: string
    phone: string
    email: string
    activities?: activitiesCreateNestedManyWithoutGymInput
  }

  export type gymUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
    activities?: activitiesUncheckedCreateNestedManyWithoutGymInput
  }

  export type gymUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    activities?: activitiesUpdateManyWithoutGymNestedInput
  }

  export type gymUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    activities?: activitiesUncheckedUpdateManyWithoutGymNestedInput
  }

  export type gymCreateManyInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
  }

  export type gymUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type gymUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type contactFormCreateInput = {
    name: string
    email: string
    message: string
  }

  export type contactFormUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    message: string
  }

  export type contactFormUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type contactFormUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type contactFormCreateManyInput = {
    id?: number
    name: string
    email: string
    message: string
  }

  export type contactFormUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type contactFormUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ActivityLogListRelationFilter = {
    every?: activityLogWhereInput
    some?: activityLogWhereInput
    none?: activityLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type activityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    dateLastActivity?: SortOrder
    isVerified?: SortOrder
    abonoRemaining?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    abonoRemaining?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    dateLastActivity?: SortOrder
    isVerified?: SortOrder
    abonoRemaining?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    dateLastActivity?: SortOrder
    isVerified?: SortOrder
    abonoRemaining?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    abonoRemaining?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type GymScalarRelationFilter = {
    is?: gymWhereInput
    isNot?: gymWhereInput
  }

  export type InstructorsNullableScalarRelationFilter = {
    is?: instructorsWhereInput | null
    isNot?: instructorsWhereInput | null
  }

  export type ActivityPlanningListRelationFilter = {
    every?: activityPlanningWhereInput
    some?: activityPlanningWhereInput
    none?: activityPlanningWhereInput
  }

  export type activityPlanningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type activitiesCountOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrder
    gymId?: SortOrder
    quota?: SortOrder
  }

  export type activitiesAvgOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    gymId?: SortOrder
    quota?: SortOrder
  }

  export type activitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrder
    gymId?: SortOrder
    quota?: SortOrder
  }

  export type activitiesMinOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    name?: SortOrder
    active?: SortOrder
    description?: SortOrder
    gymId?: SortOrder
    quota?: SortOrder
  }

  export type activitiesSumOrderByAggregateInput = {
    id?: SortOrder
    instructorId?: SortOrder
    gymId?: SortOrder
    quota?: SortOrder
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

  export type ActivitiesListRelationFilter = {
    every?: activitiesWhereInput
    some?: activitiesWhereInput
    none?: activitiesWhereInput
  }

  export type activitiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type instructorsCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    active?: SortOrder
  }

  export type instructorsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type instructorsMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    active?: SortOrder
  }

  export type instructorsMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    active?: SortOrder
  }

  export type instructorsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ActivityPlanningScalarRelationFilter = {
    is?: activityPlanningWhereInput
    isNot?: activityPlanningWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type activityLogCountOrderByAggregateInput = {
    id?: SortOrder
    activityPlanId?: SortOrder
    participantId?: SortOrder
    status?: SortOrder
    date?: SortOrder
  }

  export type activityLogAvgOrderByAggregateInput = {
    id?: SortOrder
    activityPlanId?: SortOrder
    participantId?: SortOrder
  }

  export type activityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    activityPlanId?: SortOrder
    participantId?: SortOrder
    status?: SortOrder
    date?: SortOrder
  }

  export type activityLogMinOrderByAggregateInput = {
    id?: SortOrder
    activityPlanId?: SortOrder
    participantId?: SortOrder
    status?: SortOrder
    date?: SortOrder
  }

  export type activityLogSumOrderByAggregateInput = {
    id?: SortOrder
    activityPlanId?: SortOrder
    participantId?: SortOrder
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

  export type ActivityCancellationListRelationFilter = {
    every?: activityCancellationWhereInput
    some?: activityCancellationWhereInput
    none?: activityCancellationWhereInput
  }

  export type ActivitiesScalarRelationFilter = {
    is?: activitiesWhereInput
    isNot?: activitiesWhereInput
  }

  export type activityCancellationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type activityPlanningCountOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    active?: SortOrder
    endTime?: SortOrder
  }

  export type activityPlanningAvgOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
  }

  export type activityPlanningMaxOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    active?: SortOrder
    endTime?: SortOrder
  }

  export type activityPlanningMinOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    active?: SortOrder
    endTime?: SortOrder
  }

  export type activityPlanningSumOrderByAggregateInput = {
    id?: SortOrder
    activityId?: SortOrder
  }

  export type ActivityPlanningNullableScalarRelationFilter = {
    is?: activityPlanningWhereInput | null
    isNot?: activityPlanningWhereInput | null
  }

  export type activityCancellationCountOrderByAggregateInput = {
    id?: SortOrder
    activityPlanningId?: SortOrder
    date?: SortOrder
    reason?: SortOrder
  }

  export type activityCancellationAvgOrderByAggregateInput = {
    id?: SortOrder
    activityPlanningId?: SortOrder
  }

  export type activityCancellationMaxOrderByAggregateInput = {
    id?: SortOrder
    activityPlanningId?: SortOrder
    date?: SortOrder
    reason?: SortOrder
  }

  export type activityCancellationMinOrderByAggregateInput = {
    id?: SortOrder
    activityPlanningId?: SortOrder
    date?: SortOrder
    reason?: SortOrder
  }

  export type activityCancellationSumOrderByAggregateInput = {
    id?: SortOrder
    activityPlanningId?: SortOrder
  }

  export type gymCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type gymAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type gymMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type gymMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
  }

  export type gymSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type contactFormCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
  }

  export type contactFormAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type contactFormMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
  }

  export type contactFormMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
  }

  export type contactFormSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type activityLogCreateNestedManyWithoutUsersInput = {
    create?: XOR<activityLogCreateWithoutUsersInput, activityLogUncheckedCreateWithoutUsersInput> | activityLogCreateWithoutUsersInput[] | activityLogUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: activityLogCreateOrConnectWithoutUsersInput | activityLogCreateOrConnectWithoutUsersInput[]
    createMany?: activityLogCreateManyUsersInputEnvelope
    connect?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
  }

  export type activityLogUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<activityLogCreateWithoutUsersInput, activityLogUncheckedCreateWithoutUsersInput> | activityLogCreateWithoutUsersInput[] | activityLogUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: activityLogCreateOrConnectWithoutUsersInput | activityLogCreateOrConnectWithoutUsersInput[]
    createMany?: activityLogCreateManyUsersInputEnvelope
    connect?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type activityLogUpdateManyWithoutUsersNestedInput = {
    create?: XOR<activityLogCreateWithoutUsersInput, activityLogUncheckedCreateWithoutUsersInput> | activityLogCreateWithoutUsersInput[] | activityLogUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: activityLogCreateOrConnectWithoutUsersInput | activityLogCreateOrConnectWithoutUsersInput[]
    upsert?: activityLogUpsertWithWhereUniqueWithoutUsersInput | activityLogUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: activityLogCreateManyUsersInputEnvelope
    set?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
    disconnect?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
    delete?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
    connect?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
    update?: activityLogUpdateWithWhereUniqueWithoutUsersInput | activityLogUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: activityLogUpdateManyWithWhereWithoutUsersInput | activityLogUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: activityLogScalarWhereInput | activityLogScalarWhereInput[]
  }

  export type activityLogUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<activityLogCreateWithoutUsersInput, activityLogUncheckedCreateWithoutUsersInput> | activityLogCreateWithoutUsersInput[] | activityLogUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: activityLogCreateOrConnectWithoutUsersInput | activityLogCreateOrConnectWithoutUsersInput[]
    upsert?: activityLogUpsertWithWhereUniqueWithoutUsersInput | activityLogUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: activityLogCreateManyUsersInputEnvelope
    set?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
    disconnect?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
    delete?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
    connect?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
    update?: activityLogUpdateWithWhereUniqueWithoutUsersInput | activityLogUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: activityLogUpdateManyWithWhereWithoutUsersInput | activityLogUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: activityLogScalarWhereInput | activityLogScalarWhereInput[]
  }

  export type gymCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<gymCreateWithoutActivitiesInput, gymUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: gymCreateOrConnectWithoutActivitiesInput
    connect?: gymWhereUniqueInput
  }

  export type instructorsCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<instructorsCreateWithoutActivitiesInput, instructorsUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: instructorsCreateOrConnectWithoutActivitiesInput
    connect?: instructorsWhereUniqueInput
  }

  export type activityPlanningCreateNestedManyWithoutActivitiesInput = {
    create?: XOR<activityPlanningCreateWithoutActivitiesInput, activityPlanningUncheckedCreateWithoutActivitiesInput> | activityPlanningCreateWithoutActivitiesInput[] | activityPlanningUncheckedCreateWithoutActivitiesInput[]
    connectOrCreate?: activityPlanningCreateOrConnectWithoutActivitiesInput | activityPlanningCreateOrConnectWithoutActivitiesInput[]
    createMany?: activityPlanningCreateManyActivitiesInputEnvelope
    connect?: activityPlanningWhereUniqueInput | activityPlanningWhereUniqueInput[]
  }

  export type activityPlanningUncheckedCreateNestedManyWithoutActivitiesInput = {
    create?: XOR<activityPlanningCreateWithoutActivitiesInput, activityPlanningUncheckedCreateWithoutActivitiesInput> | activityPlanningCreateWithoutActivitiesInput[] | activityPlanningUncheckedCreateWithoutActivitiesInput[]
    connectOrCreate?: activityPlanningCreateOrConnectWithoutActivitiesInput | activityPlanningCreateOrConnectWithoutActivitiesInput[]
    createMany?: activityPlanningCreateManyActivitiesInputEnvelope
    connect?: activityPlanningWhereUniqueInput | activityPlanningWhereUniqueInput[]
  }

  export type gymUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<gymCreateWithoutActivitiesInput, gymUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: gymCreateOrConnectWithoutActivitiesInput
    upsert?: gymUpsertWithoutActivitiesInput
    connect?: gymWhereUniqueInput
    update?: XOR<XOR<gymUpdateToOneWithWhereWithoutActivitiesInput, gymUpdateWithoutActivitiesInput>, gymUncheckedUpdateWithoutActivitiesInput>
  }

  export type instructorsUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<instructorsCreateWithoutActivitiesInput, instructorsUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: instructorsCreateOrConnectWithoutActivitiesInput
    upsert?: instructorsUpsertWithoutActivitiesInput
    disconnect?: instructorsWhereInput | boolean
    delete?: instructorsWhereInput | boolean
    connect?: instructorsWhereUniqueInput
    update?: XOR<XOR<instructorsUpdateToOneWithWhereWithoutActivitiesInput, instructorsUpdateWithoutActivitiesInput>, instructorsUncheckedUpdateWithoutActivitiesInput>
  }

  export type activityPlanningUpdateManyWithoutActivitiesNestedInput = {
    create?: XOR<activityPlanningCreateWithoutActivitiesInput, activityPlanningUncheckedCreateWithoutActivitiesInput> | activityPlanningCreateWithoutActivitiesInput[] | activityPlanningUncheckedCreateWithoutActivitiesInput[]
    connectOrCreate?: activityPlanningCreateOrConnectWithoutActivitiesInput | activityPlanningCreateOrConnectWithoutActivitiesInput[]
    upsert?: activityPlanningUpsertWithWhereUniqueWithoutActivitiesInput | activityPlanningUpsertWithWhereUniqueWithoutActivitiesInput[]
    createMany?: activityPlanningCreateManyActivitiesInputEnvelope
    set?: activityPlanningWhereUniqueInput | activityPlanningWhereUniqueInput[]
    disconnect?: activityPlanningWhereUniqueInput | activityPlanningWhereUniqueInput[]
    delete?: activityPlanningWhereUniqueInput | activityPlanningWhereUniqueInput[]
    connect?: activityPlanningWhereUniqueInput | activityPlanningWhereUniqueInput[]
    update?: activityPlanningUpdateWithWhereUniqueWithoutActivitiesInput | activityPlanningUpdateWithWhereUniqueWithoutActivitiesInput[]
    updateMany?: activityPlanningUpdateManyWithWhereWithoutActivitiesInput | activityPlanningUpdateManyWithWhereWithoutActivitiesInput[]
    deleteMany?: activityPlanningScalarWhereInput | activityPlanningScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type activityPlanningUncheckedUpdateManyWithoutActivitiesNestedInput = {
    create?: XOR<activityPlanningCreateWithoutActivitiesInput, activityPlanningUncheckedCreateWithoutActivitiesInput> | activityPlanningCreateWithoutActivitiesInput[] | activityPlanningUncheckedCreateWithoutActivitiesInput[]
    connectOrCreate?: activityPlanningCreateOrConnectWithoutActivitiesInput | activityPlanningCreateOrConnectWithoutActivitiesInput[]
    upsert?: activityPlanningUpsertWithWhereUniqueWithoutActivitiesInput | activityPlanningUpsertWithWhereUniqueWithoutActivitiesInput[]
    createMany?: activityPlanningCreateManyActivitiesInputEnvelope
    set?: activityPlanningWhereUniqueInput | activityPlanningWhereUniqueInput[]
    disconnect?: activityPlanningWhereUniqueInput | activityPlanningWhereUniqueInput[]
    delete?: activityPlanningWhereUniqueInput | activityPlanningWhereUniqueInput[]
    connect?: activityPlanningWhereUniqueInput | activityPlanningWhereUniqueInput[]
    update?: activityPlanningUpdateWithWhereUniqueWithoutActivitiesInput | activityPlanningUpdateWithWhereUniqueWithoutActivitiesInput[]
    updateMany?: activityPlanningUpdateManyWithWhereWithoutActivitiesInput | activityPlanningUpdateManyWithWhereWithoutActivitiesInput[]
    deleteMany?: activityPlanningScalarWhereInput | activityPlanningScalarWhereInput[]
  }

  export type activitiesCreateNestedManyWithoutInstructorsInput = {
    create?: XOR<activitiesCreateWithoutInstructorsInput, activitiesUncheckedCreateWithoutInstructorsInput> | activitiesCreateWithoutInstructorsInput[] | activitiesUncheckedCreateWithoutInstructorsInput[]
    connectOrCreate?: activitiesCreateOrConnectWithoutInstructorsInput | activitiesCreateOrConnectWithoutInstructorsInput[]
    createMany?: activitiesCreateManyInstructorsInputEnvelope
    connect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
  }

  export type activitiesUncheckedCreateNestedManyWithoutInstructorsInput = {
    create?: XOR<activitiesCreateWithoutInstructorsInput, activitiesUncheckedCreateWithoutInstructorsInput> | activitiesCreateWithoutInstructorsInput[] | activitiesUncheckedCreateWithoutInstructorsInput[]
    connectOrCreate?: activitiesCreateOrConnectWithoutInstructorsInput | activitiesCreateOrConnectWithoutInstructorsInput[]
    createMany?: activitiesCreateManyInstructorsInputEnvelope
    connect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
  }

  export type activitiesUpdateManyWithoutInstructorsNestedInput = {
    create?: XOR<activitiesCreateWithoutInstructorsInput, activitiesUncheckedCreateWithoutInstructorsInput> | activitiesCreateWithoutInstructorsInput[] | activitiesUncheckedCreateWithoutInstructorsInput[]
    connectOrCreate?: activitiesCreateOrConnectWithoutInstructorsInput | activitiesCreateOrConnectWithoutInstructorsInput[]
    upsert?: activitiesUpsertWithWhereUniqueWithoutInstructorsInput | activitiesUpsertWithWhereUniqueWithoutInstructorsInput[]
    createMany?: activitiesCreateManyInstructorsInputEnvelope
    set?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    disconnect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    delete?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    connect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    update?: activitiesUpdateWithWhereUniqueWithoutInstructorsInput | activitiesUpdateWithWhereUniqueWithoutInstructorsInput[]
    updateMany?: activitiesUpdateManyWithWhereWithoutInstructorsInput | activitiesUpdateManyWithWhereWithoutInstructorsInput[]
    deleteMany?: activitiesScalarWhereInput | activitiesScalarWhereInput[]
  }

  export type activitiesUncheckedUpdateManyWithoutInstructorsNestedInput = {
    create?: XOR<activitiesCreateWithoutInstructorsInput, activitiesUncheckedCreateWithoutInstructorsInput> | activitiesCreateWithoutInstructorsInput[] | activitiesUncheckedCreateWithoutInstructorsInput[]
    connectOrCreate?: activitiesCreateOrConnectWithoutInstructorsInput | activitiesCreateOrConnectWithoutInstructorsInput[]
    upsert?: activitiesUpsertWithWhereUniqueWithoutInstructorsInput | activitiesUpsertWithWhereUniqueWithoutInstructorsInput[]
    createMany?: activitiesCreateManyInstructorsInputEnvelope
    set?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    disconnect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    delete?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    connect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    update?: activitiesUpdateWithWhereUniqueWithoutInstructorsInput | activitiesUpdateWithWhereUniqueWithoutInstructorsInput[]
    updateMany?: activitiesUpdateManyWithWhereWithoutInstructorsInput | activitiesUpdateManyWithWhereWithoutInstructorsInput[]
    deleteMany?: activitiesScalarWhereInput | activitiesScalarWhereInput[]
  }

  export type activityPlanningCreateNestedOneWithoutActivityLogInput = {
    create?: XOR<activityPlanningCreateWithoutActivityLogInput, activityPlanningUncheckedCreateWithoutActivityLogInput>
    connectOrCreate?: activityPlanningCreateOrConnectWithoutActivityLogInput
    connect?: activityPlanningWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutActivityLogInput = {
    create?: XOR<usersCreateWithoutActivityLogInput, usersUncheckedCreateWithoutActivityLogInput>
    connectOrCreate?: usersCreateOrConnectWithoutActivityLogInput
    connect?: usersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type activityPlanningUpdateOneRequiredWithoutActivityLogNestedInput = {
    create?: XOR<activityPlanningCreateWithoutActivityLogInput, activityPlanningUncheckedCreateWithoutActivityLogInput>
    connectOrCreate?: activityPlanningCreateOrConnectWithoutActivityLogInput
    upsert?: activityPlanningUpsertWithoutActivityLogInput
    connect?: activityPlanningWhereUniqueInput
    update?: XOR<XOR<activityPlanningUpdateToOneWithWhereWithoutActivityLogInput, activityPlanningUpdateWithoutActivityLogInput>, activityPlanningUncheckedUpdateWithoutActivityLogInput>
  }

  export type usersUpdateOneRequiredWithoutActivityLogNestedInput = {
    create?: XOR<usersCreateWithoutActivityLogInput, usersUncheckedCreateWithoutActivityLogInput>
    connectOrCreate?: usersCreateOrConnectWithoutActivityLogInput
    upsert?: usersUpsertWithoutActivityLogInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutActivityLogInput, usersUpdateWithoutActivityLogInput>, usersUncheckedUpdateWithoutActivityLogInput>
  }

  export type activityCancellationCreateNestedManyWithoutActivityPlanningInput = {
    create?: XOR<activityCancellationCreateWithoutActivityPlanningInput, activityCancellationUncheckedCreateWithoutActivityPlanningInput> | activityCancellationCreateWithoutActivityPlanningInput[] | activityCancellationUncheckedCreateWithoutActivityPlanningInput[]
    connectOrCreate?: activityCancellationCreateOrConnectWithoutActivityPlanningInput | activityCancellationCreateOrConnectWithoutActivityPlanningInput[]
    createMany?: activityCancellationCreateManyActivityPlanningInputEnvelope
    connect?: activityCancellationWhereUniqueInput | activityCancellationWhereUniqueInput[]
  }

  export type activityLogCreateNestedManyWithoutActivityPlanningInput = {
    create?: XOR<activityLogCreateWithoutActivityPlanningInput, activityLogUncheckedCreateWithoutActivityPlanningInput> | activityLogCreateWithoutActivityPlanningInput[] | activityLogUncheckedCreateWithoutActivityPlanningInput[]
    connectOrCreate?: activityLogCreateOrConnectWithoutActivityPlanningInput | activityLogCreateOrConnectWithoutActivityPlanningInput[]
    createMany?: activityLogCreateManyActivityPlanningInputEnvelope
    connect?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
  }

  export type activitiesCreateNestedOneWithoutActivityPlanningInput = {
    create?: XOR<activitiesCreateWithoutActivityPlanningInput, activitiesUncheckedCreateWithoutActivityPlanningInput>
    connectOrCreate?: activitiesCreateOrConnectWithoutActivityPlanningInput
    connect?: activitiesWhereUniqueInput
  }

  export type activityCancellationUncheckedCreateNestedManyWithoutActivityPlanningInput = {
    create?: XOR<activityCancellationCreateWithoutActivityPlanningInput, activityCancellationUncheckedCreateWithoutActivityPlanningInput> | activityCancellationCreateWithoutActivityPlanningInput[] | activityCancellationUncheckedCreateWithoutActivityPlanningInput[]
    connectOrCreate?: activityCancellationCreateOrConnectWithoutActivityPlanningInput | activityCancellationCreateOrConnectWithoutActivityPlanningInput[]
    createMany?: activityCancellationCreateManyActivityPlanningInputEnvelope
    connect?: activityCancellationWhereUniqueInput | activityCancellationWhereUniqueInput[]
  }

  export type activityLogUncheckedCreateNestedManyWithoutActivityPlanningInput = {
    create?: XOR<activityLogCreateWithoutActivityPlanningInput, activityLogUncheckedCreateWithoutActivityPlanningInput> | activityLogCreateWithoutActivityPlanningInput[] | activityLogUncheckedCreateWithoutActivityPlanningInput[]
    connectOrCreate?: activityLogCreateOrConnectWithoutActivityPlanningInput | activityLogCreateOrConnectWithoutActivityPlanningInput[]
    createMany?: activityLogCreateManyActivityPlanningInputEnvelope
    connect?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
  }

  export type activityCancellationUpdateManyWithoutActivityPlanningNestedInput = {
    create?: XOR<activityCancellationCreateWithoutActivityPlanningInput, activityCancellationUncheckedCreateWithoutActivityPlanningInput> | activityCancellationCreateWithoutActivityPlanningInput[] | activityCancellationUncheckedCreateWithoutActivityPlanningInput[]
    connectOrCreate?: activityCancellationCreateOrConnectWithoutActivityPlanningInput | activityCancellationCreateOrConnectWithoutActivityPlanningInput[]
    upsert?: activityCancellationUpsertWithWhereUniqueWithoutActivityPlanningInput | activityCancellationUpsertWithWhereUniqueWithoutActivityPlanningInput[]
    createMany?: activityCancellationCreateManyActivityPlanningInputEnvelope
    set?: activityCancellationWhereUniqueInput | activityCancellationWhereUniqueInput[]
    disconnect?: activityCancellationWhereUniqueInput | activityCancellationWhereUniqueInput[]
    delete?: activityCancellationWhereUniqueInput | activityCancellationWhereUniqueInput[]
    connect?: activityCancellationWhereUniqueInput | activityCancellationWhereUniqueInput[]
    update?: activityCancellationUpdateWithWhereUniqueWithoutActivityPlanningInput | activityCancellationUpdateWithWhereUniqueWithoutActivityPlanningInput[]
    updateMany?: activityCancellationUpdateManyWithWhereWithoutActivityPlanningInput | activityCancellationUpdateManyWithWhereWithoutActivityPlanningInput[]
    deleteMany?: activityCancellationScalarWhereInput | activityCancellationScalarWhereInput[]
  }

  export type activityLogUpdateManyWithoutActivityPlanningNestedInput = {
    create?: XOR<activityLogCreateWithoutActivityPlanningInput, activityLogUncheckedCreateWithoutActivityPlanningInput> | activityLogCreateWithoutActivityPlanningInput[] | activityLogUncheckedCreateWithoutActivityPlanningInput[]
    connectOrCreate?: activityLogCreateOrConnectWithoutActivityPlanningInput | activityLogCreateOrConnectWithoutActivityPlanningInput[]
    upsert?: activityLogUpsertWithWhereUniqueWithoutActivityPlanningInput | activityLogUpsertWithWhereUniqueWithoutActivityPlanningInput[]
    createMany?: activityLogCreateManyActivityPlanningInputEnvelope
    set?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
    disconnect?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
    delete?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
    connect?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
    update?: activityLogUpdateWithWhereUniqueWithoutActivityPlanningInput | activityLogUpdateWithWhereUniqueWithoutActivityPlanningInput[]
    updateMany?: activityLogUpdateManyWithWhereWithoutActivityPlanningInput | activityLogUpdateManyWithWhereWithoutActivityPlanningInput[]
    deleteMany?: activityLogScalarWhereInput | activityLogScalarWhereInput[]
  }

  export type activitiesUpdateOneRequiredWithoutActivityPlanningNestedInput = {
    create?: XOR<activitiesCreateWithoutActivityPlanningInput, activitiesUncheckedCreateWithoutActivityPlanningInput>
    connectOrCreate?: activitiesCreateOrConnectWithoutActivityPlanningInput
    upsert?: activitiesUpsertWithoutActivityPlanningInput
    connect?: activitiesWhereUniqueInput
    update?: XOR<XOR<activitiesUpdateToOneWithWhereWithoutActivityPlanningInput, activitiesUpdateWithoutActivityPlanningInput>, activitiesUncheckedUpdateWithoutActivityPlanningInput>
  }

  export type activityCancellationUncheckedUpdateManyWithoutActivityPlanningNestedInput = {
    create?: XOR<activityCancellationCreateWithoutActivityPlanningInput, activityCancellationUncheckedCreateWithoutActivityPlanningInput> | activityCancellationCreateWithoutActivityPlanningInput[] | activityCancellationUncheckedCreateWithoutActivityPlanningInput[]
    connectOrCreate?: activityCancellationCreateOrConnectWithoutActivityPlanningInput | activityCancellationCreateOrConnectWithoutActivityPlanningInput[]
    upsert?: activityCancellationUpsertWithWhereUniqueWithoutActivityPlanningInput | activityCancellationUpsertWithWhereUniqueWithoutActivityPlanningInput[]
    createMany?: activityCancellationCreateManyActivityPlanningInputEnvelope
    set?: activityCancellationWhereUniqueInput | activityCancellationWhereUniqueInput[]
    disconnect?: activityCancellationWhereUniqueInput | activityCancellationWhereUniqueInput[]
    delete?: activityCancellationWhereUniqueInput | activityCancellationWhereUniqueInput[]
    connect?: activityCancellationWhereUniqueInput | activityCancellationWhereUniqueInput[]
    update?: activityCancellationUpdateWithWhereUniqueWithoutActivityPlanningInput | activityCancellationUpdateWithWhereUniqueWithoutActivityPlanningInput[]
    updateMany?: activityCancellationUpdateManyWithWhereWithoutActivityPlanningInput | activityCancellationUpdateManyWithWhereWithoutActivityPlanningInput[]
    deleteMany?: activityCancellationScalarWhereInput | activityCancellationScalarWhereInput[]
  }

  export type activityLogUncheckedUpdateManyWithoutActivityPlanningNestedInput = {
    create?: XOR<activityLogCreateWithoutActivityPlanningInput, activityLogUncheckedCreateWithoutActivityPlanningInput> | activityLogCreateWithoutActivityPlanningInput[] | activityLogUncheckedCreateWithoutActivityPlanningInput[]
    connectOrCreate?: activityLogCreateOrConnectWithoutActivityPlanningInput | activityLogCreateOrConnectWithoutActivityPlanningInput[]
    upsert?: activityLogUpsertWithWhereUniqueWithoutActivityPlanningInput | activityLogUpsertWithWhereUniqueWithoutActivityPlanningInput[]
    createMany?: activityLogCreateManyActivityPlanningInputEnvelope
    set?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
    disconnect?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
    delete?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
    connect?: activityLogWhereUniqueInput | activityLogWhereUniqueInput[]
    update?: activityLogUpdateWithWhereUniqueWithoutActivityPlanningInput | activityLogUpdateWithWhereUniqueWithoutActivityPlanningInput[]
    updateMany?: activityLogUpdateManyWithWhereWithoutActivityPlanningInput | activityLogUpdateManyWithWhereWithoutActivityPlanningInput[]
    deleteMany?: activityLogScalarWhereInput | activityLogScalarWhereInput[]
  }

  export type activityPlanningCreateNestedOneWithoutActivityCancellationInput = {
    create?: XOR<activityPlanningCreateWithoutActivityCancellationInput, activityPlanningUncheckedCreateWithoutActivityCancellationInput>
    connectOrCreate?: activityPlanningCreateOrConnectWithoutActivityCancellationInput
    connect?: activityPlanningWhereUniqueInput
  }

  export type activityPlanningUpdateOneWithoutActivityCancellationNestedInput = {
    create?: XOR<activityPlanningCreateWithoutActivityCancellationInput, activityPlanningUncheckedCreateWithoutActivityCancellationInput>
    connectOrCreate?: activityPlanningCreateOrConnectWithoutActivityCancellationInput
    upsert?: activityPlanningUpsertWithoutActivityCancellationInput
    disconnect?: activityPlanningWhereInput | boolean
    delete?: activityPlanningWhereInput | boolean
    connect?: activityPlanningWhereUniqueInput
    update?: XOR<XOR<activityPlanningUpdateToOneWithWhereWithoutActivityCancellationInput, activityPlanningUpdateWithoutActivityCancellationInput>, activityPlanningUncheckedUpdateWithoutActivityCancellationInput>
  }

  export type activitiesCreateNestedManyWithoutGymInput = {
    create?: XOR<activitiesCreateWithoutGymInput, activitiesUncheckedCreateWithoutGymInput> | activitiesCreateWithoutGymInput[] | activitiesUncheckedCreateWithoutGymInput[]
    connectOrCreate?: activitiesCreateOrConnectWithoutGymInput | activitiesCreateOrConnectWithoutGymInput[]
    createMany?: activitiesCreateManyGymInputEnvelope
    connect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
  }

  export type activitiesUncheckedCreateNestedManyWithoutGymInput = {
    create?: XOR<activitiesCreateWithoutGymInput, activitiesUncheckedCreateWithoutGymInput> | activitiesCreateWithoutGymInput[] | activitiesUncheckedCreateWithoutGymInput[]
    connectOrCreate?: activitiesCreateOrConnectWithoutGymInput | activitiesCreateOrConnectWithoutGymInput[]
    createMany?: activitiesCreateManyGymInputEnvelope
    connect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
  }

  export type activitiesUpdateManyWithoutGymNestedInput = {
    create?: XOR<activitiesCreateWithoutGymInput, activitiesUncheckedCreateWithoutGymInput> | activitiesCreateWithoutGymInput[] | activitiesUncheckedCreateWithoutGymInput[]
    connectOrCreate?: activitiesCreateOrConnectWithoutGymInput | activitiesCreateOrConnectWithoutGymInput[]
    upsert?: activitiesUpsertWithWhereUniqueWithoutGymInput | activitiesUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: activitiesCreateManyGymInputEnvelope
    set?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    disconnect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    delete?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    connect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    update?: activitiesUpdateWithWhereUniqueWithoutGymInput | activitiesUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: activitiesUpdateManyWithWhereWithoutGymInput | activitiesUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: activitiesScalarWhereInput | activitiesScalarWhereInput[]
  }

  export type activitiesUncheckedUpdateManyWithoutGymNestedInput = {
    create?: XOR<activitiesCreateWithoutGymInput, activitiesUncheckedCreateWithoutGymInput> | activitiesCreateWithoutGymInput[] | activitiesUncheckedCreateWithoutGymInput[]
    connectOrCreate?: activitiesCreateOrConnectWithoutGymInput | activitiesCreateOrConnectWithoutGymInput[]
    upsert?: activitiesUpsertWithWhereUniqueWithoutGymInput | activitiesUpsertWithWhereUniqueWithoutGymInput[]
    createMany?: activitiesCreateManyGymInputEnvelope
    set?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    disconnect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    delete?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    connect?: activitiesWhereUniqueInput | activitiesWhereUniqueInput[]
    update?: activitiesUpdateWithWhereUniqueWithoutGymInput | activitiesUpdateWithWhereUniqueWithoutGymInput[]
    updateMany?: activitiesUpdateManyWithWhereWithoutGymInput | activitiesUpdateManyWithWhereWithoutGymInput[]
    deleteMany?: activitiesScalarWhereInput | activitiesScalarWhereInput[]
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type activityLogCreateWithoutUsersInput = {
    status: string
    date: Date | string
    activityPlanning: activityPlanningCreateNestedOneWithoutActivityLogInput
  }

  export type activityLogUncheckedCreateWithoutUsersInput = {
    id?: number
    activityPlanId: number
    status: string
    date: Date | string
  }

  export type activityLogCreateOrConnectWithoutUsersInput = {
    where: activityLogWhereUniqueInput
    create: XOR<activityLogCreateWithoutUsersInput, activityLogUncheckedCreateWithoutUsersInput>
  }

  export type activityLogCreateManyUsersInputEnvelope = {
    data: activityLogCreateManyUsersInput | activityLogCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type activityLogUpsertWithWhereUniqueWithoutUsersInput = {
    where: activityLogWhereUniqueInput
    update: XOR<activityLogUpdateWithoutUsersInput, activityLogUncheckedUpdateWithoutUsersInput>
    create: XOR<activityLogCreateWithoutUsersInput, activityLogUncheckedCreateWithoutUsersInput>
  }

  export type activityLogUpdateWithWhereUniqueWithoutUsersInput = {
    where: activityLogWhereUniqueInput
    data: XOR<activityLogUpdateWithoutUsersInput, activityLogUncheckedUpdateWithoutUsersInput>
  }

  export type activityLogUpdateManyWithWhereWithoutUsersInput = {
    where: activityLogScalarWhereInput
    data: XOR<activityLogUpdateManyMutationInput, activityLogUncheckedUpdateManyWithoutUsersInput>
  }

  export type activityLogScalarWhereInput = {
    AND?: activityLogScalarWhereInput | activityLogScalarWhereInput[]
    OR?: activityLogScalarWhereInput[]
    NOT?: activityLogScalarWhereInput | activityLogScalarWhereInput[]
    id?: IntFilter<"activityLog"> | number
    activityPlanId?: IntFilter<"activityLog"> | number
    participantId?: IntFilter<"activityLog"> | number
    status?: StringFilter<"activityLog"> | string
    date?: DateTimeFilter<"activityLog"> | Date | string
  }

  export type gymCreateWithoutActivitiesInput = {
    name: string
    address: string
    phone: string
    email: string
  }

  export type gymUncheckedCreateWithoutActivitiesInput = {
    id?: number
    name: string
    address: string
    phone: string
    email: string
  }

  export type gymCreateOrConnectWithoutActivitiesInput = {
    where: gymWhereUniqueInput
    create: XOR<gymCreateWithoutActivitiesInput, gymUncheckedCreateWithoutActivitiesInput>
  }

  export type instructorsCreateWithoutActivitiesInput = {
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    active?: boolean | null
  }

  export type instructorsUncheckedCreateWithoutActivitiesInput = {
    id?: number
    firstName: string
    lastName: string
    email?: string | null
    phone?: string | null
    active?: boolean | null
  }

  export type instructorsCreateOrConnectWithoutActivitiesInput = {
    where: instructorsWhereUniqueInput
    create: XOR<instructorsCreateWithoutActivitiesInput, instructorsUncheckedCreateWithoutActivitiesInput>
  }

  export type activityPlanningCreateWithoutActivitiesInput = {
    day: string
    startTime: Date | string
    active?: boolean | null
    endTime: Date | string
    activityCancellation?: activityCancellationCreateNestedManyWithoutActivityPlanningInput
    activityLog?: activityLogCreateNestedManyWithoutActivityPlanningInput
  }

  export type activityPlanningUncheckedCreateWithoutActivitiesInput = {
    id?: number
    day: string
    startTime: Date | string
    active?: boolean | null
    endTime: Date | string
    activityCancellation?: activityCancellationUncheckedCreateNestedManyWithoutActivityPlanningInput
    activityLog?: activityLogUncheckedCreateNestedManyWithoutActivityPlanningInput
  }

  export type activityPlanningCreateOrConnectWithoutActivitiesInput = {
    where: activityPlanningWhereUniqueInput
    create: XOR<activityPlanningCreateWithoutActivitiesInput, activityPlanningUncheckedCreateWithoutActivitiesInput>
  }

  export type activityPlanningCreateManyActivitiesInputEnvelope = {
    data: activityPlanningCreateManyActivitiesInput | activityPlanningCreateManyActivitiesInput[]
    skipDuplicates?: boolean
  }

  export type gymUpsertWithoutActivitiesInput = {
    update: XOR<gymUpdateWithoutActivitiesInput, gymUncheckedUpdateWithoutActivitiesInput>
    create: XOR<gymCreateWithoutActivitiesInput, gymUncheckedCreateWithoutActivitiesInput>
    where?: gymWhereInput
  }

  export type gymUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: gymWhereInput
    data: XOR<gymUpdateWithoutActivitiesInput, gymUncheckedUpdateWithoutActivitiesInput>
  }

  export type gymUpdateWithoutActivitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type gymUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type instructorsUpsertWithoutActivitiesInput = {
    update: XOR<instructorsUpdateWithoutActivitiesInput, instructorsUncheckedUpdateWithoutActivitiesInput>
    create: XOR<instructorsCreateWithoutActivitiesInput, instructorsUncheckedCreateWithoutActivitiesInput>
    where?: instructorsWhereInput
  }

  export type instructorsUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: instructorsWhereInput
    data: XOR<instructorsUpdateWithoutActivitiesInput, instructorsUncheckedUpdateWithoutActivitiesInput>
  }

  export type instructorsUpdateWithoutActivitiesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type instructorsUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type activityPlanningUpsertWithWhereUniqueWithoutActivitiesInput = {
    where: activityPlanningWhereUniqueInput
    update: XOR<activityPlanningUpdateWithoutActivitiesInput, activityPlanningUncheckedUpdateWithoutActivitiesInput>
    create: XOR<activityPlanningCreateWithoutActivitiesInput, activityPlanningUncheckedCreateWithoutActivitiesInput>
  }

  export type activityPlanningUpdateWithWhereUniqueWithoutActivitiesInput = {
    where: activityPlanningWhereUniqueInput
    data: XOR<activityPlanningUpdateWithoutActivitiesInput, activityPlanningUncheckedUpdateWithoutActivitiesInput>
  }

  export type activityPlanningUpdateManyWithWhereWithoutActivitiesInput = {
    where: activityPlanningScalarWhereInput
    data: XOR<activityPlanningUpdateManyMutationInput, activityPlanningUncheckedUpdateManyWithoutActivitiesInput>
  }

  export type activityPlanningScalarWhereInput = {
    AND?: activityPlanningScalarWhereInput | activityPlanningScalarWhereInput[]
    OR?: activityPlanningScalarWhereInput[]
    NOT?: activityPlanningScalarWhereInput | activityPlanningScalarWhereInput[]
    id?: IntFilter<"activityPlanning"> | number
    activityId?: IntFilter<"activityPlanning"> | number
    day?: StringFilter<"activityPlanning"> | string
    startTime?: DateTimeFilter<"activityPlanning"> | Date | string
    active?: BoolNullableFilter<"activityPlanning"> | boolean | null
    endTime?: DateTimeFilter<"activityPlanning"> | Date | string
  }

  export type activitiesCreateWithoutInstructorsInput = {
    name: string
    active?: boolean | null
    description: string
    quota: number
    gym: gymCreateNestedOneWithoutActivitiesInput
    activityPlanning?: activityPlanningCreateNestedManyWithoutActivitiesInput
  }

  export type activitiesUncheckedCreateWithoutInstructorsInput = {
    id?: number
    name: string
    active?: boolean | null
    description: string
    gymId: number
    quota: number
    activityPlanning?: activityPlanningUncheckedCreateNestedManyWithoutActivitiesInput
  }

  export type activitiesCreateOrConnectWithoutInstructorsInput = {
    where: activitiesWhereUniqueInput
    create: XOR<activitiesCreateWithoutInstructorsInput, activitiesUncheckedCreateWithoutInstructorsInput>
  }

  export type activitiesCreateManyInstructorsInputEnvelope = {
    data: activitiesCreateManyInstructorsInput | activitiesCreateManyInstructorsInput[]
    skipDuplicates?: boolean
  }

  export type activitiesUpsertWithWhereUniqueWithoutInstructorsInput = {
    where: activitiesWhereUniqueInput
    update: XOR<activitiesUpdateWithoutInstructorsInput, activitiesUncheckedUpdateWithoutInstructorsInput>
    create: XOR<activitiesCreateWithoutInstructorsInput, activitiesUncheckedCreateWithoutInstructorsInput>
  }

  export type activitiesUpdateWithWhereUniqueWithoutInstructorsInput = {
    where: activitiesWhereUniqueInput
    data: XOR<activitiesUpdateWithoutInstructorsInput, activitiesUncheckedUpdateWithoutInstructorsInput>
  }

  export type activitiesUpdateManyWithWhereWithoutInstructorsInput = {
    where: activitiesScalarWhereInput
    data: XOR<activitiesUpdateManyMutationInput, activitiesUncheckedUpdateManyWithoutInstructorsInput>
  }

  export type activitiesScalarWhereInput = {
    AND?: activitiesScalarWhereInput | activitiesScalarWhereInput[]
    OR?: activitiesScalarWhereInput[]
    NOT?: activitiesScalarWhereInput | activitiesScalarWhereInput[]
    id?: IntFilter<"activities"> | number
    instructorId?: IntNullableFilter<"activities"> | number | null
    name?: StringFilter<"activities"> | string
    active?: BoolNullableFilter<"activities"> | boolean | null
    description?: StringFilter<"activities"> | string
    gymId?: IntFilter<"activities"> | number
    quota?: IntFilter<"activities"> | number
  }

  export type activityPlanningCreateWithoutActivityLogInput = {
    day: string
    startTime: Date | string
    active?: boolean | null
    endTime: Date | string
    activityCancellation?: activityCancellationCreateNestedManyWithoutActivityPlanningInput
    activities: activitiesCreateNestedOneWithoutActivityPlanningInput
  }

  export type activityPlanningUncheckedCreateWithoutActivityLogInput = {
    id?: number
    activityId: number
    day: string
    startTime: Date | string
    active?: boolean | null
    endTime: Date | string
    activityCancellation?: activityCancellationUncheckedCreateNestedManyWithoutActivityPlanningInput
  }

  export type activityPlanningCreateOrConnectWithoutActivityLogInput = {
    where: activityPlanningWhereUniqueInput
    create: XOR<activityPlanningCreateWithoutActivityLogInput, activityPlanningUncheckedCreateWithoutActivityLogInput>
  }

  export type usersCreateWithoutActivityLogInput = {
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    active?: boolean | null
    dateLastActivity?: Date | string | null
    isVerified?: boolean | null
    abonoRemaining?: number
  }

  export type usersUncheckedCreateWithoutActivityLogInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    active?: boolean | null
    dateLastActivity?: Date | string | null
    isVerified?: boolean | null
    abonoRemaining?: number
  }

  export type usersCreateOrConnectWithoutActivityLogInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutActivityLogInput, usersUncheckedCreateWithoutActivityLogInput>
  }

  export type activityPlanningUpsertWithoutActivityLogInput = {
    update: XOR<activityPlanningUpdateWithoutActivityLogInput, activityPlanningUncheckedUpdateWithoutActivityLogInput>
    create: XOR<activityPlanningCreateWithoutActivityLogInput, activityPlanningUncheckedCreateWithoutActivityLogInput>
    where?: activityPlanningWhereInput
  }

  export type activityPlanningUpdateToOneWithWhereWithoutActivityLogInput = {
    where?: activityPlanningWhereInput
    data: XOR<activityPlanningUpdateWithoutActivityLogInput, activityPlanningUncheckedUpdateWithoutActivityLogInput>
  }

  export type activityPlanningUpdateWithoutActivityLogInput = {
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    activityCancellation?: activityCancellationUpdateManyWithoutActivityPlanningNestedInput
    activities?: activitiesUpdateOneRequiredWithoutActivityPlanningNestedInput
  }

  export type activityPlanningUncheckedUpdateWithoutActivityLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    activityCancellation?: activityCancellationUncheckedUpdateManyWithoutActivityPlanningNestedInput
  }

  export type usersUpsertWithoutActivityLogInput = {
    update: XOR<usersUpdateWithoutActivityLogInput, usersUncheckedUpdateWithoutActivityLogInput>
    create: XOR<usersCreateWithoutActivityLogInput, usersUncheckedCreateWithoutActivityLogInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutActivityLogInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutActivityLogInput, usersUncheckedUpdateWithoutActivityLogInput>
  }

  export type usersUpdateWithoutActivityLogInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateLastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    abonoRemaining?: IntFieldUpdateOperationsInput | number
  }

  export type usersUncheckedUpdateWithoutActivityLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    dateLastActivity?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    abonoRemaining?: IntFieldUpdateOperationsInput | number
  }

  export type activityCancellationCreateWithoutActivityPlanningInput = {
    date: Date | string
    reason?: string | null
  }

  export type activityCancellationUncheckedCreateWithoutActivityPlanningInput = {
    id?: number
    date: Date | string
    reason?: string | null
  }

  export type activityCancellationCreateOrConnectWithoutActivityPlanningInput = {
    where: activityCancellationWhereUniqueInput
    create: XOR<activityCancellationCreateWithoutActivityPlanningInput, activityCancellationUncheckedCreateWithoutActivityPlanningInput>
  }

  export type activityCancellationCreateManyActivityPlanningInputEnvelope = {
    data: activityCancellationCreateManyActivityPlanningInput | activityCancellationCreateManyActivityPlanningInput[]
    skipDuplicates?: boolean
  }

  export type activityLogCreateWithoutActivityPlanningInput = {
    status: string
    date: Date | string
    users: usersCreateNestedOneWithoutActivityLogInput
  }

  export type activityLogUncheckedCreateWithoutActivityPlanningInput = {
    id?: number
    participantId: number
    status: string
    date: Date | string
  }

  export type activityLogCreateOrConnectWithoutActivityPlanningInput = {
    where: activityLogWhereUniqueInput
    create: XOR<activityLogCreateWithoutActivityPlanningInput, activityLogUncheckedCreateWithoutActivityPlanningInput>
  }

  export type activityLogCreateManyActivityPlanningInputEnvelope = {
    data: activityLogCreateManyActivityPlanningInput | activityLogCreateManyActivityPlanningInput[]
    skipDuplicates?: boolean
  }

  export type activitiesCreateWithoutActivityPlanningInput = {
    name: string
    active?: boolean | null
    description: string
    quota: number
    gym: gymCreateNestedOneWithoutActivitiesInput
    instructors?: instructorsCreateNestedOneWithoutActivitiesInput
  }

  export type activitiesUncheckedCreateWithoutActivityPlanningInput = {
    id?: number
    instructorId?: number | null
    name: string
    active?: boolean | null
    description: string
    gymId: number
    quota: number
  }

  export type activitiesCreateOrConnectWithoutActivityPlanningInput = {
    where: activitiesWhereUniqueInput
    create: XOR<activitiesCreateWithoutActivityPlanningInput, activitiesUncheckedCreateWithoutActivityPlanningInput>
  }

  export type activityCancellationUpsertWithWhereUniqueWithoutActivityPlanningInput = {
    where: activityCancellationWhereUniqueInput
    update: XOR<activityCancellationUpdateWithoutActivityPlanningInput, activityCancellationUncheckedUpdateWithoutActivityPlanningInput>
    create: XOR<activityCancellationCreateWithoutActivityPlanningInput, activityCancellationUncheckedCreateWithoutActivityPlanningInput>
  }

  export type activityCancellationUpdateWithWhereUniqueWithoutActivityPlanningInput = {
    where: activityCancellationWhereUniqueInput
    data: XOR<activityCancellationUpdateWithoutActivityPlanningInput, activityCancellationUncheckedUpdateWithoutActivityPlanningInput>
  }

  export type activityCancellationUpdateManyWithWhereWithoutActivityPlanningInput = {
    where: activityCancellationScalarWhereInput
    data: XOR<activityCancellationUpdateManyMutationInput, activityCancellationUncheckedUpdateManyWithoutActivityPlanningInput>
  }

  export type activityCancellationScalarWhereInput = {
    AND?: activityCancellationScalarWhereInput | activityCancellationScalarWhereInput[]
    OR?: activityCancellationScalarWhereInput[]
    NOT?: activityCancellationScalarWhereInput | activityCancellationScalarWhereInput[]
    id?: IntFilter<"activityCancellation"> | number
    activityPlanningId?: IntNullableFilter<"activityCancellation"> | number | null
    date?: DateTimeFilter<"activityCancellation"> | Date | string
    reason?: StringNullableFilter<"activityCancellation"> | string | null
  }

  export type activityLogUpsertWithWhereUniqueWithoutActivityPlanningInput = {
    where: activityLogWhereUniqueInput
    update: XOR<activityLogUpdateWithoutActivityPlanningInput, activityLogUncheckedUpdateWithoutActivityPlanningInput>
    create: XOR<activityLogCreateWithoutActivityPlanningInput, activityLogUncheckedCreateWithoutActivityPlanningInput>
  }

  export type activityLogUpdateWithWhereUniqueWithoutActivityPlanningInput = {
    where: activityLogWhereUniqueInput
    data: XOR<activityLogUpdateWithoutActivityPlanningInput, activityLogUncheckedUpdateWithoutActivityPlanningInput>
  }

  export type activityLogUpdateManyWithWhereWithoutActivityPlanningInput = {
    where: activityLogScalarWhereInput
    data: XOR<activityLogUpdateManyMutationInput, activityLogUncheckedUpdateManyWithoutActivityPlanningInput>
  }

  export type activitiesUpsertWithoutActivityPlanningInput = {
    update: XOR<activitiesUpdateWithoutActivityPlanningInput, activitiesUncheckedUpdateWithoutActivityPlanningInput>
    create: XOR<activitiesCreateWithoutActivityPlanningInput, activitiesUncheckedCreateWithoutActivityPlanningInput>
    where?: activitiesWhereInput
  }

  export type activitiesUpdateToOneWithWhereWithoutActivityPlanningInput = {
    where?: activitiesWhereInput
    data: XOR<activitiesUpdateWithoutActivityPlanningInput, activitiesUncheckedUpdateWithoutActivityPlanningInput>
  }

  export type activitiesUpdateWithoutActivityPlanningInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    gym?: gymUpdateOneRequiredWithoutActivitiesNestedInput
    instructors?: instructorsUpdateOneWithoutActivitiesNestedInput
  }

  export type activitiesUncheckedUpdateWithoutActivityPlanningInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructorId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
    gymId?: IntFieldUpdateOperationsInput | number
    quota?: IntFieldUpdateOperationsInput | number
  }

  export type activityPlanningCreateWithoutActivityCancellationInput = {
    day: string
    startTime: Date | string
    active?: boolean | null
    endTime: Date | string
    activityLog?: activityLogCreateNestedManyWithoutActivityPlanningInput
    activities: activitiesCreateNestedOneWithoutActivityPlanningInput
  }

  export type activityPlanningUncheckedCreateWithoutActivityCancellationInput = {
    id?: number
    activityId: number
    day: string
    startTime: Date | string
    active?: boolean | null
    endTime: Date | string
    activityLog?: activityLogUncheckedCreateNestedManyWithoutActivityPlanningInput
  }

  export type activityPlanningCreateOrConnectWithoutActivityCancellationInput = {
    where: activityPlanningWhereUniqueInput
    create: XOR<activityPlanningCreateWithoutActivityCancellationInput, activityPlanningUncheckedCreateWithoutActivityCancellationInput>
  }

  export type activityPlanningUpsertWithoutActivityCancellationInput = {
    update: XOR<activityPlanningUpdateWithoutActivityCancellationInput, activityPlanningUncheckedUpdateWithoutActivityCancellationInput>
    create: XOR<activityPlanningCreateWithoutActivityCancellationInput, activityPlanningUncheckedCreateWithoutActivityCancellationInput>
    where?: activityPlanningWhereInput
  }

  export type activityPlanningUpdateToOneWithWhereWithoutActivityCancellationInput = {
    where?: activityPlanningWhereInput
    data: XOR<activityPlanningUpdateWithoutActivityCancellationInput, activityPlanningUncheckedUpdateWithoutActivityCancellationInput>
  }

  export type activityPlanningUpdateWithoutActivityCancellationInput = {
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLog?: activityLogUpdateManyWithoutActivityPlanningNestedInput
    activities?: activitiesUpdateOneRequiredWithoutActivityPlanningNestedInput
  }

  export type activityPlanningUncheckedUpdateWithoutActivityCancellationInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityId?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    activityLog?: activityLogUncheckedUpdateManyWithoutActivityPlanningNestedInput
  }

  export type activitiesCreateWithoutGymInput = {
    name: string
    active?: boolean | null
    description: string
    quota: number
    instructors?: instructorsCreateNestedOneWithoutActivitiesInput
    activityPlanning?: activityPlanningCreateNestedManyWithoutActivitiesInput
  }

  export type activitiesUncheckedCreateWithoutGymInput = {
    id?: number
    instructorId?: number | null
    name: string
    active?: boolean | null
    description: string
    quota: number
    activityPlanning?: activityPlanningUncheckedCreateNestedManyWithoutActivitiesInput
  }

  export type activitiesCreateOrConnectWithoutGymInput = {
    where: activitiesWhereUniqueInput
    create: XOR<activitiesCreateWithoutGymInput, activitiesUncheckedCreateWithoutGymInput>
  }

  export type activitiesCreateManyGymInputEnvelope = {
    data: activitiesCreateManyGymInput | activitiesCreateManyGymInput[]
    skipDuplicates?: boolean
  }

  export type activitiesUpsertWithWhereUniqueWithoutGymInput = {
    where: activitiesWhereUniqueInput
    update: XOR<activitiesUpdateWithoutGymInput, activitiesUncheckedUpdateWithoutGymInput>
    create: XOR<activitiesCreateWithoutGymInput, activitiesUncheckedCreateWithoutGymInput>
  }

  export type activitiesUpdateWithWhereUniqueWithoutGymInput = {
    where: activitiesWhereUniqueInput
    data: XOR<activitiesUpdateWithoutGymInput, activitiesUncheckedUpdateWithoutGymInput>
  }

  export type activitiesUpdateManyWithWhereWithoutGymInput = {
    where: activitiesScalarWhereInput
    data: XOR<activitiesUpdateManyMutationInput, activitiesUncheckedUpdateManyWithoutGymInput>
  }

  export type activityLogCreateManyUsersInput = {
    id?: number
    activityPlanId: number
    status: string
    date: Date | string
  }

  export type activityLogUpdateWithoutUsersInput = {
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    activityPlanning?: activityPlanningUpdateOneRequiredWithoutActivityLogNestedInput
  }

  export type activityLogUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityPlanId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activityLogUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    activityPlanId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activityPlanningCreateManyActivitiesInput = {
    id?: number
    day: string
    startTime: Date | string
    active?: boolean | null
    endTime: Date | string
  }

  export type activityPlanningUpdateWithoutActivitiesInput = {
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    activityCancellation?: activityCancellationUpdateManyWithoutActivityPlanningNestedInput
    activityLog?: activityLogUpdateManyWithoutActivityPlanningNestedInput
  }

  export type activityPlanningUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    activityCancellation?: activityCancellationUncheckedUpdateManyWithoutActivityPlanningNestedInput
    activityLog?: activityLogUncheckedUpdateManyWithoutActivityPlanningNestedInput
  }

  export type activityPlanningUncheckedUpdateManyWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activitiesCreateManyInstructorsInput = {
    id?: number
    name: string
    active?: boolean | null
    description: string
    gymId: number
    quota: number
  }

  export type activitiesUpdateWithoutInstructorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    gym?: gymUpdateOneRequiredWithoutActivitiesNestedInput
    activityPlanning?: activityPlanningUpdateManyWithoutActivitiesNestedInput
  }

  export type activitiesUncheckedUpdateWithoutInstructorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
    gymId?: IntFieldUpdateOperationsInput | number
    quota?: IntFieldUpdateOperationsInput | number
    activityPlanning?: activityPlanningUncheckedUpdateManyWithoutActivitiesNestedInput
  }

  export type activitiesUncheckedUpdateManyWithoutInstructorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
    gymId?: IntFieldUpdateOperationsInput | number
    quota?: IntFieldUpdateOperationsInput | number
  }

  export type activityCancellationCreateManyActivityPlanningInput = {
    id?: number
    date: Date | string
    reason?: string | null
  }

  export type activityLogCreateManyActivityPlanningInput = {
    id?: number
    participantId: number
    status: string
    date: Date | string
  }

  export type activityCancellationUpdateWithoutActivityPlanningInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type activityCancellationUncheckedUpdateWithoutActivityPlanningInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type activityCancellationUncheckedUpdateManyWithoutActivityPlanningInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type activityLogUpdateWithoutActivityPlanningInput = {
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutActivityLogNestedInput
  }

  export type activityLogUncheckedUpdateWithoutActivityPlanningInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activityLogUncheckedUpdateManyWithoutActivityPlanningInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activitiesCreateManyGymInput = {
    id?: number
    instructorId?: number | null
    name: string
    active?: boolean | null
    description: string
    quota: number
  }

  export type activitiesUpdateWithoutGymInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    instructors?: instructorsUpdateOneWithoutActivitiesNestedInput
    activityPlanning?: activityPlanningUpdateManyWithoutActivitiesNestedInput
  }

  export type activitiesUncheckedUpdateWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructorId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
    activityPlanning?: activityPlanningUncheckedUpdateManyWithoutActivitiesNestedInput
  }

  export type activitiesUncheckedUpdateManyWithoutGymInput = {
    id?: IntFieldUpdateOperationsInput | number
    instructorId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    description?: StringFieldUpdateOperationsInput | string
    quota?: IntFieldUpdateOperationsInput | number
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
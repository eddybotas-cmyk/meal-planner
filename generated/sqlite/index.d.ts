
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Tipo
 * 
 */
export type Tipo = $Result.DefaultSelection<Prisma.$TipoPayload>
/**
 * Model Recetas
 * 
 */
export type Recetas = $Result.DefaultSelection<Prisma.$RecetasPayload>
/**
 * Model Detalle
 * 
 */
export type Detalle = $Result.DefaultSelection<Prisma.$DetallePayload>
/**
 * Model Ingredientes
 * 
 */
export type Ingredientes = $Result.DefaultSelection<Prisma.$IngredientesPayload>
/**
 * Model Unidades
 * 
 */
export type Unidades = $Result.DefaultSelection<Prisma.$UnidadesPayload>
/**
 * Model TieneIng
 * 
 */
export type TieneIng = $Result.DefaultSelection<Prisma.$TieneIngPayload>
/**
 * Model PlanComidas
 * 
 */
export type PlanComidas = $Result.DefaultSelection<Prisma.$PlanComidasPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RolUsuario: {
  ADMIN: 'ADMIN',
  USUARIO: 'USUARIO'
};

export type RolUsuario = (typeof RolUsuario)[keyof typeof RolUsuario]

}

export type RolUsuario = $Enums.RolUsuario

export const RolUsuario: typeof $Enums.RolUsuario

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipo`: Exposes CRUD operations for the **Tipo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipos
    * const tipos = await prisma.tipo.findMany()
    * ```
    */
  get tipo(): Prisma.TipoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recetas`: Exposes CRUD operations for the **Recetas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recetas
    * const recetas = await prisma.recetas.findMany()
    * ```
    */
  get recetas(): Prisma.RecetasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalle`: Exposes CRUD operations for the **Detalle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detalles
    * const detalles = await prisma.detalle.findMany()
    * ```
    */
  get detalle(): Prisma.DetalleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredientes`: Exposes CRUD operations for the **Ingredientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredientes
    * const ingredientes = await prisma.ingredientes.findMany()
    * ```
    */
  get ingredientes(): Prisma.IngredientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unidades`: Exposes CRUD operations for the **Unidades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Unidades
    * const unidades = await prisma.unidades.findMany()
    * ```
    */
  get unidades(): Prisma.UnidadesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tieneIng`: Exposes CRUD operations for the **TieneIng** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TieneIngs
    * const tieneIngs = await prisma.tieneIng.findMany()
    * ```
    */
  get tieneIng(): Prisma.TieneIngDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planComidas`: Exposes CRUD operations for the **PlanComidas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanComidas
    * const planComidas = await prisma.planComidas.findMany()
    * ```
    */
  get planComidas(): Prisma.PlanComidasDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Usuario: 'Usuario',
    Tipo: 'Tipo',
    Recetas: 'Recetas',
    Detalle: 'Detalle',
    Ingredientes: 'Ingredientes',
    Unidades: 'Unidades',
    TieneIng: 'TieneIng',
    PlanComidas: 'PlanComidas'
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
      modelProps: "usuario" | "tipo" | "recetas" | "detalle" | "ingredientes" | "unidades" | "tieneIng" | "planComidas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Tipo: {
        payload: Prisma.$TipoPayload<ExtArgs>
        fields: Prisma.TipoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          findFirst: {
            args: Prisma.TipoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          findMany: {
            args: Prisma.TipoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>[]
          }
          create: {
            args: Prisma.TipoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          createMany: {
            args: Prisma.TipoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>[]
          }
          delete: {
            args: Prisma.TipoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          update: {
            args: Prisma.TipoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          deleteMany: {
            args: Prisma.TipoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>[]
          }
          upsert: {
            args: Prisma.TipoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoPayload>
          }
          aggregate: {
            args: Prisma.TipoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipo>
          }
          groupBy: {
            args: Prisma.TipoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoCountAggregateOutputType> | number
          }
        }
      }
      Recetas: {
        payload: Prisma.$RecetasPayload<ExtArgs>
        fields: Prisma.RecetasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecetasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecetasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetasPayload>
          }
          findFirst: {
            args: Prisma.RecetasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecetasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetasPayload>
          }
          findMany: {
            args: Prisma.RecetasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetasPayload>[]
          }
          create: {
            args: Prisma.RecetasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetasPayload>
          }
          createMany: {
            args: Prisma.RecetasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecetasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetasPayload>[]
          }
          delete: {
            args: Prisma.RecetasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetasPayload>
          }
          update: {
            args: Prisma.RecetasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetasPayload>
          }
          deleteMany: {
            args: Prisma.RecetasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecetasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecetasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetasPayload>[]
          }
          upsert: {
            args: Prisma.RecetasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetasPayload>
          }
          aggregate: {
            args: Prisma.RecetasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecetas>
          }
          groupBy: {
            args: Prisma.RecetasGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecetasGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecetasCountArgs<ExtArgs>
            result: $Utils.Optional<RecetasCountAggregateOutputType> | number
          }
        }
      }
      Detalle: {
        payload: Prisma.$DetallePayload<ExtArgs>
        fields: Prisma.DetalleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetalleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetalleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>
          }
          findFirst: {
            args: Prisma.DetalleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetalleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>
          }
          findMany: {
            args: Prisma.DetalleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>[]
          }
          create: {
            args: Prisma.DetalleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>
          }
          createMany: {
            args: Prisma.DetalleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetalleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>[]
          }
          delete: {
            args: Prisma.DetalleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>
          }
          update: {
            args: Prisma.DetalleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>
          }
          deleteMany: {
            args: Prisma.DetalleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetalleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetalleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>[]
          }
          upsert: {
            args: Prisma.DetalleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallePayload>
          }
          aggregate: {
            args: Prisma.DetalleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalle>
          }
          groupBy: {
            args: Prisma.DetalleGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetalleGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetalleCountArgs<ExtArgs>
            result: $Utils.Optional<DetalleCountAggregateOutputType> | number
          }
        }
      }
      Ingredientes: {
        payload: Prisma.$IngredientesPayload<ExtArgs>
        fields: Prisma.IngredientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientesPayload>
          }
          findFirst: {
            args: Prisma.IngredientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientesPayload>
          }
          findMany: {
            args: Prisma.IngredientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientesPayload>[]
          }
          create: {
            args: Prisma.IngredientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientesPayload>
          }
          createMany: {
            args: Prisma.IngredientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientesPayload>[]
          }
          delete: {
            args: Prisma.IngredientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientesPayload>
          }
          update: {
            args: Prisma.IngredientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientesPayload>
          }
          deleteMany: {
            args: Prisma.IngredientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientesPayload>[]
          }
          upsert: {
            args: Prisma.IngredientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientesPayload>
          }
          aggregate: {
            args: Prisma.IngredientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredientes>
          }
          groupBy: {
            args: Prisma.IngredientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientesCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientesCountAggregateOutputType> | number
          }
        }
      }
      Unidades: {
        payload: Prisma.$UnidadesPayload<ExtArgs>
        fields: Prisma.UnidadesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnidadesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnidadesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadesPayload>
          }
          findFirst: {
            args: Prisma.UnidadesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnidadesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadesPayload>
          }
          findMany: {
            args: Prisma.UnidadesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadesPayload>[]
          }
          create: {
            args: Prisma.UnidadesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadesPayload>
          }
          createMany: {
            args: Prisma.UnidadesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnidadesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadesPayload>[]
          }
          delete: {
            args: Prisma.UnidadesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadesPayload>
          }
          update: {
            args: Prisma.UnidadesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadesPayload>
          }
          deleteMany: {
            args: Prisma.UnidadesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnidadesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnidadesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadesPayload>[]
          }
          upsert: {
            args: Prisma.UnidadesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadesPayload>
          }
          aggregate: {
            args: Prisma.UnidadesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnidades>
          }
          groupBy: {
            args: Prisma.UnidadesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnidadesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnidadesCountArgs<ExtArgs>
            result: $Utils.Optional<UnidadesCountAggregateOutputType> | number
          }
        }
      }
      TieneIng: {
        payload: Prisma.$TieneIngPayload<ExtArgs>
        fields: Prisma.TieneIngFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TieneIngFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TieneIngPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TieneIngFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TieneIngPayload>
          }
          findFirst: {
            args: Prisma.TieneIngFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TieneIngPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TieneIngFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TieneIngPayload>
          }
          findMany: {
            args: Prisma.TieneIngFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TieneIngPayload>[]
          }
          create: {
            args: Prisma.TieneIngCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TieneIngPayload>
          }
          createMany: {
            args: Prisma.TieneIngCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TieneIngCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TieneIngPayload>[]
          }
          delete: {
            args: Prisma.TieneIngDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TieneIngPayload>
          }
          update: {
            args: Prisma.TieneIngUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TieneIngPayload>
          }
          deleteMany: {
            args: Prisma.TieneIngDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TieneIngUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TieneIngUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TieneIngPayload>[]
          }
          upsert: {
            args: Prisma.TieneIngUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TieneIngPayload>
          }
          aggregate: {
            args: Prisma.TieneIngAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTieneIng>
          }
          groupBy: {
            args: Prisma.TieneIngGroupByArgs<ExtArgs>
            result: $Utils.Optional<TieneIngGroupByOutputType>[]
          }
          count: {
            args: Prisma.TieneIngCountArgs<ExtArgs>
            result: $Utils.Optional<TieneIngCountAggregateOutputType> | number
          }
        }
      }
      PlanComidas: {
        payload: Prisma.$PlanComidasPayload<ExtArgs>
        fields: Prisma.PlanComidasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanComidasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanComidasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanComidasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanComidasPayload>
          }
          findFirst: {
            args: Prisma.PlanComidasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanComidasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanComidasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanComidasPayload>
          }
          findMany: {
            args: Prisma.PlanComidasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanComidasPayload>[]
          }
          create: {
            args: Prisma.PlanComidasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanComidasPayload>
          }
          createMany: {
            args: Prisma.PlanComidasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanComidasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanComidasPayload>[]
          }
          delete: {
            args: Prisma.PlanComidasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanComidasPayload>
          }
          update: {
            args: Prisma.PlanComidasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanComidasPayload>
          }
          deleteMany: {
            args: Prisma.PlanComidasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanComidasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanComidasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanComidasPayload>[]
          }
          upsert: {
            args: Prisma.PlanComidasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanComidasPayload>
          }
          aggregate: {
            args: Prisma.PlanComidasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanComidas>
          }
          groupBy: {
            args: Prisma.PlanComidasGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanComidasGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanComidasCountArgs<ExtArgs>
            result: $Utils.Optional<PlanComidasCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    usuario?: UsuarioOmit
    tipo?: TipoOmit
    recetas?: RecetasOmit
    detalle?: DetalleOmit
    ingredientes?: IngredientesOmit
    unidades?: UnidadesOmit
    tieneIng?: TieneIngOmit
    planComidas?: PlanComidasOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    recetas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recetas?: boolean | UsuarioCountOutputTypeCountRecetasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRecetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecetasWhereInput
  }


  /**
   * Count Type TipoCountOutputType
   */

  export type TipoCountOutputType = {
    recetas: number
  }

  export type TipoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recetas?: boolean | TipoCountOutputTypeCountRecetasArgs
  }

  // Custom InputTypes
  /**
   * TipoCountOutputType without action
   */
  export type TipoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCountOutputType
     */
    select?: TipoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoCountOutputType without action
   */
  export type TipoCountOutputTypeCountRecetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecetasWhereInput
  }


  /**
   * Count Type RecetasCountOutputType
   */

  export type RecetasCountOutputType = {
    detalles: number
    tieneIng: number
    planes: number
  }

  export type RecetasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | RecetasCountOutputTypeCountDetallesArgs
    tieneIng?: boolean | RecetasCountOutputTypeCountTieneIngArgs
    planes?: boolean | RecetasCountOutputTypeCountPlanesArgs
  }

  // Custom InputTypes
  /**
   * RecetasCountOutputType without action
   */
  export type RecetasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetasCountOutputType
     */
    select?: RecetasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecetasCountOutputType without action
   */
  export type RecetasCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleWhereInput
  }

  /**
   * RecetasCountOutputType without action
   */
  export type RecetasCountOutputTypeCountTieneIngArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TieneIngWhereInput
  }

  /**
   * RecetasCountOutputType without action
   */
  export type RecetasCountOutputTypeCountPlanesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanComidasWhereInput
  }


  /**
   * Count Type IngredientesCountOutputType
   */

  export type IngredientesCountOutputType = {
    recetas: number
  }

  export type IngredientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recetas?: boolean | IngredientesCountOutputTypeCountRecetasArgs
  }

  // Custom InputTypes
  /**
   * IngredientesCountOutputType without action
   */
  export type IngredientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientesCountOutputType
     */
    select?: IngredientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientesCountOutputType without action
   */
  export type IngredientesCountOutputTypeCountRecetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TieneIngWhereInput
  }


  /**
   * Count Type UnidadesCountOutputType
   */

  export type UnidadesCountOutputType = {
    ingredientes: number
  }

  export type UnidadesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredientes?: boolean | UnidadesCountOutputTypeCountIngredientesArgs
  }

  // Custom InputTypes
  /**
   * UnidadesCountOutputType without action
   */
  export type UnidadesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadesCountOutputType
     */
    select?: UnidadesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnidadesCountOutputType without action
   */
  export type UnidadesCountOutputTypeCountIngredientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TieneIngWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    email: string | null
    password: string | null
    rol: $Enums.RolUsuario | null
    creado: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    email: string | null
    password: string | null
    rol: $Enums.RolUsuario | null
    creado: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nombre: number
    email: number
    password: number
    rol: number
    creado: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nombre?: true
    email?: true
    password?: true
    rol?: true
    creado?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nombre?: true
    email?: true
    password?: true
    rol?: true
    creado?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nombre?: true
    email?: true
    password?: true
    rol?: true
    creado?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nombre: string
    email: string
    password: string
    rol: $Enums.RolUsuario
    creado: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    creado?: boolean
    recetas?: boolean | Usuario$recetasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    creado?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    creado?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id_usuario?: boolean
    nombre?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    creado?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre" | "email" | "password" | "rol" | "creado", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recetas?: boolean | Usuario$recetasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      recetas: Prisma.$RecetasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre: string
      email: string
      password: string
      rol: $Enums.RolUsuario
      creado: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recetas<T extends Usuario$recetasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$recetasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id_usuario: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'RolUsuario'>
    readonly creado: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.recetas
   */
  export type Usuario$recetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recetas
     */
    select?: RecetasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recetas
     */
    omit?: RecetasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetasInclude<ExtArgs> | null
    where?: RecetasWhereInput
    orderBy?: RecetasOrderByWithRelationInput | RecetasOrderByWithRelationInput[]
    cursor?: RecetasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecetasScalarFieldEnum | RecetasScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Tipo
   */

  export type AggregateTipo = {
    _count: TipoCountAggregateOutputType | null
    _avg: TipoAvgAggregateOutputType | null
    _sum: TipoSumAggregateOutputType | null
    _min: TipoMinAggregateOutputType | null
    _max: TipoMaxAggregateOutputType | null
  }

  export type TipoAvgAggregateOutputType = {
    id_tipo: number | null
  }

  export type TipoSumAggregateOutputType = {
    id_tipo: number | null
  }

  export type TipoMinAggregateOutputType = {
    id_tipo: number | null
    tipo: string | null
  }

  export type TipoMaxAggregateOutputType = {
    id_tipo: number | null
    tipo: string | null
  }

  export type TipoCountAggregateOutputType = {
    id_tipo: number
    tipo: number
    _all: number
  }


  export type TipoAvgAggregateInputType = {
    id_tipo?: true
  }

  export type TipoSumAggregateInputType = {
    id_tipo?: true
  }

  export type TipoMinAggregateInputType = {
    id_tipo?: true
    tipo?: true
  }

  export type TipoMaxAggregateInputType = {
    id_tipo?: true
    tipo?: true
  }

  export type TipoCountAggregateInputType = {
    id_tipo?: true
    tipo?: true
    _all?: true
  }

  export type TipoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tipo to aggregate.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tipos
    **/
    _count?: true | TipoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoMaxAggregateInputType
  }

  export type GetTipoAggregateType<T extends TipoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipo[P]>
      : GetScalarType<T[P], AggregateTipo[P]>
  }




  export type TipoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoWhereInput
    orderBy?: TipoOrderByWithAggregationInput | TipoOrderByWithAggregationInput[]
    by: TipoScalarFieldEnum[] | TipoScalarFieldEnum
    having?: TipoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoCountAggregateInputType | true
    _avg?: TipoAvgAggregateInputType
    _sum?: TipoSumAggregateInputType
    _min?: TipoMinAggregateInputType
    _max?: TipoMaxAggregateInputType
  }

  export type TipoGroupByOutputType = {
    id_tipo: number
    tipo: string
    _count: TipoCountAggregateOutputType | null
    _avg: TipoAvgAggregateOutputType | null
    _sum: TipoSumAggregateOutputType | null
    _min: TipoMinAggregateOutputType | null
    _max: TipoMaxAggregateOutputType | null
  }

  type GetTipoGroupByPayload<T extends TipoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoGroupByOutputType[P]>
        }
      >
    >


  export type TipoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo?: boolean
    tipo?: boolean
    recetas?: boolean | Tipo$recetasArgs<ExtArgs>
    _count?: boolean | TipoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipo"]>

  export type TipoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["tipo"]>

  export type TipoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipo?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["tipo"]>

  export type TipoSelectScalar = {
    id_tipo?: boolean
    tipo?: boolean
  }

  export type TipoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tipo" | "tipo", ExtArgs["result"]["tipo"]>
  export type TipoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recetas?: boolean | Tipo$recetasArgs<ExtArgs>
    _count?: boolean | TipoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tipo"
    objects: {
      recetas: Prisma.$RecetasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tipo: number
      tipo: string
    }, ExtArgs["result"]["tipo"]>
    composites: {}
  }

  type TipoGetPayload<S extends boolean | null | undefined | TipoDefaultArgs> = $Result.GetResult<Prisma.$TipoPayload, S>

  type TipoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoCountAggregateInputType | true
    }

  export interface TipoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tipo'], meta: { name: 'Tipo' } }
    /**
     * Find zero or one Tipo that matches the filter.
     * @param {TipoFindUniqueArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoFindUniqueArgs>(args: SelectSubset<T, TipoFindUniqueArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoFindUniqueOrThrowArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoFindFirstArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoFindFirstArgs>(args?: SelectSubset<T, TipoFindFirstArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoFindFirstOrThrowArgs} args - Arguments to find a Tipo
     * @example
     * // Get one Tipo
     * const tipo = await prisma.tipo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipos
     * const tipos = await prisma.tipo.findMany()
     * 
     * // Get first 10 Tipos
     * const tipos = await prisma.tipo.findMany({ take: 10 })
     * 
     * // Only select the `id_tipo`
     * const tipoWithId_tipoOnly = await prisma.tipo.findMany({ select: { id_tipo: true } })
     * 
     */
    findMany<T extends TipoFindManyArgs>(args?: SelectSubset<T, TipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipo.
     * @param {TipoCreateArgs} args - Arguments to create a Tipo.
     * @example
     * // Create one Tipo
     * const Tipo = await prisma.tipo.create({
     *   data: {
     *     // ... data to create a Tipo
     *   }
     * })
     * 
     */
    create<T extends TipoCreateArgs>(args: SelectSubset<T, TipoCreateArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipos.
     * @param {TipoCreateManyArgs} args - Arguments to create many Tipos.
     * @example
     * // Create many Tipos
     * const tipo = await prisma.tipo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoCreateManyArgs>(args?: SelectSubset<T, TipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipos and returns the data saved in the database.
     * @param {TipoCreateManyAndReturnArgs} args - Arguments to create many Tipos.
     * @example
     * // Create many Tipos
     * const tipo = await prisma.tipo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipos and only return the `id_tipo`
     * const tipoWithId_tipoOnly = await prisma.tipo.createManyAndReturn({
     *   select: { id_tipo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipo.
     * @param {TipoDeleteArgs} args - Arguments to delete one Tipo.
     * @example
     * // Delete one Tipo
     * const Tipo = await prisma.tipo.delete({
     *   where: {
     *     // ... filter to delete one Tipo
     *   }
     * })
     * 
     */
    delete<T extends TipoDeleteArgs>(args: SelectSubset<T, TipoDeleteArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipo.
     * @param {TipoUpdateArgs} args - Arguments to update one Tipo.
     * @example
     * // Update one Tipo
     * const tipo = await prisma.tipo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoUpdateArgs>(args: SelectSubset<T, TipoUpdateArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipos.
     * @param {TipoDeleteManyArgs} args - Arguments to filter Tipos to delete.
     * @example
     * // Delete a few Tipos
     * const { count } = await prisma.tipo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoDeleteManyArgs>(args?: SelectSubset<T, TipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipos
     * const tipo = await prisma.tipo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoUpdateManyArgs>(args: SelectSubset<T, TipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipos and returns the data updated in the database.
     * @param {TipoUpdateManyAndReturnArgs} args - Arguments to update many Tipos.
     * @example
     * // Update many Tipos
     * const tipo = await prisma.tipo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipos and only return the `id_tipo`
     * const tipoWithId_tipoOnly = await prisma.tipo.updateManyAndReturn({
     *   select: { id_tipo: true },
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
    updateManyAndReturn<T extends TipoUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipo.
     * @param {TipoUpsertArgs} args - Arguments to update or create a Tipo.
     * @example
     * // Update or create a Tipo
     * const tipo = await prisma.tipo.upsert({
     *   create: {
     *     // ... data to create a Tipo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipo we want to update
     *   }
     * })
     */
    upsert<T extends TipoUpsertArgs>(args: SelectSubset<T, TipoUpsertArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCountArgs} args - Arguments to filter Tipos to count.
     * @example
     * // Count the number of Tipos
     * const count = await prisma.tipo.count({
     *   where: {
     *     // ... the filter for the Tipos we want to count
     *   }
     * })
    **/
    count<T extends TipoCountArgs>(
      args?: Subset<T, TipoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoAggregateArgs>(args: Subset<T, TipoAggregateArgs>): Prisma.PrismaPromise<GetTipoAggregateType<T>>

    /**
     * Group by Tipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoGroupByArgs} args - Group by arguments.
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
      T extends TipoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoGroupByArgs['orderBy'] }
        : { orderBy?: TipoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tipo model
   */
  readonly fields: TipoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tipo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recetas<T extends Tipo$recetasArgs<ExtArgs> = {}>(args?: Subset<T, Tipo$recetasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tipo model
   */
  interface TipoFieldRefs {
    readonly id_tipo: FieldRef<"Tipo", 'Int'>
    readonly tipo: FieldRef<"Tipo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tipo findUnique
   */
  export type TipoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo findUniqueOrThrow
   */
  export type TipoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo findFirst
   */
  export type TipoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tipos.
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tipos.
     */
    distinct?: TipoScalarFieldEnum | TipoScalarFieldEnum[]
  }

  /**
   * Tipo findFirstOrThrow
   */
  export type TipoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipo to fetch.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tipos.
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tipos.
     */
    distinct?: TipoScalarFieldEnum | TipoScalarFieldEnum[]
  }

  /**
   * Tipo findMany
   */
  export type TipoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter, which Tipos to fetch.
     */
    where?: TipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tipos to fetch.
     */
    orderBy?: TipoOrderByWithRelationInput | TipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tipos.
     */
    cursor?: TipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tipos.
     */
    skip?: number
    distinct?: TipoScalarFieldEnum | TipoScalarFieldEnum[]
  }

  /**
   * Tipo create
   */
  export type TipoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * The data needed to create a Tipo.
     */
    data: XOR<TipoCreateInput, TipoUncheckedCreateInput>
  }

  /**
   * Tipo createMany
   */
  export type TipoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tipos.
     */
    data: TipoCreateManyInput | TipoCreateManyInput[]
  }

  /**
   * Tipo createManyAndReturn
   */
  export type TipoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * The data used to create many Tipos.
     */
    data: TipoCreateManyInput | TipoCreateManyInput[]
  }

  /**
   * Tipo update
   */
  export type TipoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * The data needed to update a Tipo.
     */
    data: XOR<TipoUpdateInput, TipoUncheckedUpdateInput>
    /**
     * Choose, which Tipo to update.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo updateMany
   */
  export type TipoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tipos.
     */
    data: XOR<TipoUpdateManyMutationInput, TipoUncheckedUpdateManyInput>
    /**
     * Filter which Tipos to update
     */
    where?: TipoWhereInput
    /**
     * Limit how many Tipos to update.
     */
    limit?: number
  }

  /**
   * Tipo updateManyAndReturn
   */
  export type TipoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * The data used to update Tipos.
     */
    data: XOR<TipoUpdateManyMutationInput, TipoUncheckedUpdateManyInput>
    /**
     * Filter which Tipos to update
     */
    where?: TipoWhereInput
    /**
     * Limit how many Tipos to update.
     */
    limit?: number
  }

  /**
   * Tipo upsert
   */
  export type TipoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * The filter to search for the Tipo to update in case it exists.
     */
    where: TipoWhereUniqueInput
    /**
     * In case the Tipo found by the `where` argument doesn't exist, create a new Tipo with this data.
     */
    create: XOR<TipoCreateInput, TipoUncheckedCreateInput>
    /**
     * In case the Tipo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoUpdateInput, TipoUncheckedUpdateInput>
  }

  /**
   * Tipo delete
   */
  export type TipoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
    /**
     * Filter which Tipo to delete.
     */
    where: TipoWhereUniqueInput
  }

  /**
   * Tipo deleteMany
   */
  export type TipoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tipos to delete
     */
    where?: TipoWhereInput
    /**
     * Limit how many Tipos to delete.
     */
    limit?: number
  }

  /**
   * Tipo.recetas
   */
  export type Tipo$recetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recetas
     */
    select?: RecetasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recetas
     */
    omit?: RecetasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetasInclude<ExtArgs> | null
    where?: RecetasWhereInput
    orderBy?: RecetasOrderByWithRelationInput | RecetasOrderByWithRelationInput[]
    cursor?: RecetasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecetasScalarFieldEnum | RecetasScalarFieldEnum[]
  }

  /**
   * Tipo without action
   */
  export type TipoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipo
     */
    select?: TipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tipo
     */
    omit?: TipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoInclude<ExtArgs> | null
  }


  /**
   * Model Recetas
   */

  export type AggregateRecetas = {
    _count: RecetasCountAggregateOutputType | null
    _avg: RecetasAvgAggregateOutputType | null
    _sum: RecetasSumAggregateOutputType | null
    _min: RecetasMinAggregateOutputType | null
    _max: RecetasMaxAggregateOutputType | null
  }

  export type RecetasAvgAggregateOutputType = {
    id_receta: number | null
    id_tipo: number | null
    id_usuario: number | null
  }

  export type RecetasSumAggregateOutputType = {
    id_receta: number | null
    id_tipo: number | null
    id_usuario: number | null
  }

  export type RecetasMinAggregateOutputType = {
    id_receta: number | null
    nombre: string | null
    id_tipo: number | null
    id_usuario: number | null
  }

  export type RecetasMaxAggregateOutputType = {
    id_receta: number | null
    nombre: string | null
    id_tipo: number | null
    id_usuario: number | null
  }

  export type RecetasCountAggregateOutputType = {
    id_receta: number
    nombre: number
    id_tipo: number
    id_usuario: number
    _all: number
  }


  export type RecetasAvgAggregateInputType = {
    id_receta?: true
    id_tipo?: true
    id_usuario?: true
  }

  export type RecetasSumAggregateInputType = {
    id_receta?: true
    id_tipo?: true
    id_usuario?: true
  }

  export type RecetasMinAggregateInputType = {
    id_receta?: true
    nombre?: true
    id_tipo?: true
    id_usuario?: true
  }

  export type RecetasMaxAggregateInputType = {
    id_receta?: true
    nombre?: true
    id_tipo?: true
    id_usuario?: true
  }

  export type RecetasCountAggregateInputType = {
    id_receta?: true
    nombre?: true
    id_tipo?: true
    id_usuario?: true
    _all?: true
  }

  export type RecetasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recetas to aggregate.
     */
    where?: RecetasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recetas to fetch.
     */
    orderBy?: RecetasOrderByWithRelationInput | RecetasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecetasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recetas
    **/
    _count?: true | RecetasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecetasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecetasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecetasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecetasMaxAggregateInputType
  }

  export type GetRecetasAggregateType<T extends RecetasAggregateArgs> = {
        [P in keyof T & keyof AggregateRecetas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecetas[P]>
      : GetScalarType<T[P], AggregateRecetas[P]>
  }




  export type RecetasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecetasWhereInput
    orderBy?: RecetasOrderByWithAggregationInput | RecetasOrderByWithAggregationInput[]
    by: RecetasScalarFieldEnum[] | RecetasScalarFieldEnum
    having?: RecetasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecetasCountAggregateInputType | true
    _avg?: RecetasAvgAggregateInputType
    _sum?: RecetasSumAggregateInputType
    _min?: RecetasMinAggregateInputType
    _max?: RecetasMaxAggregateInputType
  }

  export type RecetasGroupByOutputType = {
    id_receta: number
    nombre: string
    id_tipo: number
    id_usuario: number
    _count: RecetasCountAggregateOutputType | null
    _avg: RecetasAvgAggregateOutputType | null
    _sum: RecetasSumAggregateOutputType | null
    _min: RecetasMinAggregateOutputType | null
    _max: RecetasMaxAggregateOutputType | null
  }

  type GetRecetasGroupByPayload<T extends RecetasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecetasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecetasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecetasGroupByOutputType[P]>
            : GetScalarType<T[P], RecetasGroupByOutputType[P]>
        }
      >
    >


  export type RecetasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_receta?: boolean
    nombre?: boolean
    id_tipo?: boolean
    id_usuario?: boolean
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    detalles?: boolean | Recetas$detallesArgs<ExtArgs>
    tieneIng?: boolean | Recetas$tieneIngArgs<ExtArgs>
    planes?: boolean | Recetas$planesArgs<ExtArgs>
    _count?: boolean | RecetasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recetas"]>

  export type RecetasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_receta?: boolean
    nombre?: boolean
    id_tipo?: boolean
    id_usuario?: boolean
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recetas"]>

  export type RecetasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_receta?: boolean
    nombre?: boolean
    id_tipo?: boolean
    id_usuario?: boolean
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recetas"]>

  export type RecetasSelectScalar = {
    id_receta?: boolean
    nombre?: boolean
    id_tipo?: boolean
    id_usuario?: boolean
  }

  export type RecetasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_receta" | "nombre" | "id_tipo" | "id_usuario", ExtArgs["result"]["recetas"]>
  export type RecetasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    detalles?: boolean | Recetas$detallesArgs<ExtArgs>
    tieneIng?: boolean | Recetas$tieneIngArgs<ExtArgs>
    planes?: boolean | Recetas$planesArgs<ExtArgs>
    _count?: boolean | RecetasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecetasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RecetasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $RecetasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recetas"
    objects: {
      tipo: Prisma.$TipoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      detalles: Prisma.$DetallePayload<ExtArgs>[]
      tieneIng: Prisma.$TieneIngPayload<ExtArgs>[]
      planes: Prisma.$PlanComidasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_receta: number
      nombre: string
      id_tipo: number
      id_usuario: number
    }, ExtArgs["result"]["recetas"]>
    composites: {}
  }

  type RecetasGetPayload<S extends boolean | null | undefined | RecetasDefaultArgs> = $Result.GetResult<Prisma.$RecetasPayload, S>

  type RecetasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecetasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecetasCountAggregateInputType | true
    }

  export interface RecetasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recetas'], meta: { name: 'Recetas' } }
    /**
     * Find zero or one Recetas that matches the filter.
     * @param {RecetasFindUniqueArgs} args - Arguments to find a Recetas
     * @example
     * // Get one Recetas
     * const recetas = await prisma.recetas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecetasFindUniqueArgs>(args: SelectSubset<T, RecetasFindUniqueArgs<ExtArgs>>): Prisma__RecetasClient<$Result.GetResult<Prisma.$RecetasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recetas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecetasFindUniqueOrThrowArgs} args - Arguments to find a Recetas
     * @example
     * // Get one Recetas
     * const recetas = await prisma.recetas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecetasFindUniqueOrThrowArgs>(args: SelectSubset<T, RecetasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecetasClient<$Result.GetResult<Prisma.$RecetasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetasFindFirstArgs} args - Arguments to find a Recetas
     * @example
     * // Get one Recetas
     * const recetas = await prisma.recetas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecetasFindFirstArgs>(args?: SelectSubset<T, RecetasFindFirstArgs<ExtArgs>>): Prisma__RecetasClient<$Result.GetResult<Prisma.$RecetasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recetas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetasFindFirstOrThrowArgs} args - Arguments to find a Recetas
     * @example
     * // Get one Recetas
     * const recetas = await prisma.recetas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecetasFindFirstOrThrowArgs>(args?: SelectSubset<T, RecetasFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecetasClient<$Result.GetResult<Prisma.$RecetasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recetas
     * const recetas = await prisma.recetas.findMany()
     * 
     * // Get first 10 Recetas
     * const recetas = await prisma.recetas.findMany({ take: 10 })
     * 
     * // Only select the `id_receta`
     * const recetasWithId_recetaOnly = await prisma.recetas.findMany({ select: { id_receta: true } })
     * 
     */
    findMany<T extends RecetasFindManyArgs>(args?: SelectSubset<T, RecetasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recetas.
     * @param {RecetasCreateArgs} args - Arguments to create a Recetas.
     * @example
     * // Create one Recetas
     * const Recetas = await prisma.recetas.create({
     *   data: {
     *     // ... data to create a Recetas
     *   }
     * })
     * 
     */
    create<T extends RecetasCreateArgs>(args: SelectSubset<T, RecetasCreateArgs<ExtArgs>>): Prisma__RecetasClient<$Result.GetResult<Prisma.$RecetasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recetas.
     * @param {RecetasCreateManyArgs} args - Arguments to create many Recetas.
     * @example
     * // Create many Recetas
     * const recetas = await prisma.recetas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecetasCreateManyArgs>(args?: SelectSubset<T, RecetasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recetas and returns the data saved in the database.
     * @param {RecetasCreateManyAndReturnArgs} args - Arguments to create many Recetas.
     * @example
     * // Create many Recetas
     * const recetas = await prisma.recetas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recetas and only return the `id_receta`
     * const recetasWithId_recetaOnly = await prisma.recetas.createManyAndReturn({
     *   select: { id_receta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecetasCreateManyAndReturnArgs>(args?: SelectSubset<T, RecetasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recetas.
     * @param {RecetasDeleteArgs} args - Arguments to delete one Recetas.
     * @example
     * // Delete one Recetas
     * const Recetas = await prisma.recetas.delete({
     *   where: {
     *     // ... filter to delete one Recetas
     *   }
     * })
     * 
     */
    delete<T extends RecetasDeleteArgs>(args: SelectSubset<T, RecetasDeleteArgs<ExtArgs>>): Prisma__RecetasClient<$Result.GetResult<Prisma.$RecetasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recetas.
     * @param {RecetasUpdateArgs} args - Arguments to update one Recetas.
     * @example
     * // Update one Recetas
     * const recetas = await prisma.recetas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecetasUpdateArgs>(args: SelectSubset<T, RecetasUpdateArgs<ExtArgs>>): Prisma__RecetasClient<$Result.GetResult<Prisma.$RecetasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recetas.
     * @param {RecetasDeleteManyArgs} args - Arguments to filter Recetas to delete.
     * @example
     * // Delete a few Recetas
     * const { count } = await prisma.recetas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecetasDeleteManyArgs>(args?: SelectSubset<T, RecetasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recetas
     * const recetas = await prisma.recetas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecetasUpdateManyArgs>(args: SelectSubset<T, RecetasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recetas and returns the data updated in the database.
     * @param {RecetasUpdateManyAndReturnArgs} args - Arguments to update many Recetas.
     * @example
     * // Update many Recetas
     * const recetas = await prisma.recetas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recetas and only return the `id_receta`
     * const recetasWithId_recetaOnly = await prisma.recetas.updateManyAndReturn({
     *   select: { id_receta: true },
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
    updateManyAndReturn<T extends RecetasUpdateManyAndReturnArgs>(args: SelectSubset<T, RecetasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recetas.
     * @param {RecetasUpsertArgs} args - Arguments to update or create a Recetas.
     * @example
     * // Update or create a Recetas
     * const recetas = await prisma.recetas.upsert({
     *   create: {
     *     // ... data to create a Recetas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recetas we want to update
     *   }
     * })
     */
    upsert<T extends RecetasUpsertArgs>(args: SelectSubset<T, RecetasUpsertArgs<ExtArgs>>): Prisma__RecetasClient<$Result.GetResult<Prisma.$RecetasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetasCountArgs} args - Arguments to filter Recetas to count.
     * @example
     * // Count the number of Recetas
     * const count = await prisma.recetas.count({
     *   where: {
     *     // ... the filter for the Recetas we want to count
     *   }
     * })
    **/
    count<T extends RecetasCountArgs>(
      args?: Subset<T, RecetasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecetasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecetasAggregateArgs>(args: Subset<T, RecetasAggregateArgs>): Prisma.PrismaPromise<GetRecetasAggregateType<T>>

    /**
     * Group by Recetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetasGroupByArgs} args - Group by arguments.
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
      T extends RecetasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecetasGroupByArgs['orderBy'] }
        : { orderBy?: RecetasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecetasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecetasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recetas model
   */
  readonly fields: RecetasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recetas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecetasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipo<T extends TipoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoDefaultArgs<ExtArgs>>): Prisma__TipoClient<$Result.GetResult<Prisma.$TipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detalles<T extends Recetas$detallesArgs<ExtArgs> = {}>(args?: Subset<T, Recetas$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tieneIng<T extends Recetas$tieneIngArgs<ExtArgs> = {}>(args?: Subset<T, Recetas$tieneIngArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TieneIngPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    planes<T extends Recetas$planesArgs<ExtArgs> = {}>(args?: Subset<T, Recetas$planesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanComidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Recetas model
   */
  interface RecetasFieldRefs {
    readonly id_receta: FieldRef<"Recetas", 'Int'>
    readonly nombre: FieldRef<"Recetas", 'String'>
    readonly id_tipo: FieldRef<"Recetas", 'Int'>
    readonly id_usuario: FieldRef<"Recetas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Recetas findUnique
   */
  export type RecetasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recetas
     */
    select?: RecetasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recetas
     */
    omit?: RecetasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetasInclude<ExtArgs> | null
    /**
     * Filter, which Recetas to fetch.
     */
    where: RecetasWhereUniqueInput
  }

  /**
   * Recetas findUniqueOrThrow
   */
  export type RecetasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recetas
     */
    select?: RecetasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recetas
     */
    omit?: RecetasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetasInclude<ExtArgs> | null
    /**
     * Filter, which Recetas to fetch.
     */
    where: RecetasWhereUniqueInput
  }

  /**
   * Recetas findFirst
   */
  export type RecetasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recetas
     */
    select?: RecetasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recetas
     */
    omit?: RecetasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetasInclude<ExtArgs> | null
    /**
     * Filter, which Recetas to fetch.
     */
    where?: RecetasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recetas to fetch.
     */
    orderBy?: RecetasOrderByWithRelationInput | RecetasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recetas.
     */
    cursor?: RecetasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recetas.
     */
    distinct?: RecetasScalarFieldEnum | RecetasScalarFieldEnum[]
  }

  /**
   * Recetas findFirstOrThrow
   */
  export type RecetasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recetas
     */
    select?: RecetasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recetas
     */
    omit?: RecetasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetasInclude<ExtArgs> | null
    /**
     * Filter, which Recetas to fetch.
     */
    where?: RecetasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recetas to fetch.
     */
    orderBy?: RecetasOrderByWithRelationInput | RecetasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recetas.
     */
    cursor?: RecetasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recetas.
     */
    distinct?: RecetasScalarFieldEnum | RecetasScalarFieldEnum[]
  }

  /**
   * Recetas findMany
   */
  export type RecetasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recetas
     */
    select?: RecetasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recetas
     */
    omit?: RecetasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetasInclude<ExtArgs> | null
    /**
     * Filter, which Recetas to fetch.
     */
    where?: RecetasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recetas to fetch.
     */
    orderBy?: RecetasOrderByWithRelationInput | RecetasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recetas.
     */
    cursor?: RecetasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recetas.
     */
    skip?: number
    distinct?: RecetasScalarFieldEnum | RecetasScalarFieldEnum[]
  }

  /**
   * Recetas create
   */
  export type RecetasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recetas
     */
    select?: RecetasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recetas
     */
    omit?: RecetasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetasInclude<ExtArgs> | null
    /**
     * The data needed to create a Recetas.
     */
    data: XOR<RecetasCreateInput, RecetasUncheckedCreateInput>
  }

  /**
   * Recetas createMany
   */
  export type RecetasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recetas.
     */
    data: RecetasCreateManyInput | RecetasCreateManyInput[]
  }

  /**
   * Recetas createManyAndReturn
   */
  export type RecetasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recetas
     */
    select?: RecetasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recetas
     */
    omit?: RecetasOmit<ExtArgs> | null
    /**
     * The data used to create many Recetas.
     */
    data: RecetasCreateManyInput | RecetasCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recetas update
   */
  export type RecetasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recetas
     */
    select?: RecetasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recetas
     */
    omit?: RecetasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetasInclude<ExtArgs> | null
    /**
     * The data needed to update a Recetas.
     */
    data: XOR<RecetasUpdateInput, RecetasUncheckedUpdateInput>
    /**
     * Choose, which Recetas to update.
     */
    where: RecetasWhereUniqueInput
  }

  /**
   * Recetas updateMany
   */
  export type RecetasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recetas.
     */
    data: XOR<RecetasUpdateManyMutationInput, RecetasUncheckedUpdateManyInput>
    /**
     * Filter which Recetas to update
     */
    where?: RecetasWhereInput
    /**
     * Limit how many Recetas to update.
     */
    limit?: number
  }

  /**
   * Recetas updateManyAndReturn
   */
  export type RecetasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recetas
     */
    select?: RecetasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recetas
     */
    omit?: RecetasOmit<ExtArgs> | null
    /**
     * The data used to update Recetas.
     */
    data: XOR<RecetasUpdateManyMutationInput, RecetasUncheckedUpdateManyInput>
    /**
     * Filter which Recetas to update
     */
    where?: RecetasWhereInput
    /**
     * Limit how many Recetas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recetas upsert
   */
  export type RecetasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recetas
     */
    select?: RecetasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recetas
     */
    omit?: RecetasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetasInclude<ExtArgs> | null
    /**
     * The filter to search for the Recetas to update in case it exists.
     */
    where: RecetasWhereUniqueInput
    /**
     * In case the Recetas found by the `where` argument doesn't exist, create a new Recetas with this data.
     */
    create: XOR<RecetasCreateInput, RecetasUncheckedCreateInput>
    /**
     * In case the Recetas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecetasUpdateInput, RecetasUncheckedUpdateInput>
  }

  /**
   * Recetas delete
   */
  export type RecetasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recetas
     */
    select?: RecetasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recetas
     */
    omit?: RecetasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetasInclude<ExtArgs> | null
    /**
     * Filter which Recetas to delete.
     */
    where: RecetasWhereUniqueInput
  }

  /**
   * Recetas deleteMany
   */
  export type RecetasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recetas to delete
     */
    where?: RecetasWhereInput
    /**
     * Limit how many Recetas to delete.
     */
    limit?: number
  }

  /**
   * Recetas.detalles
   */
  export type Recetas$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    where?: DetalleWhereInput
    orderBy?: DetalleOrderByWithRelationInput | DetalleOrderByWithRelationInput[]
    cursor?: DetalleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetalleScalarFieldEnum | DetalleScalarFieldEnum[]
  }

  /**
   * Recetas.tieneIng
   */
  export type Recetas$tieneIngArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TieneIng
     */
    select?: TieneIngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TieneIng
     */
    omit?: TieneIngOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TieneIngInclude<ExtArgs> | null
    where?: TieneIngWhereInput
    orderBy?: TieneIngOrderByWithRelationInput | TieneIngOrderByWithRelationInput[]
    cursor?: TieneIngWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TieneIngScalarFieldEnum | TieneIngScalarFieldEnum[]
  }

  /**
   * Recetas.planes
   */
  export type Recetas$planesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanComidas
     */
    select?: PlanComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanComidas
     */
    omit?: PlanComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanComidasInclude<ExtArgs> | null
    where?: PlanComidasWhereInput
    orderBy?: PlanComidasOrderByWithRelationInput | PlanComidasOrderByWithRelationInput[]
    cursor?: PlanComidasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanComidasScalarFieldEnum | PlanComidasScalarFieldEnum[]
  }

  /**
   * Recetas without action
   */
  export type RecetasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recetas
     */
    select?: RecetasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recetas
     */
    omit?: RecetasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetasInclude<ExtArgs> | null
  }


  /**
   * Model Detalle
   */

  export type AggregateDetalle = {
    _count: DetalleCountAggregateOutputType | null
    _avg: DetalleAvgAggregateOutputType | null
    _sum: DetalleSumAggregateOutputType | null
    _min: DetalleMinAggregateOutputType | null
    _max: DetalleMaxAggregateOutputType | null
  }

  export type DetalleAvgAggregateOutputType = {
    id_detalle: number | null
    id_receta: number | null
  }

  export type DetalleSumAggregateOutputType = {
    id_detalle: number | null
    id_receta: number | null
  }

  export type DetalleMinAggregateOutputType = {
    id_detalle: number | null
    id_receta: number | null
    detalle: string | null
  }

  export type DetalleMaxAggregateOutputType = {
    id_detalle: number | null
    id_receta: number | null
    detalle: string | null
  }

  export type DetalleCountAggregateOutputType = {
    id_detalle: number
    id_receta: number
    detalle: number
    _all: number
  }


  export type DetalleAvgAggregateInputType = {
    id_detalle?: true
    id_receta?: true
  }

  export type DetalleSumAggregateInputType = {
    id_detalle?: true
    id_receta?: true
  }

  export type DetalleMinAggregateInputType = {
    id_detalle?: true
    id_receta?: true
    detalle?: true
  }

  export type DetalleMaxAggregateInputType = {
    id_detalle?: true
    id_receta?: true
    detalle?: true
  }

  export type DetalleCountAggregateInputType = {
    id_detalle?: true
    id_receta?: true
    detalle?: true
    _all?: true
  }

  export type DetalleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detalle to aggregate.
     */
    where?: DetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalles to fetch.
     */
    orderBy?: DetalleOrderByWithRelationInput | DetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Detalles
    **/
    _count?: true | DetalleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetalleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetalleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetalleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetalleMaxAggregateInputType
  }

  export type GetDetalleAggregateType<T extends DetalleAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalle[P]>
      : GetScalarType<T[P], AggregateDetalle[P]>
  }




  export type DetalleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetalleWhereInput
    orderBy?: DetalleOrderByWithAggregationInput | DetalleOrderByWithAggregationInput[]
    by: DetalleScalarFieldEnum[] | DetalleScalarFieldEnum
    having?: DetalleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetalleCountAggregateInputType | true
    _avg?: DetalleAvgAggregateInputType
    _sum?: DetalleSumAggregateInputType
    _min?: DetalleMinAggregateInputType
    _max?: DetalleMaxAggregateInputType
  }

  export type DetalleGroupByOutputType = {
    id_detalle: number
    id_receta: number
    detalle: string
    _count: DetalleCountAggregateOutputType | null
    _avg: DetalleAvgAggregateOutputType | null
    _sum: DetalleSumAggregateOutputType | null
    _min: DetalleMinAggregateOutputType | null
    _max: DetalleMaxAggregateOutputType | null
  }

  type GetDetalleGroupByPayload<T extends DetalleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetalleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetalleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetalleGroupByOutputType[P]>
            : GetScalarType<T[P], DetalleGroupByOutputType[P]>
        }
      >
    >


  export type DetalleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalle?: boolean
    id_receta?: boolean
    detalle?: boolean
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle"]>

  export type DetalleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalle?: boolean
    id_receta?: boolean
    detalle?: boolean
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle"]>

  export type DetalleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_detalle?: boolean
    id_receta?: boolean
    detalle?: boolean
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle"]>

  export type DetalleSelectScalar = {
    id_detalle?: boolean
    id_receta?: boolean
    detalle?: boolean
  }

  export type DetalleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_detalle" | "id_receta" | "detalle", ExtArgs["result"]["detalle"]>
  export type DetalleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
  }
  export type DetalleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
  }
  export type DetalleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
  }

  export type $DetallePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Detalle"
    objects: {
      receta: Prisma.$RecetasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_detalle: number
      id_receta: number
      detalle: string
    }, ExtArgs["result"]["detalle"]>
    composites: {}
  }

  type DetalleGetPayload<S extends boolean | null | undefined | DetalleDefaultArgs> = $Result.GetResult<Prisma.$DetallePayload, S>

  type DetalleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetalleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetalleCountAggregateInputType | true
    }

  export interface DetalleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Detalle'], meta: { name: 'Detalle' } }
    /**
     * Find zero or one Detalle that matches the filter.
     * @param {DetalleFindUniqueArgs} args - Arguments to find a Detalle
     * @example
     * // Get one Detalle
     * const detalle = await prisma.detalle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetalleFindUniqueArgs>(args: SelectSubset<T, DetalleFindUniqueArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detalle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetalleFindUniqueOrThrowArgs} args - Arguments to find a Detalle
     * @example
     * // Get one Detalle
     * const detalle = await prisma.detalle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetalleFindUniqueOrThrowArgs>(args: SelectSubset<T, DetalleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFindFirstArgs} args - Arguments to find a Detalle
     * @example
     * // Get one Detalle
     * const detalle = await prisma.detalle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetalleFindFirstArgs>(args?: SelectSubset<T, DetalleFindFirstArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFindFirstOrThrowArgs} args - Arguments to find a Detalle
     * @example
     * // Get one Detalle
     * const detalle = await prisma.detalle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetalleFindFirstOrThrowArgs>(args?: SelectSubset<T, DetalleFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detalles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detalles
     * const detalles = await prisma.detalle.findMany()
     * 
     * // Get first 10 Detalles
     * const detalles = await prisma.detalle.findMany({ take: 10 })
     * 
     * // Only select the `id_detalle`
     * const detalleWithId_detalleOnly = await prisma.detalle.findMany({ select: { id_detalle: true } })
     * 
     */
    findMany<T extends DetalleFindManyArgs>(args?: SelectSubset<T, DetalleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detalle.
     * @param {DetalleCreateArgs} args - Arguments to create a Detalle.
     * @example
     * // Create one Detalle
     * const Detalle = await prisma.detalle.create({
     *   data: {
     *     // ... data to create a Detalle
     *   }
     * })
     * 
     */
    create<T extends DetalleCreateArgs>(args: SelectSubset<T, DetalleCreateArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detalles.
     * @param {DetalleCreateManyArgs} args - Arguments to create many Detalles.
     * @example
     * // Create many Detalles
     * const detalle = await prisma.detalle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetalleCreateManyArgs>(args?: SelectSubset<T, DetalleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detalles and returns the data saved in the database.
     * @param {DetalleCreateManyAndReturnArgs} args - Arguments to create many Detalles.
     * @example
     * // Create many Detalles
     * const detalle = await prisma.detalle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detalles and only return the `id_detalle`
     * const detalleWithId_detalleOnly = await prisma.detalle.createManyAndReturn({
     *   select: { id_detalle: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetalleCreateManyAndReturnArgs>(args?: SelectSubset<T, DetalleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detalle.
     * @param {DetalleDeleteArgs} args - Arguments to delete one Detalle.
     * @example
     * // Delete one Detalle
     * const Detalle = await prisma.detalle.delete({
     *   where: {
     *     // ... filter to delete one Detalle
     *   }
     * })
     * 
     */
    delete<T extends DetalleDeleteArgs>(args: SelectSubset<T, DetalleDeleteArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detalle.
     * @param {DetalleUpdateArgs} args - Arguments to update one Detalle.
     * @example
     * // Update one Detalle
     * const detalle = await prisma.detalle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetalleUpdateArgs>(args: SelectSubset<T, DetalleUpdateArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detalles.
     * @param {DetalleDeleteManyArgs} args - Arguments to filter Detalles to delete.
     * @example
     * // Delete a few Detalles
     * const { count } = await prisma.detalle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetalleDeleteManyArgs>(args?: SelectSubset<T, DetalleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detalles
     * const detalle = await prisma.detalle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetalleUpdateManyArgs>(args: SelectSubset<T, DetalleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalles and returns the data updated in the database.
     * @param {DetalleUpdateManyAndReturnArgs} args - Arguments to update many Detalles.
     * @example
     * // Update many Detalles
     * const detalle = await prisma.detalle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detalles and only return the `id_detalle`
     * const detalleWithId_detalleOnly = await prisma.detalle.updateManyAndReturn({
     *   select: { id_detalle: true },
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
    updateManyAndReturn<T extends DetalleUpdateManyAndReturnArgs>(args: SelectSubset<T, DetalleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detalle.
     * @param {DetalleUpsertArgs} args - Arguments to update or create a Detalle.
     * @example
     * // Update or create a Detalle
     * const detalle = await prisma.detalle.upsert({
     *   create: {
     *     // ... data to create a Detalle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detalle we want to update
     *   }
     * })
     */
    upsert<T extends DetalleUpsertArgs>(args: SelectSubset<T, DetalleUpsertArgs<ExtArgs>>): Prisma__DetalleClient<$Result.GetResult<Prisma.$DetallePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleCountArgs} args - Arguments to filter Detalles to count.
     * @example
     * // Count the number of Detalles
     * const count = await prisma.detalle.count({
     *   where: {
     *     // ... the filter for the Detalles we want to count
     *   }
     * })
    **/
    count<T extends DetalleCountArgs>(
      args?: Subset<T, DetalleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetalleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detalle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetalleAggregateArgs>(args: Subset<T, DetalleAggregateArgs>): Prisma.PrismaPromise<GetDetalleAggregateType<T>>

    /**
     * Group by Detalle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetalleGroupByArgs} args - Group by arguments.
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
      T extends DetalleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetalleGroupByArgs['orderBy'] }
        : { orderBy?: DetalleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetalleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Detalle model
   */
  readonly fields: DetalleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Detalle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetalleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receta<T extends RecetasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecetasDefaultArgs<ExtArgs>>): Prisma__RecetasClient<$Result.GetResult<Prisma.$RecetasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Detalle model
   */
  interface DetalleFieldRefs {
    readonly id_detalle: FieldRef<"Detalle", 'Int'>
    readonly id_receta: FieldRef<"Detalle", 'Int'>
    readonly detalle: FieldRef<"Detalle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Detalle findUnique
   */
  export type DetalleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * Filter, which Detalle to fetch.
     */
    where: DetalleWhereUniqueInput
  }

  /**
   * Detalle findUniqueOrThrow
   */
  export type DetalleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * Filter, which Detalle to fetch.
     */
    where: DetalleWhereUniqueInput
  }

  /**
   * Detalle findFirst
   */
  export type DetalleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * Filter, which Detalle to fetch.
     */
    where?: DetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalles to fetch.
     */
    orderBy?: DetalleOrderByWithRelationInput | DetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detalles.
     */
    cursor?: DetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detalles.
     */
    distinct?: DetalleScalarFieldEnum | DetalleScalarFieldEnum[]
  }

  /**
   * Detalle findFirstOrThrow
   */
  export type DetalleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * Filter, which Detalle to fetch.
     */
    where?: DetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalles to fetch.
     */
    orderBy?: DetalleOrderByWithRelationInput | DetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detalles.
     */
    cursor?: DetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detalles.
     */
    distinct?: DetalleScalarFieldEnum | DetalleScalarFieldEnum[]
  }

  /**
   * Detalle findMany
   */
  export type DetalleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * Filter, which Detalles to fetch.
     */
    where?: DetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalles to fetch.
     */
    orderBy?: DetalleOrderByWithRelationInput | DetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Detalles.
     */
    cursor?: DetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalles.
     */
    skip?: number
    distinct?: DetalleScalarFieldEnum | DetalleScalarFieldEnum[]
  }

  /**
   * Detalle create
   */
  export type DetalleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * The data needed to create a Detalle.
     */
    data: XOR<DetalleCreateInput, DetalleUncheckedCreateInput>
  }

  /**
   * Detalle createMany
   */
  export type DetalleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Detalles.
     */
    data: DetalleCreateManyInput | DetalleCreateManyInput[]
  }

  /**
   * Detalle createManyAndReturn
   */
  export type DetalleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * The data used to create many Detalles.
     */
    data: DetalleCreateManyInput | DetalleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detalle update
   */
  export type DetalleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * The data needed to update a Detalle.
     */
    data: XOR<DetalleUpdateInput, DetalleUncheckedUpdateInput>
    /**
     * Choose, which Detalle to update.
     */
    where: DetalleWhereUniqueInput
  }

  /**
   * Detalle updateMany
   */
  export type DetalleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Detalles.
     */
    data: XOR<DetalleUpdateManyMutationInput, DetalleUncheckedUpdateManyInput>
    /**
     * Filter which Detalles to update
     */
    where?: DetalleWhereInput
    /**
     * Limit how many Detalles to update.
     */
    limit?: number
  }

  /**
   * Detalle updateManyAndReturn
   */
  export type DetalleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * The data used to update Detalles.
     */
    data: XOR<DetalleUpdateManyMutationInput, DetalleUncheckedUpdateManyInput>
    /**
     * Filter which Detalles to update
     */
    where?: DetalleWhereInput
    /**
     * Limit how many Detalles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detalle upsert
   */
  export type DetalleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * The filter to search for the Detalle to update in case it exists.
     */
    where: DetalleWhereUniqueInput
    /**
     * In case the Detalle found by the `where` argument doesn't exist, create a new Detalle with this data.
     */
    create: XOR<DetalleCreateInput, DetalleUncheckedCreateInput>
    /**
     * In case the Detalle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetalleUpdateInput, DetalleUncheckedUpdateInput>
  }

  /**
   * Detalle delete
   */
  export type DetalleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
    /**
     * Filter which Detalle to delete.
     */
    where: DetalleWhereUniqueInput
  }

  /**
   * Detalle deleteMany
   */
  export type DetalleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detalles to delete
     */
    where?: DetalleWhereInput
    /**
     * Limit how many Detalles to delete.
     */
    limit?: number
  }

  /**
   * Detalle without action
   */
  export type DetalleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle
     */
    select?: DetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle
     */
    omit?: DetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetalleInclude<ExtArgs> | null
  }


  /**
   * Model Ingredientes
   */

  export type AggregateIngredientes = {
    _count: IngredientesCountAggregateOutputType | null
    _avg: IngredientesAvgAggregateOutputType | null
    _sum: IngredientesSumAggregateOutputType | null
    _min: IngredientesMinAggregateOutputType | null
    _max: IngredientesMaxAggregateOutputType | null
  }

  export type IngredientesAvgAggregateOutputType = {
    id_ingrediente: number | null
  }

  export type IngredientesSumAggregateOutputType = {
    id_ingrediente: number | null
  }

  export type IngredientesMinAggregateOutputType = {
    id_ingrediente: number | null
    nombre: string | null
  }

  export type IngredientesMaxAggregateOutputType = {
    id_ingrediente: number | null
    nombre: string | null
  }

  export type IngredientesCountAggregateOutputType = {
    id_ingrediente: number
    nombre: number
    _all: number
  }


  export type IngredientesAvgAggregateInputType = {
    id_ingrediente?: true
  }

  export type IngredientesSumAggregateInputType = {
    id_ingrediente?: true
  }

  export type IngredientesMinAggregateInputType = {
    id_ingrediente?: true
    nombre?: true
  }

  export type IngredientesMaxAggregateInputType = {
    id_ingrediente?: true
    nombre?: true
  }

  export type IngredientesCountAggregateInputType = {
    id_ingrediente?: true
    nombre?: true
    _all?: true
  }

  export type IngredientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredientes to aggregate.
     */
    where?: IngredientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredientesOrderByWithRelationInput | IngredientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredientes
    **/
    _count?: true | IngredientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientesMaxAggregateInputType
  }

  export type GetIngredientesAggregateType<T extends IngredientesAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredientes[P]>
      : GetScalarType<T[P], AggregateIngredientes[P]>
  }




  export type IngredientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientesWhereInput
    orderBy?: IngredientesOrderByWithAggregationInput | IngredientesOrderByWithAggregationInput[]
    by: IngredientesScalarFieldEnum[] | IngredientesScalarFieldEnum
    having?: IngredientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientesCountAggregateInputType | true
    _avg?: IngredientesAvgAggregateInputType
    _sum?: IngredientesSumAggregateInputType
    _min?: IngredientesMinAggregateInputType
    _max?: IngredientesMaxAggregateInputType
  }

  export type IngredientesGroupByOutputType = {
    id_ingrediente: number
    nombre: string
    _count: IngredientesCountAggregateOutputType | null
    _avg: IngredientesAvgAggregateOutputType | null
    _sum: IngredientesSumAggregateOutputType | null
    _min: IngredientesMinAggregateOutputType | null
    _max: IngredientesMaxAggregateOutputType | null
  }

  type GetIngredientesGroupByPayload<T extends IngredientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientesGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientesGroupByOutputType[P]>
        }
      >
    >


  export type IngredientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ingrediente?: boolean
    nombre?: boolean
    recetas?: boolean | Ingredientes$recetasArgs<ExtArgs>
    _count?: boolean | IngredientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredientes"]>

  export type IngredientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ingrediente?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["ingredientes"]>

  export type IngredientesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ingrediente?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["ingredientes"]>

  export type IngredientesSelectScalar = {
    id_ingrediente?: boolean
    nombre?: boolean
  }

  export type IngredientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ingrediente" | "nombre", ExtArgs["result"]["ingredientes"]>
  export type IngredientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recetas?: boolean | Ingredientes$recetasArgs<ExtArgs>
    _count?: boolean | IngredientesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredientesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IngredientesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IngredientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredientes"
    objects: {
      recetas: Prisma.$TieneIngPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ingrediente: number
      nombre: string
    }, ExtArgs["result"]["ingredientes"]>
    composites: {}
  }

  type IngredientesGetPayload<S extends boolean | null | undefined | IngredientesDefaultArgs> = $Result.GetResult<Prisma.$IngredientesPayload, S>

  type IngredientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientesCountAggregateInputType | true
    }

  export interface IngredientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredientes'], meta: { name: 'Ingredientes' } }
    /**
     * Find zero or one Ingredientes that matches the filter.
     * @param {IngredientesFindUniqueArgs} args - Arguments to find a Ingredientes
     * @example
     * // Get one Ingredientes
     * const ingredientes = await prisma.ingredientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientesFindUniqueArgs>(args: SelectSubset<T, IngredientesFindUniqueArgs<ExtArgs>>): Prisma__IngredientesClient<$Result.GetResult<Prisma.$IngredientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientesFindUniqueOrThrowArgs} args - Arguments to find a Ingredientes
     * @example
     * // Get one Ingredientes
     * const ingredientes = await prisma.ingredientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientesFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientesClient<$Result.GetResult<Prisma.$IngredientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientesFindFirstArgs} args - Arguments to find a Ingredientes
     * @example
     * // Get one Ingredientes
     * const ingredientes = await prisma.ingredientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientesFindFirstArgs>(args?: SelectSubset<T, IngredientesFindFirstArgs<ExtArgs>>): Prisma__IngredientesClient<$Result.GetResult<Prisma.$IngredientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientesFindFirstOrThrowArgs} args - Arguments to find a Ingredientes
     * @example
     * // Get one Ingredientes
     * const ingredientes = await prisma.ingredientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientesFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientesClient<$Result.GetResult<Prisma.$IngredientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredientes
     * const ingredientes = await prisma.ingredientes.findMany()
     * 
     * // Get first 10 Ingredientes
     * const ingredientes = await prisma.ingredientes.findMany({ take: 10 })
     * 
     * // Only select the `id_ingrediente`
     * const ingredientesWithId_ingredienteOnly = await prisma.ingredientes.findMany({ select: { id_ingrediente: true } })
     * 
     */
    findMany<T extends IngredientesFindManyArgs>(args?: SelectSubset<T, IngredientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredientes.
     * @param {IngredientesCreateArgs} args - Arguments to create a Ingredientes.
     * @example
     * // Create one Ingredientes
     * const Ingredientes = await prisma.ingredientes.create({
     *   data: {
     *     // ... data to create a Ingredientes
     *   }
     * })
     * 
     */
    create<T extends IngredientesCreateArgs>(args: SelectSubset<T, IngredientesCreateArgs<ExtArgs>>): Prisma__IngredientesClient<$Result.GetResult<Prisma.$IngredientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredientes.
     * @param {IngredientesCreateManyArgs} args - Arguments to create many Ingredientes.
     * @example
     * // Create many Ingredientes
     * const ingredientes = await prisma.ingredientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientesCreateManyArgs>(args?: SelectSubset<T, IngredientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredientes and returns the data saved in the database.
     * @param {IngredientesCreateManyAndReturnArgs} args - Arguments to create many Ingredientes.
     * @example
     * // Create many Ingredientes
     * const ingredientes = await prisma.ingredientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredientes and only return the `id_ingrediente`
     * const ingredientesWithId_ingredienteOnly = await prisma.ingredientes.createManyAndReturn({
     *   select: { id_ingrediente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientesCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredientes.
     * @param {IngredientesDeleteArgs} args - Arguments to delete one Ingredientes.
     * @example
     * // Delete one Ingredientes
     * const Ingredientes = await prisma.ingredientes.delete({
     *   where: {
     *     // ... filter to delete one Ingredientes
     *   }
     * })
     * 
     */
    delete<T extends IngredientesDeleteArgs>(args: SelectSubset<T, IngredientesDeleteArgs<ExtArgs>>): Prisma__IngredientesClient<$Result.GetResult<Prisma.$IngredientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredientes.
     * @param {IngredientesUpdateArgs} args - Arguments to update one Ingredientes.
     * @example
     * // Update one Ingredientes
     * const ingredientes = await prisma.ingredientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientesUpdateArgs>(args: SelectSubset<T, IngredientesUpdateArgs<ExtArgs>>): Prisma__IngredientesClient<$Result.GetResult<Prisma.$IngredientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredientes.
     * @param {IngredientesDeleteManyArgs} args - Arguments to filter Ingredientes to delete.
     * @example
     * // Delete a few Ingredientes
     * const { count } = await prisma.ingredientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientesDeleteManyArgs>(args?: SelectSubset<T, IngredientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredientes
     * const ingredientes = await prisma.ingredientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientesUpdateManyArgs>(args: SelectSubset<T, IngredientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredientes and returns the data updated in the database.
     * @param {IngredientesUpdateManyAndReturnArgs} args - Arguments to update many Ingredientes.
     * @example
     * // Update many Ingredientes
     * const ingredientes = await prisma.ingredientes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredientes and only return the `id_ingrediente`
     * const ingredientesWithId_ingredienteOnly = await prisma.ingredientes.updateManyAndReturn({
     *   select: { id_ingrediente: true },
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
    updateManyAndReturn<T extends IngredientesUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredientes.
     * @param {IngredientesUpsertArgs} args - Arguments to update or create a Ingredientes.
     * @example
     * // Update or create a Ingredientes
     * const ingredientes = await prisma.ingredientes.upsert({
     *   create: {
     *     // ... data to create a Ingredientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredientes we want to update
     *   }
     * })
     */
    upsert<T extends IngredientesUpsertArgs>(args: SelectSubset<T, IngredientesUpsertArgs<ExtArgs>>): Prisma__IngredientesClient<$Result.GetResult<Prisma.$IngredientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientesCountArgs} args - Arguments to filter Ingredientes to count.
     * @example
     * // Count the number of Ingredientes
     * const count = await prisma.ingredientes.count({
     *   where: {
     *     // ... the filter for the Ingredientes we want to count
     *   }
     * })
    **/
    count<T extends IngredientesCountArgs>(
      args?: Subset<T, IngredientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientesAggregateArgs>(args: Subset<T, IngredientesAggregateArgs>): Prisma.PrismaPromise<GetIngredientesAggregateType<T>>

    /**
     * Group by Ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientesGroupByArgs} args - Group by arguments.
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
      T extends IngredientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientesGroupByArgs['orderBy'] }
        : { orderBy?: IngredientesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredientes model
   */
  readonly fields: IngredientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recetas<T extends Ingredientes$recetasArgs<ExtArgs> = {}>(args?: Subset<T, Ingredientes$recetasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TieneIngPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ingredientes model
   */
  interface IngredientesFieldRefs {
    readonly id_ingrediente: FieldRef<"Ingredientes", 'Int'>
    readonly nombre: FieldRef<"Ingredientes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ingredientes findUnique
   */
  export type IngredientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredientes
     */
    select?: IngredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredientes
     */
    omit?: IngredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientesInclude<ExtArgs> | null
    /**
     * Filter, which Ingredientes to fetch.
     */
    where: IngredientesWhereUniqueInput
  }

  /**
   * Ingredientes findUniqueOrThrow
   */
  export type IngredientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredientes
     */
    select?: IngredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredientes
     */
    omit?: IngredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientesInclude<ExtArgs> | null
    /**
     * Filter, which Ingredientes to fetch.
     */
    where: IngredientesWhereUniqueInput
  }

  /**
   * Ingredientes findFirst
   */
  export type IngredientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredientes
     */
    select?: IngredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredientes
     */
    omit?: IngredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientesInclude<ExtArgs> | null
    /**
     * Filter, which Ingredientes to fetch.
     */
    where?: IngredientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredientesOrderByWithRelationInput | IngredientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredientes.
     */
    cursor?: IngredientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredientes.
     */
    distinct?: IngredientesScalarFieldEnum | IngredientesScalarFieldEnum[]
  }

  /**
   * Ingredientes findFirstOrThrow
   */
  export type IngredientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredientes
     */
    select?: IngredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredientes
     */
    omit?: IngredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientesInclude<ExtArgs> | null
    /**
     * Filter, which Ingredientes to fetch.
     */
    where?: IngredientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredientesOrderByWithRelationInput | IngredientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredientes.
     */
    cursor?: IngredientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredientes.
     */
    distinct?: IngredientesScalarFieldEnum | IngredientesScalarFieldEnum[]
  }

  /**
   * Ingredientes findMany
   */
  export type IngredientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredientes
     */
    select?: IngredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredientes
     */
    omit?: IngredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientesInclude<ExtArgs> | null
    /**
     * Filter, which Ingredientes to fetch.
     */
    where?: IngredientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredientesOrderByWithRelationInput | IngredientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredientes.
     */
    cursor?: IngredientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    distinct?: IngredientesScalarFieldEnum | IngredientesScalarFieldEnum[]
  }

  /**
   * Ingredientes create
   */
  export type IngredientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredientes
     */
    select?: IngredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredientes
     */
    omit?: IngredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientesInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredientes.
     */
    data: XOR<IngredientesCreateInput, IngredientesUncheckedCreateInput>
  }

  /**
   * Ingredientes createMany
   */
  export type IngredientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredientes.
     */
    data: IngredientesCreateManyInput | IngredientesCreateManyInput[]
  }

  /**
   * Ingredientes createManyAndReturn
   */
  export type IngredientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredientes
     */
    select?: IngredientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredientes
     */
    omit?: IngredientesOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredientes.
     */
    data: IngredientesCreateManyInput | IngredientesCreateManyInput[]
  }

  /**
   * Ingredientes update
   */
  export type IngredientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredientes
     */
    select?: IngredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredientes
     */
    omit?: IngredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientesInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredientes.
     */
    data: XOR<IngredientesUpdateInput, IngredientesUncheckedUpdateInput>
    /**
     * Choose, which Ingredientes to update.
     */
    where: IngredientesWhereUniqueInput
  }

  /**
   * Ingredientes updateMany
   */
  export type IngredientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredientes.
     */
    data: XOR<IngredientesUpdateManyMutationInput, IngredientesUncheckedUpdateManyInput>
    /**
     * Filter which Ingredientes to update
     */
    where?: IngredientesWhereInput
    /**
     * Limit how many Ingredientes to update.
     */
    limit?: number
  }

  /**
   * Ingredientes updateManyAndReturn
   */
  export type IngredientesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredientes
     */
    select?: IngredientesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredientes
     */
    omit?: IngredientesOmit<ExtArgs> | null
    /**
     * The data used to update Ingredientes.
     */
    data: XOR<IngredientesUpdateManyMutationInput, IngredientesUncheckedUpdateManyInput>
    /**
     * Filter which Ingredientes to update
     */
    where?: IngredientesWhereInput
    /**
     * Limit how many Ingredientes to update.
     */
    limit?: number
  }

  /**
   * Ingredientes upsert
   */
  export type IngredientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredientes
     */
    select?: IngredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredientes
     */
    omit?: IngredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientesInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredientes to update in case it exists.
     */
    where: IngredientesWhereUniqueInput
    /**
     * In case the Ingredientes found by the `where` argument doesn't exist, create a new Ingredientes with this data.
     */
    create: XOR<IngredientesCreateInput, IngredientesUncheckedCreateInput>
    /**
     * In case the Ingredientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientesUpdateInput, IngredientesUncheckedUpdateInput>
  }

  /**
   * Ingredientes delete
   */
  export type IngredientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredientes
     */
    select?: IngredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredientes
     */
    omit?: IngredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientesInclude<ExtArgs> | null
    /**
     * Filter which Ingredientes to delete.
     */
    where: IngredientesWhereUniqueInput
  }

  /**
   * Ingredientes deleteMany
   */
  export type IngredientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredientes to delete
     */
    where?: IngredientesWhereInput
    /**
     * Limit how many Ingredientes to delete.
     */
    limit?: number
  }

  /**
   * Ingredientes.recetas
   */
  export type Ingredientes$recetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TieneIng
     */
    select?: TieneIngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TieneIng
     */
    omit?: TieneIngOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TieneIngInclude<ExtArgs> | null
    where?: TieneIngWhereInput
    orderBy?: TieneIngOrderByWithRelationInput | TieneIngOrderByWithRelationInput[]
    cursor?: TieneIngWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TieneIngScalarFieldEnum | TieneIngScalarFieldEnum[]
  }

  /**
   * Ingredientes without action
   */
  export type IngredientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredientes
     */
    select?: IngredientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredientes
     */
    omit?: IngredientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientesInclude<ExtArgs> | null
  }


  /**
   * Model Unidades
   */

  export type AggregateUnidades = {
    _count: UnidadesCountAggregateOutputType | null
    _avg: UnidadesAvgAggregateOutputType | null
    _sum: UnidadesSumAggregateOutputType | null
    _min: UnidadesMinAggregateOutputType | null
    _max: UnidadesMaxAggregateOutputType | null
  }

  export type UnidadesAvgAggregateOutputType = {
    id_unidad: number | null
  }

  export type UnidadesSumAggregateOutputType = {
    id_unidad: number | null
  }

  export type UnidadesMinAggregateOutputType = {
    id_unidad: number | null
    unidad: string | null
  }

  export type UnidadesMaxAggregateOutputType = {
    id_unidad: number | null
    unidad: string | null
  }

  export type UnidadesCountAggregateOutputType = {
    id_unidad: number
    unidad: number
    _all: number
  }


  export type UnidadesAvgAggregateInputType = {
    id_unidad?: true
  }

  export type UnidadesSumAggregateInputType = {
    id_unidad?: true
  }

  export type UnidadesMinAggregateInputType = {
    id_unidad?: true
    unidad?: true
  }

  export type UnidadesMaxAggregateInputType = {
    id_unidad?: true
    unidad?: true
  }

  export type UnidadesCountAggregateInputType = {
    id_unidad?: true
    unidad?: true
    _all?: true
  }

  export type UnidadesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unidades to aggregate.
     */
    where?: UnidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unidades to fetch.
     */
    orderBy?: UnidadesOrderByWithRelationInput | UnidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Unidades
    **/
    _count?: true | UnidadesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnidadesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnidadesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnidadesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnidadesMaxAggregateInputType
  }

  export type GetUnidadesAggregateType<T extends UnidadesAggregateArgs> = {
        [P in keyof T & keyof AggregateUnidades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnidades[P]>
      : GetScalarType<T[P], AggregateUnidades[P]>
  }




  export type UnidadesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnidadesWhereInput
    orderBy?: UnidadesOrderByWithAggregationInput | UnidadesOrderByWithAggregationInput[]
    by: UnidadesScalarFieldEnum[] | UnidadesScalarFieldEnum
    having?: UnidadesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnidadesCountAggregateInputType | true
    _avg?: UnidadesAvgAggregateInputType
    _sum?: UnidadesSumAggregateInputType
    _min?: UnidadesMinAggregateInputType
    _max?: UnidadesMaxAggregateInputType
  }

  export type UnidadesGroupByOutputType = {
    id_unidad: number
    unidad: string
    _count: UnidadesCountAggregateOutputType | null
    _avg: UnidadesAvgAggregateOutputType | null
    _sum: UnidadesSumAggregateOutputType | null
    _min: UnidadesMinAggregateOutputType | null
    _max: UnidadesMaxAggregateOutputType | null
  }

  type GetUnidadesGroupByPayload<T extends UnidadesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnidadesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnidadesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnidadesGroupByOutputType[P]>
            : GetScalarType<T[P], UnidadesGroupByOutputType[P]>
        }
      >
    >


  export type UnidadesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_unidad?: boolean
    unidad?: boolean
    ingredientes?: boolean | Unidades$ingredientesArgs<ExtArgs>
    _count?: boolean | UnidadesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unidades"]>

  export type UnidadesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_unidad?: boolean
    unidad?: boolean
  }, ExtArgs["result"]["unidades"]>

  export type UnidadesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_unidad?: boolean
    unidad?: boolean
  }, ExtArgs["result"]["unidades"]>

  export type UnidadesSelectScalar = {
    id_unidad?: boolean
    unidad?: boolean
  }

  export type UnidadesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_unidad" | "unidad", ExtArgs["result"]["unidades"]>
  export type UnidadesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredientes?: boolean | Unidades$ingredientesArgs<ExtArgs>
    _count?: boolean | UnidadesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnidadesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UnidadesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UnidadesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unidades"
    objects: {
      ingredientes: Prisma.$TieneIngPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_unidad: number
      unidad: string
    }, ExtArgs["result"]["unidades"]>
    composites: {}
  }

  type UnidadesGetPayload<S extends boolean | null | undefined | UnidadesDefaultArgs> = $Result.GetResult<Prisma.$UnidadesPayload, S>

  type UnidadesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnidadesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnidadesCountAggregateInputType | true
    }

  export interface UnidadesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unidades'], meta: { name: 'Unidades' } }
    /**
     * Find zero or one Unidades that matches the filter.
     * @param {UnidadesFindUniqueArgs} args - Arguments to find a Unidades
     * @example
     * // Get one Unidades
     * const unidades = await prisma.unidades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnidadesFindUniqueArgs>(args: SelectSubset<T, UnidadesFindUniqueArgs<ExtArgs>>): Prisma__UnidadesClient<$Result.GetResult<Prisma.$UnidadesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unidades that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnidadesFindUniqueOrThrowArgs} args - Arguments to find a Unidades
     * @example
     * // Get one Unidades
     * const unidades = await prisma.unidades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnidadesFindUniqueOrThrowArgs>(args: SelectSubset<T, UnidadesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnidadesClient<$Result.GetResult<Prisma.$UnidadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadesFindFirstArgs} args - Arguments to find a Unidades
     * @example
     * // Get one Unidades
     * const unidades = await prisma.unidades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnidadesFindFirstArgs>(args?: SelectSubset<T, UnidadesFindFirstArgs<ExtArgs>>): Prisma__UnidadesClient<$Result.GetResult<Prisma.$UnidadesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unidades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadesFindFirstOrThrowArgs} args - Arguments to find a Unidades
     * @example
     * // Get one Unidades
     * const unidades = await prisma.unidades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnidadesFindFirstOrThrowArgs>(args?: SelectSubset<T, UnidadesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnidadesClient<$Result.GetResult<Prisma.$UnidadesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Unidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Unidades
     * const unidades = await prisma.unidades.findMany()
     * 
     * // Get first 10 Unidades
     * const unidades = await prisma.unidades.findMany({ take: 10 })
     * 
     * // Only select the `id_unidad`
     * const unidadesWithId_unidadOnly = await prisma.unidades.findMany({ select: { id_unidad: true } })
     * 
     */
    findMany<T extends UnidadesFindManyArgs>(args?: SelectSubset<T, UnidadesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnidadesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unidades.
     * @param {UnidadesCreateArgs} args - Arguments to create a Unidades.
     * @example
     * // Create one Unidades
     * const Unidades = await prisma.unidades.create({
     *   data: {
     *     // ... data to create a Unidades
     *   }
     * })
     * 
     */
    create<T extends UnidadesCreateArgs>(args: SelectSubset<T, UnidadesCreateArgs<ExtArgs>>): Prisma__UnidadesClient<$Result.GetResult<Prisma.$UnidadesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Unidades.
     * @param {UnidadesCreateManyArgs} args - Arguments to create many Unidades.
     * @example
     * // Create many Unidades
     * const unidades = await prisma.unidades.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnidadesCreateManyArgs>(args?: SelectSubset<T, UnidadesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Unidades and returns the data saved in the database.
     * @param {UnidadesCreateManyAndReturnArgs} args - Arguments to create many Unidades.
     * @example
     * // Create many Unidades
     * const unidades = await prisma.unidades.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Unidades and only return the `id_unidad`
     * const unidadesWithId_unidadOnly = await prisma.unidades.createManyAndReturn({
     *   select: { id_unidad: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnidadesCreateManyAndReturnArgs>(args?: SelectSubset<T, UnidadesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnidadesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unidades.
     * @param {UnidadesDeleteArgs} args - Arguments to delete one Unidades.
     * @example
     * // Delete one Unidades
     * const Unidades = await prisma.unidades.delete({
     *   where: {
     *     // ... filter to delete one Unidades
     *   }
     * })
     * 
     */
    delete<T extends UnidadesDeleteArgs>(args: SelectSubset<T, UnidadesDeleteArgs<ExtArgs>>): Prisma__UnidadesClient<$Result.GetResult<Prisma.$UnidadesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unidades.
     * @param {UnidadesUpdateArgs} args - Arguments to update one Unidades.
     * @example
     * // Update one Unidades
     * const unidades = await prisma.unidades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnidadesUpdateArgs>(args: SelectSubset<T, UnidadesUpdateArgs<ExtArgs>>): Prisma__UnidadesClient<$Result.GetResult<Prisma.$UnidadesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Unidades.
     * @param {UnidadesDeleteManyArgs} args - Arguments to filter Unidades to delete.
     * @example
     * // Delete a few Unidades
     * const { count } = await prisma.unidades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnidadesDeleteManyArgs>(args?: SelectSubset<T, UnidadesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Unidades
     * const unidades = await prisma.unidades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnidadesUpdateManyArgs>(args: SelectSubset<T, UnidadesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unidades and returns the data updated in the database.
     * @param {UnidadesUpdateManyAndReturnArgs} args - Arguments to update many Unidades.
     * @example
     * // Update many Unidades
     * const unidades = await prisma.unidades.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Unidades and only return the `id_unidad`
     * const unidadesWithId_unidadOnly = await prisma.unidades.updateManyAndReturn({
     *   select: { id_unidad: true },
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
    updateManyAndReturn<T extends UnidadesUpdateManyAndReturnArgs>(args: SelectSubset<T, UnidadesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnidadesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unidades.
     * @param {UnidadesUpsertArgs} args - Arguments to update or create a Unidades.
     * @example
     * // Update or create a Unidades
     * const unidades = await prisma.unidades.upsert({
     *   create: {
     *     // ... data to create a Unidades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unidades we want to update
     *   }
     * })
     */
    upsert<T extends UnidadesUpsertArgs>(args: SelectSubset<T, UnidadesUpsertArgs<ExtArgs>>): Prisma__UnidadesClient<$Result.GetResult<Prisma.$UnidadesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Unidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadesCountArgs} args - Arguments to filter Unidades to count.
     * @example
     * // Count the number of Unidades
     * const count = await prisma.unidades.count({
     *   where: {
     *     // ... the filter for the Unidades we want to count
     *   }
     * })
    **/
    count<T extends UnidadesCountArgs>(
      args?: Subset<T, UnidadesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnidadesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnidadesAggregateArgs>(args: Subset<T, UnidadesAggregateArgs>): Prisma.PrismaPromise<GetUnidadesAggregateType<T>>

    /**
     * Group by Unidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadesGroupByArgs} args - Group by arguments.
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
      T extends UnidadesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnidadesGroupByArgs['orderBy'] }
        : { orderBy?: UnidadesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnidadesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnidadesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unidades model
   */
  readonly fields: UnidadesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unidades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnidadesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredientes<T extends Unidades$ingredientesArgs<ExtArgs> = {}>(args?: Subset<T, Unidades$ingredientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TieneIngPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Unidades model
   */
  interface UnidadesFieldRefs {
    readonly id_unidad: FieldRef<"Unidades", 'Int'>
    readonly unidad: FieldRef<"Unidades", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Unidades findUnique
   */
  export type UnidadesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidades
     */
    select?: UnidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidades
     */
    omit?: UnidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadesInclude<ExtArgs> | null
    /**
     * Filter, which Unidades to fetch.
     */
    where: UnidadesWhereUniqueInput
  }

  /**
   * Unidades findUniqueOrThrow
   */
  export type UnidadesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidades
     */
    select?: UnidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidades
     */
    omit?: UnidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadesInclude<ExtArgs> | null
    /**
     * Filter, which Unidades to fetch.
     */
    where: UnidadesWhereUniqueInput
  }

  /**
   * Unidades findFirst
   */
  export type UnidadesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidades
     */
    select?: UnidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidades
     */
    omit?: UnidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadesInclude<ExtArgs> | null
    /**
     * Filter, which Unidades to fetch.
     */
    where?: UnidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unidades to fetch.
     */
    orderBy?: UnidadesOrderByWithRelationInput | UnidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unidades.
     */
    cursor?: UnidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unidades.
     */
    distinct?: UnidadesScalarFieldEnum | UnidadesScalarFieldEnum[]
  }

  /**
   * Unidades findFirstOrThrow
   */
  export type UnidadesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidades
     */
    select?: UnidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidades
     */
    omit?: UnidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadesInclude<ExtArgs> | null
    /**
     * Filter, which Unidades to fetch.
     */
    where?: UnidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unidades to fetch.
     */
    orderBy?: UnidadesOrderByWithRelationInput | UnidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unidades.
     */
    cursor?: UnidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unidades.
     */
    distinct?: UnidadesScalarFieldEnum | UnidadesScalarFieldEnum[]
  }

  /**
   * Unidades findMany
   */
  export type UnidadesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidades
     */
    select?: UnidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidades
     */
    omit?: UnidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadesInclude<ExtArgs> | null
    /**
     * Filter, which Unidades to fetch.
     */
    where?: UnidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unidades to fetch.
     */
    orderBy?: UnidadesOrderByWithRelationInput | UnidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Unidades.
     */
    cursor?: UnidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unidades.
     */
    skip?: number
    distinct?: UnidadesScalarFieldEnum | UnidadesScalarFieldEnum[]
  }

  /**
   * Unidades create
   */
  export type UnidadesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidades
     */
    select?: UnidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidades
     */
    omit?: UnidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadesInclude<ExtArgs> | null
    /**
     * The data needed to create a Unidades.
     */
    data: XOR<UnidadesCreateInput, UnidadesUncheckedCreateInput>
  }

  /**
   * Unidades createMany
   */
  export type UnidadesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Unidades.
     */
    data: UnidadesCreateManyInput | UnidadesCreateManyInput[]
  }

  /**
   * Unidades createManyAndReturn
   */
  export type UnidadesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidades
     */
    select?: UnidadesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unidades
     */
    omit?: UnidadesOmit<ExtArgs> | null
    /**
     * The data used to create many Unidades.
     */
    data: UnidadesCreateManyInput | UnidadesCreateManyInput[]
  }

  /**
   * Unidades update
   */
  export type UnidadesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidades
     */
    select?: UnidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidades
     */
    omit?: UnidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadesInclude<ExtArgs> | null
    /**
     * The data needed to update a Unidades.
     */
    data: XOR<UnidadesUpdateInput, UnidadesUncheckedUpdateInput>
    /**
     * Choose, which Unidades to update.
     */
    where: UnidadesWhereUniqueInput
  }

  /**
   * Unidades updateMany
   */
  export type UnidadesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Unidades.
     */
    data: XOR<UnidadesUpdateManyMutationInput, UnidadesUncheckedUpdateManyInput>
    /**
     * Filter which Unidades to update
     */
    where?: UnidadesWhereInput
    /**
     * Limit how many Unidades to update.
     */
    limit?: number
  }

  /**
   * Unidades updateManyAndReturn
   */
  export type UnidadesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidades
     */
    select?: UnidadesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unidades
     */
    omit?: UnidadesOmit<ExtArgs> | null
    /**
     * The data used to update Unidades.
     */
    data: XOR<UnidadesUpdateManyMutationInput, UnidadesUncheckedUpdateManyInput>
    /**
     * Filter which Unidades to update
     */
    where?: UnidadesWhereInput
    /**
     * Limit how many Unidades to update.
     */
    limit?: number
  }

  /**
   * Unidades upsert
   */
  export type UnidadesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidades
     */
    select?: UnidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidades
     */
    omit?: UnidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadesInclude<ExtArgs> | null
    /**
     * The filter to search for the Unidades to update in case it exists.
     */
    where: UnidadesWhereUniqueInput
    /**
     * In case the Unidades found by the `where` argument doesn't exist, create a new Unidades with this data.
     */
    create: XOR<UnidadesCreateInput, UnidadesUncheckedCreateInput>
    /**
     * In case the Unidades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnidadesUpdateInput, UnidadesUncheckedUpdateInput>
  }

  /**
   * Unidades delete
   */
  export type UnidadesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidades
     */
    select?: UnidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidades
     */
    omit?: UnidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadesInclude<ExtArgs> | null
    /**
     * Filter which Unidades to delete.
     */
    where: UnidadesWhereUniqueInput
  }

  /**
   * Unidades deleteMany
   */
  export type UnidadesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unidades to delete
     */
    where?: UnidadesWhereInput
    /**
     * Limit how many Unidades to delete.
     */
    limit?: number
  }

  /**
   * Unidades.ingredientes
   */
  export type Unidades$ingredientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TieneIng
     */
    select?: TieneIngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TieneIng
     */
    omit?: TieneIngOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TieneIngInclude<ExtArgs> | null
    where?: TieneIngWhereInput
    orderBy?: TieneIngOrderByWithRelationInput | TieneIngOrderByWithRelationInput[]
    cursor?: TieneIngWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TieneIngScalarFieldEnum | TieneIngScalarFieldEnum[]
  }

  /**
   * Unidades without action
   */
  export type UnidadesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidades
     */
    select?: UnidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidades
     */
    omit?: UnidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadesInclude<ExtArgs> | null
  }


  /**
   * Model TieneIng
   */

  export type AggregateTieneIng = {
    _count: TieneIngCountAggregateOutputType | null
    _avg: TieneIngAvgAggregateOutputType | null
    _sum: TieneIngSumAggregateOutputType | null
    _min: TieneIngMinAggregateOutputType | null
    _max: TieneIngMaxAggregateOutputType | null
  }

  export type TieneIngAvgAggregateOutputType = {
    id_tieneing: number | null
    id_receta: number | null
    id_ingrediente: number | null
    cantidad: number | null
    id_unidad: number | null
  }

  export type TieneIngSumAggregateOutputType = {
    id_tieneing: number | null
    id_receta: number | null
    id_ingrediente: number | null
    cantidad: number | null
    id_unidad: number | null
  }

  export type TieneIngMinAggregateOutputType = {
    id_tieneing: number | null
    id_receta: number | null
    id_ingrediente: number | null
    cantidad: number | null
    id_unidad: number | null
  }

  export type TieneIngMaxAggregateOutputType = {
    id_tieneing: number | null
    id_receta: number | null
    id_ingrediente: number | null
    cantidad: number | null
    id_unidad: number | null
  }

  export type TieneIngCountAggregateOutputType = {
    id_tieneing: number
    id_receta: number
    id_ingrediente: number
    cantidad: number
    id_unidad: number
    _all: number
  }


  export type TieneIngAvgAggregateInputType = {
    id_tieneing?: true
    id_receta?: true
    id_ingrediente?: true
    cantidad?: true
    id_unidad?: true
  }

  export type TieneIngSumAggregateInputType = {
    id_tieneing?: true
    id_receta?: true
    id_ingrediente?: true
    cantidad?: true
    id_unidad?: true
  }

  export type TieneIngMinAggregateInputType = {
    id_tieneing?: true
    id_receta?: true
    id_ingrediente?: true
    cantidad?: true
    id_unidad?: true
  }

  export type TieneIngMaxAggregateInputType = {
    id_tieneing?: true
    id_receta?: true
    id_ingrediente?: true
    cantidad?: true
    id_unidad?: true
  }

  export type TieneIngCountAggregateInputType = {
    id_tieneing?: true
    id_receta?: true
    id_ingrediente?: true
    cantidad?: true
    id_unidad?: true
    _all?: true
  }

  export type TieneIngAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TieneIng to aggregate.
     */
    where?: TieneIngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TieneIngs to fetch.
     */
    orderBy?: TieneIngOrderByWithRelationInput | TieneIngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TieneIngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TieneIngs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TieneIngs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TieneIngs
    **/
    _count?: true | TieneIngCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TieneIngAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TieneIngSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TieneIngMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TieneIngMaxAggregateInputType
  }

  export type GetTieneIngAggregateType<T extends TieneIngAggregateArgs> = {
        [P in keyof T & keyof AggregateTieneIng]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTieneIng[P]>
      : GetScalarType<T[P], AggregateTieneIng[P]>
  }




  export type TieneIngGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TieneIngWhereInput
    orderBy?: TieneIngOrderByWithAggregationInput | TieneIngOrderByWithAggregationInput[]
    by: TieneIngScalarFieldEnum[] | TieneIngScalarFieldEnum
    having?: TieneIngScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TieneIngCountAggregateInputType | true
    _avg?: TieneIngAvgAggregateInputType
    _sum?: TieneIngSumAggregateInputType
    _min?: TieneIngMinAggregateInputType
    _max?: TieneIngMaxAggregateInputType
  }

  export type TieneIngGroupByOutputType = {
    id_tieneing: number
    id_receta: number
    id_ingrediente: number
    cantidad: number
    id_unidad: number
    _count: TieneIngCountAggregateOutputType | null
    _avg: TieneIngAvgAggregateOutputType | null
    _sum: TieneIngSumAggregateOutputType | null
    _min: TieneIngMinAggregateOutputType | null
    _max: TieneIngMaxAggregateOutputType | null
  }

  type GetTieneIngGroupByPayload<T extends TieneIngGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TieneIngGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TieneIngGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TieneIngGroupByOutputType[P]>
            : GetScalarType<T[P], TieneIngGroupByOutputType[P]>
        }
      >
    >


  export type TieneIngSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tieneing?: boolean
    id_receta?: boolean
    id_ingrediente?: boolean
    cantidad?: boolean
    id_unidad?: boolean
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredientesDefaultArgs<ExtArgs>
    unidad?: boolean | UnidadesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tieneIng"]>

  export type TieneIngSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tieneing?: boolean
    id_receta?: boolean
    id_ingrediente?: boolean
    cantidad?: boolean
    id_unidad?: boolean
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredientesDefaultArgs<ExtArgs>
    unidad?: boolean | UnidadesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tieneIng"]>

  export type TieneIngSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tieneing?: boolean
    id_receta?: boolean
    id_ingrediente?: boolean
    cantidad?: boolean
    id_unidad?: boolean
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredientesDefaultArgs<ExtArgs>
    unidad?: boolean | UnidadesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tieneIng"]>

  export type TieneIngSelectScalar = {
    id_tieneing?: boolean
    id_receta?: boolean
    id_ingrediente?: boolean
    cantidad?: boolean
    id_unidad?: boolean
  }

  export type TieneIngOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tieneing" | "id_receta" | "id_ingrediente" | "cantidad" | "id_unidad", ExtArgs["result"]["tieneIng"]>
  export type TieneIngInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredientesDefaultArgs<ExtArgs>
    unidad?: boolean | UnidadesDefaultArgs<ExtArgs>
  }
  export type TieneIngIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredientesDefaultArgs<ExtArgs>
    unidad?: boolean | UnidadesDefaultArgs<ExtArgs>
  }
  export type TieneIngIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredientesDefaultArgs<ExtArgs>
    unidad?: boolean | UnidadesDefaultArgs<ExtArgs>
  }

  export type $TieneIngPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TieneIng"
    objects: {
      receta: Prisma.$RecetasPayload<ExtArgs>
      ingrediente: Prisma.$IngredientesPayload<ExtArgs>
      unidad: Prisma.$UnidadesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tieneing: number
      id_receta: number
      id_ingrediente: number
      cantidad: number
      id_unidad: number
    }, ExtArgs["result"]["tieneIng"]>
    composites: {}
  }

  type TieneIngGetPayload<S extends boolean | null | undefined | TieneIngDefaultArgs> = $Result.GetResult<Prisma.$TieneIngPayload, S>

  type TieneIngCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TieneIngFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TieneIngCountAggregateInputType | true
    }

  export interface TieneIngDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TieneIng'], meta: { name: 'TieneIng' } }
    /**
     * Find zero or one TieneIng that matches the filter.
     * @param {TieneIngFindUniqueArgs} args - Arguments to find a TieneIng
     * @example
     * // Get one TieneIng
     * const tieneIng = await prisma.tieneIng.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TieneIngFindUniqueArgs>(args: SelectSubset<T, TieneIngFindUniqueArgs<ExtArgs>>): Prisma__TieneIngClient<$Result.GetResult<Prisma.$TieneIngPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TieneIng that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TieneIngFindUniqueOrThrowArgs} args - Arguments to find a TieneIng
     * @example
     * // Get one TieneIng
     * const tieneIng = await prisma.tieneIng.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TieneIngFindUniqueOrThrowArgs>(args: SelectSubset<T, TieneIngFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TieneIngClient<$Result.GetResult<Prisma.$TieneIngPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TieneIng that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TieneIngFindFirstArgs} args - Arguments to find a TieneIng
     * @example
     * // Get one TieneIng
     * const tieneIng = await prisma.tieneIng.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TieneIngFindFirstArgs>(args?: SelectSubset<T, TieneIngFindFirstArgs<ExtArgs>>): Prisma__TieneIngClient<$Result.GetResult<Prisma.$TieneIngPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TieneIng that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TieneIngFindFirstOrThrowArgs} args - Arguments to find a TieneIng
     * @example
     * // Get one TieneIng
     * const tieneIng = await prisma.tieneIng.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TieneIngFindFirstOrThrowArgs>(args?: SelectSubset<T, TieneIngFindFirstOrThrowArgs<ExtArgs>>): Prisma__TieneIngClient<$Result.GetResult<Prisma.$TieneIngPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TieneIngs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TieneIngFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TieneIngs
     * const tieneIngs = await prisma.tieneIng.findMany()
     * 
     * // Get first 10 TieneIngs
     * const tieneIngs = await prisma.tieneIng.findMany({ take: 10 })
     * 
     * // Only select the `id_tieneing`
     * const tieneIngWithId_tieneingOnly = await prisma.tieneIng.findMany({ select: { id_tieneing: true } })
     * 
     */
    findMany<T extends TieneIngFindManyArgs>(args?: SelectSubset<T, TieneIngFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TieneIngPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TieneIng.
     * @param {TieneIngCreateArgs} args - Arguments to create a TieneIng.
     * @example
     * // Create one TieneIng
     * const TieneIng = await prisma.tieneIng.create({
     *   data: {
     *     // ... data to create a TieneIng
     *   }
     * })
     * 
     */
    create<T extends TieneIngCreateArgs>(args: SelectSubset<T, TieneIngCreateArgs<ExtArgs>>): Prisma__TieneIngClient<$Result.GetResult<Prisma.$TieneIngPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TieneIngs.
     * @param {TieneIngCreateManyArgs} args - Arguments to create many TieneIngs.
     * @example
     * // Create many TieneIngs
     * const tieneIng = await prisma.tieneIng.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TieneIngCreateManyArgs>(args?: SelectSubset<T, TieneIngCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TieneIngs and returns the data saved in the database.
     * @param {TieneIngCreateManyAndReturnArgs} args - Arguments to create many TieneIngs.
     * @example
     * // Create many TieneIngs
     * const tieneIng = await prisma.tieneIng.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TieneIngs and only return the `id_tieneing`
     * const tieneIngWithId_tieneingOnly = await prisma.tieneIng.createManyAndReturn({
     *   select: { id_tieneing: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TieneIngCreateManyAndReturnArgs>(args?: SelectSubset<T, TieneIngCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TieneIngPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TieneIng.
     * @param {TieneIngDeleteArgs} args - Arguments to delete one TieneIng.
     * @example
     * // Delete one TieneIng
     * const TieneIng = await prisma.tieneIng.delete({
     *   where: {
     *     // ... filter to delete one TieneIng
     *   }
     * })
     * 
     */
    delete<T extends TieneIngDeleteArgs>(args: SelectSubset<T, TieneIngDeleteArgs<ExtArgs>>): Prisma__TieneIngClient<$Result.GetResult<Prisma.$TieneIngPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TieneIng.
     * @param {TieneIngUpdateArgs} args - Arguments to update one TieneIng.
     * @example
     * // Update one TieneIng
     * const tieneIng = await prisma.tieneIng.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TieneIngUpdateArgs>(args: SelectSubset<T, TieneIngUpdateArgs<ExtArgs>>): Prisma__TieneIngClient<$Result.GetResult<Prisma.$TieneIngPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TieneIngs.
     * @param {TieneIngDeleteManyArgs} args - Arguments to filter TieneIngs to delete.
     * @example
     * // Delete a few TieneIngs
     * const { count } = await prisma.tieneIng.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TieneIngDeleteManyArgs>(args?: SelectSubset<T, TieneIngDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TieneIngs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TieneIngUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TieneIngs
     * const tieneIng = await prisma.tieneIng.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TieneIngUpdateManyArgs>(args: SelectSubset<T, TieneIngUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TieneIngs and returns the data updated in the database.
     * @param {TieneIngUpdateManyAndReturnArgs} args - Arguments to update many TieneIngs.
     * @example
     * // Update many TieneIngs
     * const tieneIng = await prisma.tieneIng.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TieneIngs and only return the `id_tieneing`
     * const tieneIngWithId_tieneingOnly = await prisma.tieneIng.updateManyAndReturn({
     *   select: { id_tieneing: true },
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
    updateManyAndReturn<T extends TieneIngUpdateManyAndReturnArgs>(args: SelectSubset<T, TieneIngUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TieneIngPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TieneIng.
     * @param {TieneIngUpsertArgs} args - Arguments to update or create a TieneIng.
     * @example
     * // Update or create a TieneIng
     * const tieneIng = await prisma.tieneIng.upsert({
     *   create: {
     *     // ... data to create a TieneIng
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TieneIng we want to update
     *   }
     * })
     */
    upsert<T extends TieneIngUpsertArgs>(args: SelectSubset<T, TieneIngUpsertArgs<ExtArgs>>): Prisma__TieneIngClient<$Result.GetResult<Prisma.$TieneIngPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TieneIngs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TieneIngCountArgs} args - Arguments to filter TieneIngs to count.
     * @example
     * // Count the number of TieneIngs
     * const count = await prisma.tieneIng.count({
     *   where: {
     *     // ... the filter for the TieneIngs we want to count
     *   }
     * })
    **/
    count<T extends TieneIngCountArgs>(
      args?: Subset<T, TieneIngCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TieneIngCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TieneIng.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TieneIngAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TieneIngAggregateArgs>(args: Subset<T, TieneIngAggregateArgs>): Prisma.PrismaPromise<GetTieneIngAggregateType<T>>

    /**
     * Group by TieneIng.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TieneIngGroupByArgs} args - Group by arguments.
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
      T extends TieneIngGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TieneIngGroupByArgs['orderBy'] }
        : { orderBy?: TieneIngGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TieneIngGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTieneIngGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TieneIng model
   */
  readonly fields: TieneIngFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TieneIng.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TieneIngClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receta<T extends RecetasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecetasDefaultArgs<ExtArgs>>): Prisma__RecetasClient<$Result.GetResult<Prisma.$RecetasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingrediente<T extends IngredientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientesDefaultArgs<ExtArgs>>): Prisma__IngredientesClient<$Result.GetResult<Prisma.$IngredientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unidad<T extends UnidadesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnidadesDefaultArgs<ExtArgs>>): Prisma__UnidadesClient<$Result.GetResult<Prisma.$UnidadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TieneIng model
   */
  interface TieneIngFieldRefs {
    readonly id_tieneing: FieldRef<"TieneIng", 'Int'>
    readonly id_receta: FieldRef<"TieneIng", 'Int'>
    readonly id_ingrediente: FieldRef<"TieneIng", 'Int'>
    readonly cantidad: FieldRef<"TieneIng", 'Float'>
    readonly id_unidad: FieldRef<"TieneIng", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TieneIng findUnique
   */
  export type TieneIngFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TieneIng
     */
    select?: TieneIngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TieneIng
     */
    omit?: TieneIngOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TieneIngInclude<ExtArgs> | null
    /**
     * Filter, which TieneIng to fetch.
     */
    where: TieneIngWhereUniqueInput
  }

  /**
   * TieneIng findUniqueOrThrow
   */
  export type TieneIngFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TieneIng
     */
    select?: TieneIngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TieneIng
     */
    omit?: TieneIngOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TieneIngInclude<ExtArgs> | null
    /**
     * Filter, which TieneIng to fetch.
     */
    where: TieneIngWhereUniqueInput
  }

  /**
   * TieneIng findFirst
   */
  export type TieneIngFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TieneIng
     */
    select?: TieneIngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TieneIng
     */
    omit?: TieneIngOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TieneIngInclude<ExtArgs> | null
    /**
     * Filter, which TieneIng to fetch.
     */
    where?: TieneIngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TieneIngs to fetch.
     */
    orderBy?: TieneIngOrderByWithRelationInput | TieneIngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TieneIngs.
     */
    cursor?: TieneIngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TieneIngs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TieneIngs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TieneIngs.
     */
    distinct?: TieneIngScalarFieldEnum | TieneIngScalarFieldEnum[]
  }

  /**
   * TieneIng findFirstOrThrow
   */
  export type TieneIngFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TieneIng
     */
    select?: TieneIngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TieneIng
     */
    omit?: TieneIngOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TieneIngInclude<ExtArgs> | null
    /**
     * Filter, which TieneIng to fetch.
     */
    where?: TieneIngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TieneIngs to fetch.
     */
    orderBy?: TieneIngOrderByWithRelationInput | TieneIngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TieneIngs.
     */
    cursor?: TieneIngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TieneIngs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TieneIngs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TieneIngs.
     */
    distinct?: TieneIngScalarFieldEnum | TieneIngScalarFieldEnum[]
  }

  /**
   * TieneIng findMany
   */
  export type TieneIngFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TieneIng
     */
    select?: TieneIngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TieneIng
     */
    omit?: TieneIngOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TieneIngInclude<ExtArgs> | null
    /**
     * Filter, which TieneIngs to fetch.
     */
    where?: TieneIngWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TieneIngs to fetch.
     */
    orderBy?: TieneIngOrderByWithRelationInput | TieneIngOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TieneIngs.
     */
    cursor?: TieneIngWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TieneIngs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TieneIngs.
     */
    skip?: number
    distinct?: TieneIngScalarFieldEnum | TieneIngScalarFieldEnum[]
  }

  /**
   * TieneIng create
   */
  export type TieneIngCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TieneIng
     */
    select?: TieneIngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TieneIng
     */
    omit?: TieneIngOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TieneIngInclude<ExtArgs> | null
    /**
     * The data needed to create a TieneIng.
     */
    data: XOR<TieneIngCreateInput, TieneIngUncheckedCreateInput>
  }

  /**
   * TieneIng createMany
   */
  export type TieneIngCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TieneIngs.
     */
    data: TieneIngCreateManyInput | TieneIngCreateManyInput[]
  }

  /**
   * TieneIng createManyAndReturn
   */
  export type TieneIngCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TieneIng
     */
    select?: TieneIngSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TieneIng
     */
    omit?: TieneIngOmit<ExtArgs> | null
    /**
     * The data used to create many TieneIngs.
     */
    data: TieneIngCreateManyInput | TieneIngCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TieneIngIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TieneIng update
   */
  export type TieneIngUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TieneIng
     */
    select?: TieneIngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TieneIng
     */
    omit?: TieneIngOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TieneIngInclude<ExtArgs> | null
    /**
     * The data needed to update a TieneIng.
     */
    data: XOR<TieneIngUpdateInput, TieneIngUncheckedUpdateInput>
    /**
     * Choose, which TieneIng to update.
     */
    where: TieneIngWhereUniqueInput
  }

  /**
   * TieneIng updateMany
   */
  export type TieneIngUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TieneIngs.
     */
    data: XOR<TieneIngUpdateManyMutationInput, TieneIngUncheckedUpdateManyInput>
    /**
     * Filter which TieneIngs to update
     */
    where?: TieneIngWhereInput
    /**
     * Limit how many TieneIngs to update.
     */
    limit?: number
  }

  /**
   * TieneIng updateManyAndReturn
   */
  export type TieneIngUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TieneIng
     */
    select?: TieneIngSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TieneIng
     */
    omit?: TieneIngOmit<ExtArgs> | null
    /**
     * The data used to update TieneIngs.
     */
    data: XOR<TieneIngUpdateManyMutationInput, TieneIngUncheckedUpdateManyInput>
    /**
     * Filter which TieneIngs to update
     */
    where?: TieneIngWhereInput
    /**
     * Limit how many TieneIngs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TieneIngIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TieneIng upsert
   */
  export type TieneIngUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TieneIng
     */
    select?: TieneIngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TieneIng
     */
    omit?: TieneIngOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TieneIngInclude<ExtArgs> | null
    /**
     * The filter to search for the TieneIng to update in case it exists.
     */
    where: TieneIngWhereUniqueInput
    /**
     * In case the TieneIng found by the `where` argument doesn't exist, create a new TieneIng with this data.
     */
    create: XOR<TieneIngCreateInput, TieneIngUncheckedCreateInput>
    /**
     * In case the TieneIng was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TieneIngUpdateInput, TieneIngUncheckedUpdateInput>
  }

  /**
   * TieneIng delete
   */
  export type TieneIngDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TieneIng
     */
    select?: TieneIngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TieneIng
     */
    omit?: TieneIngOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TieneIngInclude<ExtArgs> | null
    /**
     * Filter which TieneIng to delete.
     */
    where: TieneIngWhereUniqueInput
  }

  /**
   * TieneIng deleteMany
   */
  export type TieneIngDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TieneIngs to delete
     */
    where?: TieneIngWhereInput
    /**
     * Limit how many TieneIngs to delete.
     */
    limit?: number
  }

  /**
   * TieneIng without action
   */
  export type TieneIngDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TieneIng
     */
    select?: TieneIngSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TieneIng
     */
    omit?: TieneIngOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TieneIngInclude<ExtArgs> | null
  }


  /**
   * Model PlanComidas
   */

  export type AggregatePlanComidas = {
    _count: PlanComidasCountAggregateOutputType | null
    _avg: PlanComidasAvgAggregateOutputType | null
    _sum: PlanComidasSumAggregateOutputType | null
    _min: PlanComidasMinAggregateOutputType | null
    _max: PlanComidasMaxAggregateOutputType | null
  }

  export type PlanComidasAvgAggregateOutputType = {
    id_plan: number | null
    id_receta: number | null
  }

  export type PlanComidasSumAggregateOutputType = {
    id_plan: number | null
    id_receta: number | null
  }

  export type PlanComidasMinAggregateOutputType = {
    id_plan: number | null
    fecha: Date | null
    momento: string | null
    id_receta: number | null
  }

  export type PlanComidasMaxAggregateOutputType = {
    id_plan: number | null
    fecha: Date | null
    momento: string | null
    id_receta: number | null
  }

  export type PlanComidasCountAggregateOutputType = {
    id_plan: number
    fecha: number
    momento: number
    id_receta: number
    _all: number
  }


  export type PlanComidasAvgAggregateInputType = {
    id_plan?: true
    id_receta?: true
  }

  export type PlanComidasSumAggregateInputType = {
    id_plan?: true
    id_receta?: true
  }

  export type PlanComidasMinAggregateInputType = {
    id_plan?: true
    fecha?: true
    momento?: true
    id_receta?: true
  }

  export type PlanComidasMaxAggregateInputType = {
    id_plan?: true
    fecha?: true
    momento?: true
    id_receta?: true
  }

  export type PlanComidasCountAggregateInputType = {
    id_plan?: true
    fecha?: true
    momento?: true
    id_receta?: true
    _all?: true
  }

  export type PlanComidasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanComidas to aggregate.
     */
    where?: PlanComidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanComidas to fetch.
     */
    orderBy?: PlanComidasOrderByWithRelationInput | PlanComidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanComidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanComidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanComidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanComidas
    **/
    _count?: true | PlanComidasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanComidasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanComidasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanComidasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanComidasMaxAggregateInputType
  }

  export type GetPlanComidasAggregateType<T extends PlanComidasAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanComidas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanComidas[P]>
      : GetScalarType<T[P], AggregatePlanComidas[P]>
  }




  export type PlanComidasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanComidasWhereInput
    orderBy?: PlanComidasOrderByWithAggregationInput | PlanComidasOrderByWithAggregationInput[]
    by: PlanComidasScalarFieldEnum[] | PlanComidasScalarFieldEnum
    having?: PlanComidasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanComidasCountAggregateInputType | true
    _avg?: PlanComidasAvgAggregateInputType
    _sum?: PlanComidasSumAggregateInputType
    _min?: PlanComidasMinAggregateInputType
    _max?: PlanComidasMaxAggregateInputType
  }

  export type PlanComidasGroupByOutputType = {
    id_plan: number
    fecha: Date
    momento: string
    id_receta: number
    _count: PlanComidasCountAggregateOutputType | null
    _avg: PlanComidasAvgAggregateOutputType | null
    _sum: PlanComidasSumAggregateOutputType | null
    _min: PlanComidasMinAggregateOutputType | null
    _max: PlanComidasMaxAggregateOutputType | null
  }

  type GetPlanComidasGroupByPayload<T extends PlanComidasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanComidasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanComidasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanComidasGroupByOutputType[P]>
            : GetScalarType<T[P], PlanComidasGroupByOutputType[P]>
        }
      >
    >


  export type PlanComidasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_plan?: boolean
    fecha?: boolean
    momento?: boolean
    id_receta?: boolean
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planComidas"]>

  export type PlanComidasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_plan?: boolean
    fecha?: boolean
    momento?: boolean
    id_receta?: boolean
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planComidas"]>

  export type PlanComidasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_plan?: boolean
    fecha?: boolean
    momento?: boolean
    id_receta?: boolean
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planComidas"]>

  export type PlanComidasSelectScalar = {
    id_plan?: boolean
    fecha?: boolean
    momento?: boolean
    id_receta?: boolean
  }

  export type PlanComidasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_plan" | "fecha" | "momento" | "id_receta", ExtArgs["result"]["planComidas"]>
  export type PlanComidasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
  }
  export type PlanComidasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
  }
  export type PlanComidasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta?: boolean | RecetasDefaultArgs<ExtArgs>
  }

  export type $PlanComidasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanComidas"
    objects: {
      receta: Prisma.$RecetasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_plan: number
      fecha: Date
      momento: string
      id_receta: number
    }, ExtArgs["result"]["planComidas"]>
    composites: {}
  }

  type PlanComidasGetPayload<S extends boolean | null | undefined | PlanComidasDefaultArgs> = $Result.GetResult<Prisma.$PlanComidasPayload, S>

  type PlanComidasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanComidasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanComidasCountAggregateInputType | true
    }

  export interface PlanComidasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanComidas'], meta: { name: 'PlanComidas' } }
    /**
     * Find zero or one PlanComidas that matches the filter.
     * @param {PlanComidasFindUniqueArgs} args - Arguments to find a PlanComidas
     * @example
     * // Get one PlanComidas
     * const planComidas = await prisma.planComidas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanComidasFindUniqueArgs>(args: SelectSubset<T, PlanComidasFindUniqueArgs<ExtArgs>>): Prisma__PlanComidasClient<$Result.GetResult<Prisma.$PlanComidasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanComidas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanComidasFindUniqueOrThrowArgs} args - Arguments to find a PlanComidas
     * @example
     * // Get one PlanComidas
     * const planComidas = await prisma.planComidas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanComidasFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanComidasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanComidasClient<$Result.GetResult<Prisma.$PlanComidasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanComidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanComidasFindFirstArgs} args - Arguments to find a PlanComidas
     * @example
     * // Get one PlanComidas
     * const planComidas = await prisma.planComidas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanComidasFindFirstArgs>(args?: SelectSubset<T, PlanComidasFindFirstArgs<ExtArgs>>): Prisma__PlanComidasClient<$Result.GetResult<Prisma.$PlanComidasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanComidas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanComidasFindFirstOrThrowArgs} args - Arguments to find a PlanComidas
     * @example
     * // Get one PlanComidas
     * const planComidas = await prisma.planComidas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanComidasFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanComidasFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanComidasClient<$Result.GetResult<Prisma.$PlanComidasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanComidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanComidasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanComidas
     * const planComidas = await prisma.planComidas.findMany()
     * 
     * // Get first 10 PlanComidas
     * const planComidas = await prisma.planComidas.findMany({ take: 10 })
     * 
     * // Only select the `id_plan`
     * const planComidasWithId_planOnly = await prisma.planComidas.findMany({ select: { id_plan: true } })
     * 
     */
    findMany<T extends PlanComidasFindManyArgs>(args?: SelectSubset<T, PlanComidasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanComidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanComidas.
     * @param {PlanComidasCreateArgs} args - Arguments to create a PlanComidas.
     * @example
     * // Create one PlanComidas
     * const PlanComidas = await prisma.planComidas.create({
     *   data: {
     *     // ... data to create a PlanComidas
     *   }
     * })
     * 
     */
    create<T extends PlanComidasCreateArgs>(args: SelectSubset<T, PlanComidasCreateArgs<ExtArgs>>): Prisma__PlanComidasClient<$Result.GetResult<Prisma.$PlanComidasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanComidas.
     * @param {PlanComidasCreateManyArgs} args - Arguments to create many PlanComidas.
     * @example
     * // Create many PlanComidas
     * const planComidas = await prisma.planComidas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanComidasCreateManyArgs>(args?: SelectSubset<T, PlanComidasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanComidas and returns the data saved in the database.
     * @param {PlanComidasCreateManyAndReturnArgs} args - Arguments to create many PlanComidas.
     * @example
     * // Create many PlanComidas
     * const planComidas = await prisma.planComidas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanComidas and only return the `id_plan`
     * const planComidasWithId_planOnly = await prisma.planComidas.createManyAndReturn({
     *   select: { id_plan: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanComidasCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanComidasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanComidasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanComidas.
     * @param {PlanComidasDeleteArgs} args - Arguments to delete one PlanComidas.
     * @example
     * // Delete one PlanComidas
     * const PlanComidas = await prisma.planComidas.delete({
     *   where: {
     *     // ... filter to delete one PlanComidas
     *   }
     * })
     * 
     */
    delete<T extends PlanComidasDeleteArgs>(args: SelectSubset<T, PlanComidasDeleteArgs<ExtArgs>>): Prisma__PlanComidasClient<$Result.GetResult<Prisma.$PlanComidasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanComidas.
     * @param {PlanComidasUpdateArgs} args - Arguments to update one PlanComidas.
     * @example
     * // Update one PlanComidas
     * const planComidas = await prisma.planComidas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanComidasUpdateArgs>(args: SelectSubset<T, PlanComidasUpdateArgs<ExtArgs>>): Prisma__PlanComidasClient<$Result.GetResult<Prisma.$PlanComidasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanComidas.
     * @param {PlanComidasDeleteManyArgs} args - Arguments to filter PlanComidas to delete.
     * @example
     * // Delete a few PlanComidas
     * const { count } = await prisma.planComidas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanComidasDeleteManyArgs>(args?: SelectSubset<T, PlanComidasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanComidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanComidasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanComidas
     * const planComidas = await prisma.planComidas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanComidasUpdateManyArgs>(args: SelectSubset<T, PlanComidasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanComidas and returns the data updated in the database.
     * @param {PlanComidasUpdateManyAndReturnArgs} args - Arguments to update many PlanComidas.
     * @example
     * // Update many PlanComidas
     * const planComidas = await prisma.planComidas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanComidas and only return the `id_plan`
     * const planComidasWithId_planOnly = await prisma.planComidas.updateManyAndReturn({
     *   select: { id_plan: true },
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
    updateManyAndReturn<T extends PlanComidasUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanComidasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanComidasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanComidas.
     * @param {PlanComidasUpsertArgs} args - Arguments to update or create a PlanComidas.
     * @example
     * // Update or create a PlanComidas
     * const planComidas = await prisma.planComidas.upsert({
     *   create: {
     *     // ... data to create a PlanComidas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanComidas we want to update
     *   }
     * })
     */
    upsert<T extends PlanComidasUpsertArgs>(args: SelectSubset<T, PlanComidasUpsertArgs<ExtArgs>>): Prisma__PlanComidasClient<$Result.GetResult<Prisma.$PlanComidasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanComidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanComidasCountArgs} args - Arguments to filter PlanComidas to count.
     * @example
     * // Count the number of PlanComidas
     * const count = await prisma.planComidas.count({
     *   where: {
     *     // ... the filter for the PlanComidas we want to count
     *   }
     * })
    **/
    count<T extends PlanComidasCountArgs>(
      args?: Subset<T, PlanComidasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanComidasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanComidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanComidasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanComidasAggregateArgs>(args: Subset<T, PlanComidasAggregateArgs>): Prisma.PrismaPromise<GetPlanComidasAggregateType<T>>

    /**
     * Group by PlanComidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanComidasGroupByArgs} args - Group by arguments.
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
      T extends PlanComidasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanComidasGroupByArgs['orderBy'] }
        : { orderBy?: PlanComidasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanComidasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanComidasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanComidas model
   */
  readonly fields: PlanComidasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanComidas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanComidasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receta<T extends RecetasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecetasDefaultArgs<ExtArgs>>): Prisma__RecetasClient<$Result.GetResult<Prisma.$RecetasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlanComidas model
   */
  interface PlanComidasFieldRefs {
    readonly id_plan: FieldRef<"PlanComidas", 'Int'>
    readonly fecha: FieldRef<"PlanComidas", 'DateTime'>
    readonly momento: FieldRef<"PlanComidas", 'String'>
    readonly id_receta: FieldRef<"PlanComidas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlanComidas findUnique
   */
  export type PlanComidasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanComidas
     */
    select?: PlanComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanComidas
     */
    omit?: PlanComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanComidasInclude<ExtArgs> | null
    /**
     * Filter, which PlanComidas to fetch.
     */
    where: PlanComidasWhereUniqueInput
  }

  /**
   * PlanComidas findUniqueOrThrow
   */
  export type PlanComidasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanComidas
     */
    select?: PlanComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanComidas
     */
    omit?: PlanComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanComidasInclude<ExtArgs> | null
    /**
     * Filter, which PlanComidas to fetch.
     */
    where: PlanComidasWhereUniqueInput
  }

  /**
   * PlanComidas findFirst
   */
  export type PlanComidasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanComidas
     */
    select?: PlanComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanComidas
     */
    omit?: PlanComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanComidasInclude<ExtArgs> | null
    /**
     * Filter, which PlanComidas to fetch.
     */
    where?: PlanComidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanComidas to fetch.
     */
    orderBy?: PlanComidasOrderByWithRelationInput | PlanComidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanComidas.
     */
    cursor?: PlanComidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanComidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanComidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanComidas.
     */
    distinct?: PlanComidasScalarFieldEnum | PlanComidasScalarFieldEnum[]
  }

  /**
   * PlanComidas findFirstOrThrow
   */
  export type PlanComidasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanComidas
     */
    select?: PlanComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanComidas
     */
    omit?: PlanComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanComidasInclude<ExtArgs> | null
    /**
     * Filter, which PlanComidas to fetch.
     */
    where?: PlanComidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanComidas to fetch.
     */
    orderBy?: PlanComidasOrderByWithRelationInput | PlanComidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanComidas.
     */
    cursor?: PlanComidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanComidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanComidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanComidas.
     */
    distinct?: PlanComidasScalarFieldEnum | PlanComidasScalarFieldEnum[]
  }

  /**
   * PlanComidas findMany
   */
  export type PlanComidasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanComidas
     */
    select?: PlanComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanComidas
     */
    omit?: PlanComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanComidasInclude<ExtArgs> | null
    /**
     * Filter, which PlanComidas to fetch.
     */
    where?: PlanComidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanComidas to fetch.
     */
    orderBy?: PlanComidasOrderByWithRelationInput | PlanComidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanComidas.
     */
    cursor?: PlanComidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanComidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanComidas.
     */
    skip?: number
    distinct?: PlanComidasScalarFieldEnum | PlanComidasScalarFieldEnum[]
  }

  /**
   * PlanComidas create
   */
  export type PlanComidasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanComidas
     */
    select?: PlanComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanComidas
     */
    omit?: PlanComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanComidasInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanComidas.
     */
    data: XOR<PlanComidasCreateInput, PlanComidasUncheckedCreateInput>
  }

  /**
   * PlanComidas createMany
   */
  export type PlanComidasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanComidas.
     */
    data: PlanComidasCreateManyInput | PlanComidasCreateManyInput[]
  }

  /**
   * PlanComidas createManyAndReturn
   */
  export type PlanComidasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanComidas
     */
    select?: PlanComidasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanComidas
     */
    omit?: PlanComidasOmit<ExtArgs> | null
    /**
     * The data used to create many PlanComidas.
     */
    data: PlanComidasCreateManyInput | PlanComidasCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanComidasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanComidas update
   */
  export type PlanComidasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanComidas
     */
    select?: PlanComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanComidas
     */
    omit?: PlanComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanComidasInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanComidas.
     */
    data: XOR<PlanComidasUpdateInput, PlanComidasUncheckedUpdateInput>
    /**
     * Choose, which PlanComidas to update.
     */
    where: PlanComidasWhereUniqueInput
  }

  /**
   * PlanComidas updateMany
   */
  export type PlanComidasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanComidas.
     */
    data: XOR<PlanComidasUpdateManyMutationInput, PlanComidasUncheckedUpdateManyInput>
    /**
     * Filter which PlanComidas to update
     */
    where?: PlanComidasWhereInput
    /**
     * Limit how many PlanComidas to update.
     */
    limit?: number
  }

  /**
   * PlanComidas updateManyAndReturn
   */
  export type PlanComidasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanComidas
     */
    select?: PlanComidasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanComidas
     */
    omit?: PlanComidasOmit<ExtArgs> | null
    /**
     * The data used to update PlanComidas.
     */
    data: XOR<PlanComidasUpdateManyMutationInput, PlanComidasUncheckedUpdateManyInput>
    /**
     * Filter which PlanComidas to update
     */
    where?: PlanComidasWhereInput
    /**
     * Limit how many PlanComidas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanComidasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanComidas upsert
   */
  export type PlanComidasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanComidas
     */
    select?: PlanComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanComidas
     */
    omit?: PlanComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanComidasInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanComidas to update in case it exists.
     */
    where: PlanComidasWhereUniqueInput
    /**
     * In case the PlanComidas found by the `where` argument doesn't exist, create a new PlanComidas with this data.
     */
    create: XOR<PlanComidasCreateInput, PlanComidasUncheckedCreateInput>
    /**
     * In case the PlanComidas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanComidasUpdateInput, PlanComidasUncheckedUpdateInput>
  }

  /**
   * PlanComidas delete
   */
  export type PlanComidasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanComidas
     */
    select?: PlanComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanComidas
     */
    omit?: PlanComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanComidasInclude<ExtArgs> | null
    /**
     * Filter which PlanComidas to delete.
     */
    where: PlanComidasWhereUniqueInput
  }

  /**
   * PlanComidas deleteMany
   */
  export type PlanComidasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanComidas to delete
     */
    where?: PlanComidasWhereInput
    /**
     * Limit how many PlanComidas to delete.
     */
    limit?: number
  }

  /**
   * PlanComidas without action
   */
  export type PlanComidasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanComidas
     */
    select?: PlanComidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanComidas
     */
    omit?: PlanComidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanComidasInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre: 'nombre',
    email: 'email',
    password: 'password',
    rol: 'rol',
    creado: 'creado'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const TipoScalarFieldEnum: {
    id_tipo: 'id_tipo',
    tipo: 'tipo'
  };

  export type TipoScalarFieldEnum = (typeof TipoScalarFieldEnum)[keyof typeof TipoScalarFieldEnum]


  export const RecetasScalarFieldEnum: {
    id_receta: 'id_receta',
    nombre: 'nombre',
    id_tipo: 'id_tipo',
    id_usuario: 'id_usuario'
  };

  export type RecetasScalarFieldEnum = (typeof RecetasScalarFieldEnum)[keyof typeof RecetasScalarFieldEnum]


  export const DetalleScalarFieldEnum: {
    id_detalle: 'id_detalle',
    id_receta: 'id_receta',
    detalle: 'detalle'
  };

  export type DetalleScalarFieldEnum = (typeof DetalleScalarFieldEnum)[keyof typeof DetalleScalarFieldEnum]


  export const IngredientesScalarFieldEnum: {
    id_ingrediente: 'id_ingrediente',
    nombre: 'nombre'
  };

  export type IngredientesScalarFieldEnum = (typeof IngredientesScalarFieldEnum)[keyof typeof IngredientesScalarFieldEnum]


  export const UnidadesScalarFieldEnum: {
    id_unidad: 'id_unidad',
    unidad: 'unidad'
  };

  export type UnidadesScalarFieldEnum = (typeof UnidadesScalarFieldEnum)[keyof typeof UnidadesScalarFieldEnum]


  export const TieneIngScalarFieldEnum: {
    id_tieneing: 'id_tieneing',
    id_receta: 'id_receta',
    id_ingrediente: 'id_ingrediente',
    cantidad: 'cantidad',
    id_unidad: 'id_unidad'
  };

  export type TieneIngScalarFieldEnum = (typeof TieneIngScalarFieldEnum)[keyof typeof TieneIngScalarFieldEnum]


  export const PlanComidasScalarFieldEnum: {
    id_plan: 'id_plan',
    fecha: 'fecha',
    momento: 'momento',
    id_receta: 'id_receta'
  };

  export type PlanComidasScalarFieldEnum = (typeof PlanComidasScalarFieldEnum)[keyof typeof PlanComidasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'RolUsuario'
   */
  export type EnumRolUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolUsuario'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id_usuario?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    rol?: EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario
    creado?: DateTimeFilter<"Usuario"> | Date | string
    recetas?: RecetasListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    creado?: SortOrder
    recetas?: RecetasOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    rol?: EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario
    creado?: DateTimeFilter<"Usuario"> | Date | string
    recetas?: RecetasListRelationFilter
  }, "id_usuario" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    creado?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolUsuarioWithAggregatesFilter<"Usuario"> | $Enums.RolUsuario
    creado?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type TipoWhereInput = {
    AND?: TipoWhereInput | TipoWhereInput[]
    OR?: TipoWhereInput[]
    NOT?: TipoWhereInput | TipoWhereInput[]
    id_tipo?: IntFilter<"Tipo"> | number
    tipo?: StringFilter<"Tipo"> | string
    recetas?: RecetasListRelationFilter
  }

  export type TipoOrderByWithRelationInput = {
    id_tipo?: SortOrder
    tipo?: SortOrder
    recetas?: RecetasOrderByRelationAggregateInput
  }

  export type TipoWhereUniqueInput = Prisma.AtLeast<{
    id_tipo?: number
    AND?: TipoWhereInput | TipoWhereInput[]
    OR?: TipoWhereInput[]
    NOT?: TipoWhereInput | TipoWhereInput[]
    tipo?: StringFilter<"Tipo"> | string
    recetas?: RecetasListRelationFilter
  }, "id_tipo">

  export type TipoOrderByWithAggregationInput = {
    id_tipo?: SortOrder
    tipo?: SortOrder
    _count?: TipoCountOrderByAggregateInput
    _avg?: TipoAvgOrderByAggregateInput
    _max?: TipoMaxOrderByAggregateInput
    _min?: TipoMinOrderByAggregateInput
    _sum?: TipoSumOrderByAggregateInput
  }

  export type TipoScalarWhereWithAggregatesInput = {
    AND?: TipoScalarWhereWithAggregatesInput | TipoScalarWhereWithAggregatesInput[]
    OR?: TipoScalarWhereWithAggregatesInput[]
    NOT?: TipoScalarWhereWithAggregatesInput | TipoScalarWhereWithAggregatesInput[]
    id_tipo?: IntWithAggregatesFilter<"Tipo"> | number
    tipo?: StringWithAggregatesFilter<"Tipo"> | string
  }

  export type RecetasWhereInput = {
    AND?: RecetasWhereInput | RecetasWhereInput[]
    OR?: RecetasWhereInput[]
    NOT?: RecetasWhereInput | RecetasWhereInput[]
    id_receta?: IntFilter<"Recetas"> | number
    nombre?: StringFilter<"Recetas"> | string
    id_tipo?: IntFilter<"Recetas"> | number
    id_usuario?: IntFilter<"Recetas"> | number
    tipo?: XOR<TipoScalarRelationFilter, TipoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    detalles?: DetalleListRelationFilter
    tieneIng?: TieneIngListRelationFilter
    planes?: PlanComidasListRelationFilter
  }

  export type RecetasOrderByWithRelationInput = {
    id_receta?: SortOrder
    nombre?: SortOrder
    id_tipo?: SortOrder
    id_usuario?: SortOrder
    tipo?: TipoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    detalles?: DetalleOrderByRelationAggregateInput
    tieneIng?: TieneIngOrderByRelationAggregateInput
    planes?: PlanComidasOrderByRelationAggregateInput
  }

  export type RecetasWhereUniqueInput = Prisma.AtLeast<{
    id_receta?: number
    AND?: RecetasWhereInput | RecetasWhereInput[]
    OR?: RecetasWhereInput[]
    NOT?: RecetasWhereInput | RecetasWhereInput[]
    nombre?: StringFilter<"Recetas"> | string
    id_tipo?: IntFilter<"Recetas"> | number
    id_usuario?: IntFilter<"Recetas"> | number
    tipo?: XOR<TipoScalarRelationFilter, TipoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    detalles?: DetalleListRelationFilter
    tieneIng?: TieneIngListRelationFilter
    planes?: PlanComidasListRelationFilter
  }, "id_receta">

  export type RecetasOrderByWithAggregationInput = {
    id_receta?: SortOrder
    nombre?: SortOrder
    id_tipo?: SortOrder
    id_usuario?: SortOrder
    _count?: RecetasCountOrderByAggregateInput
    _avg?: RecetasAvgOrderByAggregateInput
    _max?: RecetasMaxOrderByAggregateInput
    _min?: RecetasMinOrderByAggregateInput
    _sum?: RecetasSumOrderByAggregateInput
  }

  export type RecetasScalarWhereWithAggregatesInput = {
    AND?: RecetasScalarWhereWithAggregatesInput | RecetasScalarWhereWithAggregatesInput[]
    OR?: RecetasScalarWhereWithAggregatesInput[]
    NOT?: RecetasScalarWhereWithAggregatesInput | RecetasScalarWhereWithAggregatesInput[]
    id_receta?: IntWithAggregatesFilter<"Recetas"> | number
    nombre?: StringWithAggregatesFilter<"Recetas"> | string
    id_tipo?: IntWithAggregatesFilter<"Recetas"> | number
    id_usuario?: IntWithAggregatesFilter<"Recetas"> | number
  }

  export type DetalleWhereInput = {
    AND?: DetalleWhereInput | DetalleWhereInput[]
    OR?: DetalleWhereInput[]
    NOT?: DetalleWhereInput | DetalleWhereInput[]
    id_detalle?: IntFilter<"Detalle"> | number
    id_receta?: IntFilter<"Detalle"> | number
    detalle?: StringFilter<"Detalle"> | string
    receta?: XOR<RecetasScalarRelationFilter, RecetasWhereInput>
  }

  export type DetalleOrderByWithRelationInput = {
    id_detalle?: SortOrder
    id_receta?: SortOrder
    detalle?: SortOrder
    receta?: RecetasOrderByWithRelationInput
  }

  export type DetalleWhereUniqueInput = Prisma.AtLeast<{
    id_detalle?: number
    AND?: DetalleWhereInput | DetalleWhereInput[]
    OR?: DetalleWhereInput[]
    NOT?: DetalleWhereInput | DetalleWhereInput[]
    id_receta?: IntFilter<"Detalle"> | number
    detalle?: StringFilter<"Detalle"> | string
    receta?: XOR<RecetasScalarRelationFilter, RecetasWhereInput>
  }, "id_detalle">

  export type DetalleOrderByWithAggregationInput = {
    id_detalle?: SortOrder
    id_receta?: SortOrder
    detalle?: SortOrder
    _count?: DetalleCountOrderByAggregateInput
    _avg?: DetalleAvgOrderByAggregateInput
    _max?: DetalleMaxOrderByAggregateInput
    _min?: DetalleMinOrderByAggregateInput
    _sum?: DetalleSumOrderByAggregateInput
  }

  export type DetalleScalarWhereWithAggregatesInput = {
    AND?: DetalleScalarWhereWithAggregatesInput | DetalleScalarWhereWithAggregatesInput[]
    OR?: DetalleScalarWhereWithAggregatesInput[]
    NOT?: DetalleScalarWhereWithAggregatesInput | DetalleScalarWhereWithAggregatesInput[]
    id_detalle?: IntWithAggregatesFilter<"Detalle"> | number
    id_receta?: IntWithAggregatesFilter<"Detalle"> | number
    detalle?: StringWithAggregatesFilter<"Detalle"> | string
  }

  export type IngredientesWhereInput = {
    AND?: IngredientesWhereInput | IngredientesWhereInput[]
    OR?: IngredientesWhereInput[]
    NOT?: IngredientesWhereInput | IngredientesWhereInput[]
    id_ingrediente?: IntFilter<"Ingredientes"> | number
    nombre?: StringFilter<"Ingredientes"> | string
    recetas?: TieneIngListRelationFilter
  }

  export type IngredientesOrderByWithRelationInput = {
    id_ingrediente?: SortOrder
    nombre?: SortOrder
    recetas?: TieneIngOrderByRelationAggregateInput
  }

  export type IngredientesWhereUniqueInput = Prisma.AtLeast<{
    id_ingrediente?: number
    AND?: IngredientesWhereInput | IngredientesWhereInput[]
    OR?: IngredientesWhereInput[]
    NOT?: IngredientesWhereInput | IngredientesWhereInput[]
    nombre?: StringFilter<"Ingredientes"> | string
    recetas?: TieneIngListRelationFilter
  }, "id_ingrediente">

  export type IngredientesOrderByWithAggregationInput = {
    id_ingrediente?: SortOrder
    nombre?: SortOrder
    _count?: IngredientesCountOrderByAggregateInput
    _avg?: IngredientesAvgOrderByAggregateInput
    _max?: IngredientesMaxOrderByAggregateInput
    _min?: IngredientesMinOrderByAggregateInput
    _sum?: IngredientesSumOrderByAggregateInput
  }

  export type IngredientesScalarWhereWithAggregatesInput = {
    AND?: IngredientesScalarWhereWithAggregatesInput | IngredientesScalarWhereWithAggregatesInput[]
    OR?: IngredientesScalarWhereWithAggregatesInput[]
    NOT?: IngredientesScalarWhereWithAggregatesInput | IngredientesScalarWhereWithAggregatesInput[]
    id_ingrediente?: IntWithAggregatesFilter<"Ingredientes"> | number
    nombre?: StringWithAggregatesFilter<"Ingredientes"> | string
  }

  export type UnidadesWhereInput = {
    AND?: UnidadesWhereInput | UnidadesWhereInput[]
    OR?: UnidadesWhereInput[]
    NOT?: UnidadesWhereInput | UnidadesWhereInput[]
    id_unidad?: IntFilter<"Unidades"> | number
    unidad?: StringFilter<"Unidades"> | string
    ingredientes?: TieneIngListRelationFilter
  }

  export type UnidadesOrderByWithRelationInput = {
    id_unidad?: SortOrder
    unidad?: SortOrder
    ingredientes?: TieneIngOrderByRelationAggregateInput
  }

  export type UnidadesWhereUniqueInput = Prisma.AtLeast<{
    id_unidad?: number
    AND?: UnidadesWhereInput | UnidadesWhereInput[]
    OR?: UnidadesWhereInput[]
    NOT?: UnidadesWhereInput | UnidadesWhereInput[]
    unidad?: StringFilter<"Unidades"> | string
    ingredientes?: TieneIngListRelationFilter
  }, "id_unidad">

  export type UnidadesOrderByWithAggregationInput = {
    id_unidad?: SortOrder
    unidad?: SortOrder
    _count?: UnidadesCountOrderByAggregateInput
    _avg?: UnidadesAvgOrderByAggregateInput
    _max?: UnidadesMaxOrderByAggregateInput
    _min?: UnidadesMinOrderByAggregateInput
    _sum?: UnidadesSumOrderByAggregateInput
  }

  export type UnidadesScalarWhereWithAggregatesInput = {
    AND?: UnidadesScalarWhereWithAggregatesInput | UnidadesScalarWhereWithAggregatesInput[]
    OR?: UnidadesScalarWhereWithAggregatesInput[]
    NOT?: UnidadesScalarWhereWithAggregatesInput | UnidadesScalarWhereWithAggregatesInput[]
    id_unidad?: IntWithAggregatesFilter<"Unidades"> | number
    unidad?: StringWithAggregatesFilter<"Unidades"> | string
  }

  export type TieneIngWhereInput = {
    AND?: TieneIngWhereInput | TieneIngWhereInput[]
    OR?: TieneIngWhereInput[]
    NOT?: TieneIngWhereInput | TieneIngWhereInput[]
    id_tieneing?: IntFilter<"TieneIng"> | number
    id_receta?: IntFilter<"TieneIng"> | number
    id_ingrediente?: IntFilter<"TieneIng"> | number
    cantidad?: FloatFilter<"TieneIng"> | number
    id_unidad?: IntFilter<"TieneIng"> | number
    receta?: XOR<RecetasScalarRelationFilter, RecetasWhereInput>
    ingrediente?: XOR<IngredientesScalarRelationFilter, IngredientesWhereInput>
    unidad?: XOR<UnidadesScalarRelationFilter, UnidadesWhereInput>
  }

  export type TieneIngOrderByWithRelationInput = {
    id_tieneing?: SortOrder
    id_receta?: SortOrder
    id_ingrediente?: SortOrder
    cantidad?: SortOrder
    id_unidad?: SortOrder
    receta?: RecetasOrderByWithRelationInput
    ingrediente?: IngredientesOrderByWithRelationInput
    unidad?: UnidadesOrderByWithRelationInput
  }

  export type TieneIngWhereUniqueInput = Prisma.AtLeast<{
    id_tieneing?: number
    AND?: TieneIngWhereInput | TieneIngWhereInput[]
    OR?: TieneIngWhereInput[]
    NOT?: TieneIngWhereInput | TieneIngWhereInput[]
    id_receta?: IntFilter<"TieneIng"> | number
    id_ingrediente?: IntFilter<"TieneIng"> | number
    cantidad?: FloatFilter<"TieneIng"> | number
    id_unidad?: IntFilter<"TieneIng"> | number
    receta?: XOR<RecetasScalarRelationFilter, RecetasWhereInput>
    ingrediente?: XOR<IngredientesScalarRelationFilter, IngredientesWhereInput>
    unidad?: XOR<UnidadesScalarRelationFilter, UnidadesWhereInput>
  }, "id_tieneing">

  export type TieneIngOrderByWithAggregationInput = {
    id_tieneing?: SortOrder
    id_receta?: SortOrder
    id_ingrediente?: SortOrder
    cantidad?: SortOrder
    id_unidad?: SortOrder
    _count?: TieneIngCountOrderByAggregateInput
    _avg?: TieneIngAvgOrderByAggregateInput
    _max?: TieneIngMaxOrderByAggregateInput
    _min?: TieneIngMinOrderByAggregateInput
    _sum?: TieneIngSumOrderByAggregateInput
  }

  export type TieneIngScalarWhereWithAggregatesInput = {
    AND?: TieneIngScalarWhereWithAggregatesInput | TieneIngScalarWhereWithAggregatesInput[]
    OR?: TieneIngScalarWhereWithAggregatesInput[]
    NOT?: TieneIngScalarWhereWithAggregatesInput | TieneIngScalarWhereWithAggregatesInput[]
    id_tieneing?: IntWithAggregatesFilter<"TieneIng"> | number
    id_receta?: IntWithAggregatesFilter<"TieneIng"> | number
    id_ingrediente?: IntWithAggregatesFilter<"TieneIng"> | number
    cantidad?: FloatWithAggregatesFilter<"TieneIng"> | number
    id_unidad?: IntWithAggregatesFilter<"TieneIng"> | number
  }

  export type PlanComidasWhereInput = {
    AND?: PlanComidasWhereInput | PlanComidasWhereInput[]
    OR?: PlanComidasWhereInput[]
    NOT?: PlanComidasWhereInput | PlanComidasWhereInput[]
    id_plan?: IntFilter<"PlanComidas"> | number
    fecha?: DateTimeFilter<"PlanComidas"> | Date | string
    momento?: StringFilter<"PlanComidas"> | string
    id_receta?: IntFilter<"PlanComidas"> | number
    receta?: XOR<RecetasScalarRelationFilter, RecetasWhereInput>
  }

  export type PlanComidasOrderByWithRelationInput = {
    id_plan?: SortOrder
    fecha?: SortOrder
    momento?: SortOrder
    id_receta?: SortOrder
    receta?: RecetasOrderByWithRelationInput
  }

  export type PlanComidasWhereUniqueInput = Prisma.AtLeast<{
    id_plan?: number
    fecha_momento?: PlanComidasFecha_momentoCompoundUniqueInput
    AND?: PlanComidasWhereInput | PlanComidasWhereInput[]
    OR?: PlanComidasWhereInput[]
    NOT?: PlanComidasWhereInput | PlanComidasWhereInput[]
    fecha?: DateTimeFilter<"PlanComidas"> | Date | string
    momento?: StringFilter<"PlanComidas"> | string
    id_receta?: IntFilter<"PlanComidas"> | number
    receta?: XOR<RecetasScalarRelationFilter, RecetasWhereInput>
  }, "id_plan" | "fecha_momento">

  export type PlanComidasOrderByWithAggregationInput = {
    id_plan?: SortOrder
    fecha?: SortOrder
    momento?: SortOrder
    id_receta?: SortOrder
    _count?: PlanComidasCountOrderByAggregateInput
    _avg?: PlanComidasAvgOrderByAggregateInput
    _max?: PlanComidasMaxOrderByAggregateInput
    _min?: PlanComidasMinOrderByAggregateInput
    _sum?: PlanComidasSumOrderByAggregateInput
  }

  export type PlanComidasScalarWhereWithAggregatesInput = {
    AND?: PlanComidasScalarWhereWithAggregatesInput | PlanComidasScalarWhereWithAggregatesInput[]
    OR?: PlanComidasScalarWhereWithAggregatesInput[]
    NOT?: PlanComidasScalarWhereWithAggregatesInput | PlanComidasScalarWhereWithAggregatesInput[]
    id_plan?: IntWithAggregatesFilter<"PlanComidas"> | number
    fecha?: DateTimeWithAggregatesFilter<"PlanComidas"> | Date | string
    momento?: StringWithAggregatesFilter<"PlanComidas"> | string
    id_receta?: IntWithAggregatesFilter<"PlanComidas"> | number
  }

  export type UsuarioCreateInput = {
    nombre: string
    email: string
    password: string
    rol: $Enums.RolUsuario
    creado?: Date | string
    recetas?: RecetasCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id_usuario?: number
    nombre: string
    email: string
    password: string
    rol: $Enums.RolUsuario
    creado?: Date | string
    recetas?: RecetasUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    recetas?: RecetasUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
    recetas?: RecetasUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id_usuario?: number
    nombre: string
    email: string
    password: string
    rol: $Enums.RolUsuario
    creado?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoCreateInput = {
    tipo: string
    recetas?: RecetasCreateNestedManyWithoutTipoInput
  }

  export type TipoUncheckedCreateInput = {
    id_tipo?: number
    tipo: string
    recetas?: RecetasUncheckedCreateNestedManyWithoutTipoInput
  }

  export type TipoUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    recetas?: RecetasUpdateManyWithoutTipoNestedInput
  }

  export type TipoUncheckedUpdateInput = {
    id_tipo?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    recetas?: RecetasUncheckedUpdateManyWithoutTipoNestedInput
  }

  export type TipoCreateManyInput = {
    id_tipo?: number
    tipo: string
  }

  export type TipoUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type TipoUncheckedUpdateManyInput = {
    id_tipo?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type RecetasCreateInput = {
    nombre: string
    tipo: TipoCreateNestedOneWithoutRecetasInput
    usuario: UsuarioCreateNestedOneWithoutRecetasInput
    detalles?: DetalleCreateNestedManyWithoutRecetaInput
    tieneIng?: TieneIngCreateNestedManyWithoutRecetaInput
    planes?: PlanComidasCreateNestedManyWithoutRecetaInput
  }

  export type RecetasUncheckedCreateInput = {
    id_receta?: number
    nombre: string
    id_tipo: number
    id_usuario: number
    detalles?: DetalleUncheckedCreateNestedManyWithoutRecetaInput
    tieneIng?: TieneIngUncheckedCreateNestedManyWithoutRecetaInput
    planes?: PlanComidasUncheckedCreateNestedManyWithoutRecetaInput
  }

  export type RecetasUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: TipoUpdateOneRequiredWithoutRecetasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutRecetasNestedInput
    detalles?: DetalleUpdateManyWithoutRecetaNestedInput
    tieneIng?: TieneIngUpdateManyWithoutRecetaNestedInput
    planes?: PlanComidasUpdateManyWithoutRecetaNestedInput
  }

  export type RecetasUncheckedUpdateInput = {
    id_receta?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_tipo?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    detalles?: DetalleUncheckedUpdateManyWithoutRecetaNestedInput
    tieneIng?: TieneIngUncheckedUpdateManyWithoutRecetaNestedInput
    planes?: PlanComidasUncheckedUpdateManyWithoutRecetaNestedInput
  }

  export type RecetasCreateManyInput = {
    id_receta?: number
    nombre: string
    id_tipo: number
    id_usuario: number
  }

  export type RecetasUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type RecetasUncheckedUpdateManyInput = {
    id_receta?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_tipo?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleCreateInput = {
    detalle: string
    receta: RecetasCreateNestedOneWithoutDetallesInput
  }

  export type DetalleUncheckedCreateInput = {
    id_detalle?: number
    id_receta: number
    detalle: string
  }

  export type DetalleUpdateInput = {
    detalle?: StringFieldUpdateOperationsInput | string
    receta?: RecetasUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type DetalleUncheckedUpdateInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_receta?: IntFieldUpdateOperationsInput | number
    detalle?: StringFieldUpdateOperationsInput | string
  }

  export type DetalleCreateManyInput = {
    id_detalle?: number
    id_receta: number
    detalle: string
  }

  export type DetalleUpdateManyMutationInput = {
    detalle?: StringFieldUpdateOperationsInput | string
  }

  export type DetalleUncheckedUpdateManyInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    id_receta?: IntFieldUpdateOperationsInput | number
    detalle?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientesCreateInput = {
    nombre: string
    recetas?: TieneIngCreateNestedManyWithoutIngredienteInput
  }

  export type IngredientesUncheckedCreateInput = {
    id_ingrediente?: number
    nombre: string
    recetas?: TieneIngUncheckedCreateNestedManyWithoutIngredienteInput
  }

  export type IngredientesUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    recetas?: TieneIngUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredientesUncheckedUpdateInput = {
    id_ingrediente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    recetas?: TieneIngUncheckedUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredientesCreateManyInput = {
    id_ingrediente?: number
    nombre: string
  }

  export type IngredientesUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientesUncheckedUpdateManyInput = {
    id_ingrediente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type UnidadesCreateInput = {
    unidad: string
    ingredientes?: TieneIngCreateNestedManyWithoutUnidadInput
  }

  export type UnidadesUncheckedCreateInput = {
    id_unidad?: number
    unidad: string
    ingredientes?: TieneIngUncheckedCreateNestedManyWithoutUnidadInput
  }

  export type UnidadesUpdateInput = {
    unidad?: StringFieldUpdateOperationsInput | string
    ingredientes?: TieneIngUpdateManyWithoutUnidadNestedInput
  }

  export type UnidadesUncheckedUpdateInput = {
    id_unidad?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
    ingredientes?: TieneIngUncheckedUpdateManyWithoutUnidadNestedInput
  }

  export type UnidadesCreateManyInput = {
    id_unidad?: number
    unidad: string
  }

  export type UnidadesUpdateManyMutationInput = {
    unidad?: StringFieldUpdateOperationsInput | string
  }

  export type UnidadesUncheckedUpdateManyInput = {
    id_unidad?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
  }

  export type TieneIngCreateInput = {
    cantidad: number
    receta: RecetasCreateNestedOneWithoutTieneIngInput
    ingrediente: IngredientesCreateNestedOneWithoutRecetasInput
    unidad: UnidadesCreateNestedOneWithoutIngredientesInput
  }

  export type TieneIngUncheckedCreateInput = {
    id_tieneing?: number
    id_receta: number
    id_ingrediente: number
    cantidad: number
    id_unidad: number
  }

  export type TieneIngUpdateInput = {
    cantidad?: FloatFieldUpdateOperationsInput | number
    receta?: RecetasUpdateOneRequiredWithoutTieneIngNestedInput
    ingrediente?: IngredientesUpdateOneRequiredWithoutRecetasNestedInput
    unidad?: UnidadesUpdateOneRequiredWithoutIngredientesNestedInput
  }

  export type TieneIngUncheckedUpdateInput = {
    id_tieneing?: IntFieldUpdateOperationsInput | number
    id_receta?: IntFieldUpdateOperationsInput | number
    id_ingrediente?: IntFieldUpdateOperationsInput | number
    cantidad?: FloatFieldUpdateOperationsInput | number
    id_unidad?: IntFieldUpdateOperationsInput | number
  }

  export type TieneIngCreateManyInput = {
    id_tieneing?: number
    id_receta: number
    id_ingrediente: number
    cantidad: number
    id_unidad: number
  }

  export type TieneIngUpdateManyMutationInput = {
    cantidad?: FloatFieldUpdateOperationsInput | number
  }

  export type TieneIngUncheckedUpdateManyInput = {
    id_tieneing?: IntFieldUpdateOperationsInput | number
    id_receta?: IntFieldUpdateOperationsInput | number
    id_ingrediente?: IntFieldUpdateOperationsInput | number
    cantidad?: FloatFieldUpdateOperationsInput | number
    id_unidad?: IntFieldUpdateOperationsInput | number
  }

  export type PlanComidasCreateInput = {
    fecha: Date | string
    momento: string
    receta: RecetasCreateNestedOneWithoutPlanesInput
  }

  export type PlanComidasUncheckedCreateInput = {
    id_plan?: number
    fecha: Date | string
    momento: string
    id_receta: number
  }

  export type PlanComidasUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    momento?: StringFieldUpdateOperationsInput | string
    receta?: RecetasUpdateOneRequiredWithoutPlanesNestedInput
  }

  export type PlanComidasUncheckedUpdateInput = {
    id_plan?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    momento?: StringFieldUpdateOperationsInput | string
    id_receta?: IntFieldUpdateOperationsInput | number
  }

  export type PlanComidasCreateManyInput = {
    id_plan?: number
    fecha: Date | string
    momento: string
    id_receta: number
  }

  export type PlanComidasUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    momento?: StringFieldUpdateOperationsInput | string
  }

  export type PlanComidasUncheckedUpdateManyInput = {
    id_plan?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    momento?: StringFieldUpdateOperationsInput | string
    id_receta?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRolUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[]
    notIn?: $Enums.RolUsuario[]
    not?: NestedEnumRolUsuarioFilter<$PrismaModel> | $Enums.RolUsuario
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RecetasListRelationFilter = {
    every?: RecetasWhereInput
    some?: RecetasWhereInput
    none?: RecetasWhereInput
  }

  export type RecetasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    creado?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    creado?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    creado?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type EnumRolUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[]
    notIn?: $Enums.RolUsuario[]
    not?: NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.RolUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolUsuarioFilter<$PrismaModel>
    _max?: NestedEnumRolUsuarioFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TipoCountOrderByAggregateInput = {
    id_tipo?: SortOrder
    tipo?: SortOrder
  }

  export type TipoAvgOrderByAggregateInput = {
    id_tipo?: SortOrder
  }

  export type TipoMaxOrderByAggregateInput = {
    id_tipo?: SortOrder
    tipo?: SortOrder
  }

  export type TipoMinOrderByAggregateInput = {
    id_tipo?: SortOrder
    tipo?: SortOrder
  }

  export type TipoSumOrderByAggregateInput = {
    id_tipo?: SortOrder
  }

  export type TipoScalarRelationFilter = {
    is?: TipoWhereInput
    isNot?: TipoWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type DetalleListRelationFilter = {
    every?: DetalleWhereInput
    some?: DetalleWhereInput
    none?: DetalleWhereInput
  }

  export type TieneIngListRelationFilter = {
    every?: TieneIngWhereInput
    some?: TieneIngWhereInput
    none?: TieneIngWhereInput
  }

  export type PlanComidasListRelationFilter = {
    every?: PlanComidasWhereInput
    some?: PlanComidasWhereInput
    none?: PlanComidasWhereInput
  }

  export type DetalleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TieneIngOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanComidasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecetasCountOrderByAggregateInput = {
    id_receta?: SortOrder
    nombre?: SortOrder
    id_tipo?: SortOrder
    id_usuario?: SortOrder
  }

  export type RecetasAvgOrderByAggregateInput = {
    id_receta?: SortOrder
    id_tipo?: SortOrder
    id_usuario?: SortOrder
  }

  export type RecetasMaxOrderByAggregateInput = {
    id_receta?: SortOrder
    nombre?: SortOrder
    id_tipo?: SortOrder
    id_usuario?: SortOrder
  }

  export type RecetasMinOrderByAggregateInput = {
    id_receta?: SortOrder
    nombre?: SortOrder
    id_tipo?: SortOrder
    id_usuario?: SortOrder
  }

  export type RecetasSumOrderByAggregateInput = {
    id_receta?: SortOrder
    id_tipo?: SortOrder
    id_usuario?: SortOrder
  }

  export type RecetasScalarRelationFilter = {
    is?: RecetasWhereInput
    isNot?: RecetasWhereInput
  }

  export type DetalleCountOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_receta?: SortOrder
    detalle?: SortOrder
  }

  export type DetalleAvgOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_receta?: SortOrder
  }

  export type DetalleMaxOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_receta?: SortOrder
    detalle?: SortOrder
  }

  export type DetalleMinOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_receta?: SortOrder
    detalle?: SortOrder
  }

  export type DetalleSumOrderByAggregateInput = {
    id_detalle?: SortOrder
    id_receta?: SortOrder
  }

  export type IngredientesCountOrderByAggregateInput = {
    id_ingrediente?: SortOrder
    nombre?: SortOrder
  }

  export type IngredientesAvgOrderByAggregateInput = {
    id_ingrediente?: SortOrder
  }

  export type IngredientesMaxOrderByAggregateInput = {
    id_ingrediente?: SortOrder
    nombre?: SortOrder
  }

  export type IngredientesMinOrderByAggregateInput = {
    id_ingrediente?: SortOrder
    nombre?: SortOrder
  }

  export type IngredientesSumOrderByAggregateInput = {
    id_ingrediente?: SortOrder
  }

  export type UnidadesCountOrderByAggregateInput = {
    id_unidad?: SortOrder
    unidad?: SortOrder
  }

  export type UnidadesAvgOrderByAggregateInput = {
    id_unidad?: SortOrder
  }

  export type UnidadesMaxOrderByAggregateInput = {
    id_unidad?: SortOrder
    unidad?: SortOrder
  }

  export type UnidadesMinOrderByAggregateInput = {
    id_unidad?: SortOrder
    unidad?: SortOrder
  }

  export type UnidadesSumOrderByAggregateInput = {
    id_unidad?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IngredientesScalarRelationFilter = {
    is?: IngredientesWhereInput
    isNot?: IngredientesWhereInput
  }

  export type UnidadesScalarRelationFilter = {
    is?: UnidadesWhereInput
    isNot?: UnidadesWhereInput
  }

  export type TieneIngCountOrderByAggregateInput = {
    id_tieneing?: SortOrder
    id_receta?: SortOrder
    id_ingrediente?: SortOrder
    cantidad?: SortOrder
    id_unidad?: SortOrder
  }

  export type TieneIngAvgOrderByAggregateInput = {
    id_tieneing?: SortOrder
    id_receta?: SortOrder
    id_ingrediente?: SortOrder
    cantidad?: SortOrder
    id_unidad?: SortOrder
  }

  export type TieneIngMaxOrderByAggregateInput = {
    id_tieneing?: SortOrder
    id_receta?: SortOrder
    id_ingrediente?: SortOrder
    cantidad?: SortOrder
    id_unidad?: SortOrder
  }

  export type TieneIngMinOrderByAggregateInput = {
    id_tieneing?: SortOrder
    id_receta?: SortOrder
    id_ingrediente?: SortOrder
    cantidad?: SortOrder
    id_unidad?: SortOrder
  }

  export type TieneIngSumOrderByAggregateInput = {
    id_tieneing?: SortOrder
    id_receta?: SortOrder
    id_ingrediente?: SortOrder
    cantidad?: SortOrder
    id_unidad?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type PlanComidasFecha_momentoCompoundUniqueInput = {
    fecha: Date | string
    momento: string
  }

  export type PlanComidasCountOrderByAggregateInput = {
    id_plan?: SortOrder
    fecha?: SortOrder
    momento?: SortOrder
    id_receta?: SortOrder
  }

  export type PlanComidasAvgOrderByAggregateInput = {
    id_plan?: SortOrder
    id_receta?: SortOrder
  }

  export type PlanComidasMaxOrderByAggregateInput = {
    id_plan?: SortOrder
    fecha?: SortOrder
    momento?: SortOrder
    id_receta?: SortOrder
  }

  export type PlanComidasMinOrderByAggregateInput = {
    id_plan?: SortOrder
    fecha?: SortOrder
    momento?: SortOrder
    id_receta?: SortOrder
  }

  export type PlanComidasSumOrderByAggregateInput = {
    id_plan?: SortOrder
    id_receta?: SortOrder
  }

  export type RecetasCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RecetasCreateWithoutUsuarioInput, RecetasUncheckedCreateWithoutUsuarioInput> | RecetasCreateWithoutUsuarioInput[] | RecetasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RecetasCreateOrConnectWithoutUsuarioInput | RecetasCreateOrConnectWithoutUsuarioInput[]
    createMany?: RecetasCreateManyUsuarioInputEnvelope
    connect?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
  }

  export type RecetasUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RecetasCreateWithoutUsuarioInput, RecetasUncheckedCreateWithoutUsuarioInput> | RecetasCreateWithoutUsuarioInput[] | RecetasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RecetasCreateOrConnectWithoutUsuarioInput | RecetasCreateOrConnectWithoutUsuarioInput[]
    createMany?: RecetasCreateManyUsuarioInputEnvelope
    connect?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.RolUsuario
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RecetasUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RecetasCreateWithoutUsuarioInput, RecetasUncheckedCreateWithoutUsuarioInput> | RecetasCreateWithoutUsuarioInput[] | RecetasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RecetasCreateOrConnectWithoutUsuarioInput | RecetasCreateOrConnectWithoutUsuarioInput[]
    upsert?: RecetasUpsertWithWhereUniqueWithoutUsuarioInput | RecetasUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RecetasCreateManyUsuarioInputEnvelope
    set?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
    disconnect?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
    delete?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
    connect?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
    update?: RecetasUpdateWithWhereUniqueWithoutUsuarioInput | RecetasUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RecetasUpdateManyWithWhereWithoutUsuarioInput | RecetasUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RecetasScalarWhereInput | RecetasScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecetasUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RecetasCreateWithoutUsuarioInput, RecetasUncheckedCreateWithoutUsuarioInput> | RecetasCreateWithoutUsuarioInput[] | RecetasUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RecetasCreateOrConnectWithoutUsuarioInput | RecetasCreateOrConnectWithoutUsuarioInput[]
    upsert?: RecetasUpsertWithWhereUniqueWithoutUsuarioInput | RecetasUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RecetasCreateManyUsuarioInputEnvelope
    set?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
    disconnect?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
    delete?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
    connect?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
    update?: RecetasUpdateWithWhereUniqueWithoutUsuarioInput | RecetasUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RecetasUpdateManyWithWhereWithoutUsuarioInput | RecetasUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RecetasScalarWhereInput | RecetasScalarWhereInput[]
  }

  export type RecetasCreateNestedManyWithoutTipoInput = {
    create?: XOR<RecetasCreateWithoutTipoInput, RecetasUncheckedCreateWithoutTipoInput> | RecetasCreateWithoutTipoInput[] | RecetasUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: RecetasCreateOrConnectWithoutTipoInput | RecetasCreateOrConnectWithoutTipoInput[]
    createMany?: RecetasCreateManyTipoInputEnvelope
    connect?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
  }

  export type RecetasUncheckedCreateNestedManyWithoutTipoInput = {
    create?: XOR<RecetasCreateWithoutTipoInput, RecetasUncheckedCreateWithoutTipoInput> | RecetasCreateWithoutTipoInput[] | RecetasUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: RecetasCreateOrConnectWithoutTipoInput | RecetasCreateOrConnectWithoutTipoInput[]
    createMany?: RecetasCreateManyTipoInputEnvelope
    connect?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
  }

  export type RecetasUpdateManyWithoutTipoNestedInput = {
    create?: XOR<RecetasCreateWithoutTipoInput, RecetasUncheckedCreateWithoutTipoInput> | RecetasCreateWithoutTipoInput[] | RecetasUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: RecetasCreateOrConnectWithoutTipoInput | RecetasCreateOrConnectWithoutTipoInput[]
    upsert?: RecetasUpsertWithWhereUniqueWithoutTipoInput | RecetasUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: RecetasCreateManyTipoInputEnvelope
    set?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
    disconnect?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
    delete?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
    connect?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
    update?: RecetasUpdateWithWhereUniqueWithoutTipoInput | RecetasUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: RecetasUpdateManyWithWhereWithoutTipoInput | RecetasUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: RecetasScalarWhereInput | RecetasScalarWhereInput[]
  }

  export type RecetasUncheckedUpdateManyWithoutTipoNestedInput = {
    create?: XOR<RecetasCreateWithoutTipoInput, RecetasUncheckedCreateWithoutTipoInput> | RecetasCreateWithoutTipoInput[] | RecetasUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: RecetasCreateOrConnectWithoutTipoInput | RecetasCreateOrConnectWithoutTipoInput[]
    upsert?: RecetasUpsertWithWhereUniqueWithoutTipoInput | RecetasUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: RecetasCreateManyTipoInputEnvelope
    set?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
    disconnect?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
    delete?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
    connect?: RecetasWhereUniqueInput | RecetasWhereUniqueInput[]
    update?: RecetasUpdateWithWhereUniqueWithoutTipoInput | RecetasUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: RecetasUpdateManyWithWhereWithoutTipoInput | RecetasUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: RecetasScalarWhereInput | RecetasScalarWhereInput[]
  }

  export type TipoCreateNestedOneWithoutRecetasInput = {
    create?: XOR<TipoCreateWithoutRecetasInput, TipoUncheckedCreateWithoutRecetasInput>
    connectOrCreate?: TipoCreateOrConnectWithoutRecetasInput
    connect?: TipoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutRecetasInput = {
    create?: XOR<UsuarioCreateWithoutRecetasInput, UsuarioUncheckedCreateWithoutRecetasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRecetasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DetalleCreateNestedManyWithoutRecetaInput = {
    create?: XOR<DetalleCreateWithoutRecetaInput, DetalleUncheckedCreateWithoutRecetaInput> | DetalleCreateWithoutRecetaInput[] | DetalleUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: DetalleCreateOrConnectWithoutRecetaInput | DetalleCreateOrConnectWithoutRecetaInput[]
    createMany?: DetalleCreateManyRecetaInputEnvelope
    connect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
  }

  export type TieneIngCreateNestedManyWithoutRecetaInput = {
    create?: XOR<TieneIngCreateWithoutRecetaInput, TieneIngUncheckedCreateWithoutRecetaInput> | TieneIngCreateWithoutRecetaInput[] | TieneIngUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: TieneIngCreateOrConnectWithoutRecetaInput | TieneIngCreateOrConnectWithoutRecetaInput[]
    createMany?: TieneIngCreateManyRecetaInputEnvelope
    connect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
  }

  export type PlanComidasCreateNestedManyWithoutRecetaInput = {
    create?: XOR<PlanComidasCreateWithoutRecetaInput, PlanComidasUncheckedCreateWithoutRecetaInput> | PlanComidasCreateWithoutRecetaInput[] | PlanComidasUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: PlanComidasCreateOrConnectWithoutRecetaInput | PlanComidasCreateOrConnectWithoutRecetaInput[]
    createMany?: PlanComidasCreateManyRecetaInputEnvelope
    connect?: PlanComidasWhereUniqueInput | PlanComidasWhereUniqueInput[]
  }

  export type DetalleUncheckedCreateNestedManyWithoutRecetaInput = {
    create?: XOR<DetalleCreateWithoutRecetaInput, DetalleUncheckedCreateWithoutRecetaInput> | DetalleCreateWithoutRecetaInput[] | DetalleUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: DetalleCreateOrConnectWithoutRecetaInput | DetalleCreateOrConnectWithoutRecetaInput[]
    createMany?: DetalleCreateManyRecetaInputEnvelope
    connect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
  }

  export type TieneIngUncheckedCreateNestedManyWithoutRecetaInput = {
    create?: XOR<TieneIngCreateWithoutRecetaInput, TieneIngUncheckedCreateWithoutRecetaInput> | TieneIngCreateWithoutRecetaInput[] | TieneIngUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: TieneIngCreateOrConnectWithoutRecetaInput | TieneIngCreateOrConnectWithoutRecetaInput[]
    createMany?: TieneIngCreateManyRecetaInputEnvelope
    connect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
  }

  export type PlanComidasUncheckedCreateNestedManyWithoutRecetaInput = {
    create?: XOR<PlanComidasCreateWithoutRecetaInput, PlanComidasUncheckedCreateWithoutRecetaInput> | PlanComidasCreateWithoutRecetaInput[] | PlanComidasUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: PlanComidasCreateOrConnectWithoutRecetaInput | PlanComidasCreateOrConnectWithoutRecetaInput[]
    createMany?: PlanComidasCreateManyRecetaInputEnvelope
    connect?: PlanComidasWhereUniqueInput | PlanComidasWhereUniqueInput[]
  }

  export type TipoUpdateOneRequiredWithoutRecetasNestedInput = {
    create?: XOR<TipoCreateWithoutRecetasInput, TipoUncheckedCreateWithoutRecetasInput>
    connectOrCreate?: TipoCreateOrConnectWithoutRecetasInput
    upsert?: TipoUpsertWithoutRecetasInput
    connect?: TipoWhereUniqueInput
    update?: XOR<XOR<TipoUpdateToOneWithWhereWithoutRecetasInput, TipoUpdateWithoutRecetasInput>, TipoUncheckedUpdateWithoutRecetasInput>
  }

  export type UsuarioUpdateOneRequiredWithoutRecetasNestedInput = {
    create?: XOR<UsuarioCreateWithoutRecetasInput, UsuarioUncheckedCreateWithoutRecetasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRecetasInput
    upsert?: UsuarioUpsertWithoutRecetasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRecetasInput, UsuarioUpdateWithoutRecetasInput>, UsuarioUncheckedUpdateWithoutRecetasInput>
  }

  export type DetalleUpdateManyWithoutRecetaNestedInput = {
    create?: XOR<DetalleCreateWithoutRecetaInput, DetalleUncheckedCreateWithoutRecetaInput> | DetalleCreateWithoutRecetaInput[] | DetalleUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: DetalleCreateOrConnectWithoutRecetaInput | DetalleCreateOrConnectWithoutRecetaInput[]
    upsert?: DetalleUpsertWithWhereUniqueWithoutRecetaInput | DetalleUpsertWithWhereUniqueWithoutRecetaInput[]
    createMany?: DetalleCreateManyRecetaInputEnvelope
    set?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    disconnect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    delete?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    connect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    update?: DetalleUpdateWithWhereUniqueWithoutRecetaInput | DetalleUpdateWithWhereUniqueWithoutRecetaInput[]
    updateMany?: DetalleUpdateManyWithWhereWithoutRecetaInput | DetalleUpdateManyWithWhereWithoutRecetaInput[]
    deleteMany?: DetalleScalarWhereInput | DetalleScalarWhereInput[]
  }

  export type TieneIngUpdateManyWithoutRecetaNestedInput = {
    create?: XOR<TieneIngCreateWithoutRecetaInput, TieneIngUncheckedCreateWithoutRecetaInput> | TieneIngCreateWithoutRecetaInput[] | TieneIngUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: TieneIngCreateOrConnectWithoutRecetaInput | TieneIngCreateOrConnectWithoutRecetaInput[]
    upsert?: TieneIngUpsertWithWhereUniqueWithoutRecetaInput | TieneIngUpsertWithWhereUniqueWithoutRecetaInput[]
    createMany?: TieneIngCreateManyRecetaInputEnvelope
    set?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    disconnect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    delete?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    connect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    update?: TieneIngUpdateWithWhereUniqueWithoutRecetaInput | TieneIngUpdateWithWhereUniqueWithoutRecetaInput[]
    updateMany?: TieneIngUpdateManyWithWhereWithoutRecetaInput | TieneIngUpdateManyWithWhereWithoutRecetaInput[]
    deleteMany?: TieneIngScalarWhereInput | TieneIngScalarWhereInput[]
  }

  export type PlanComidasUpdateManyWithoutRecetaNestedInput = {
    create?: XOR<PlanComidasCreateWithoutRecetaInput, PlanComidasUncheckedCreateWithoutRecetaInput> | PlanComidasCreateWithoutRecetaInput[] | PlanComidasUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: PlanComidasCreateOrConnectWithoutRecetaInput | PlanComidasCreateOrConnectWithoutRecetaInput[]
    upsert?: PlanComidasUpsertWithWhereUniqueWithoutRecetaInput | PlanComidasUpsertWithWhereUniqueWithoutRecetaInput[]
    createMany?: PlanComidasCreateManyRecetaInputEnvelope
    set?: PlanComidasWhereUniqueInput | PlanComidasWhereUniqueInput[]
    disconnect?: PlanComidasWhereUniqueInput | PlanComidasWhereUniqueInput[]
    delete?: PlanComidasWhereUniqueInput | PlanComidasWhereUniqueInput[]
    connect?: PlanComidasWhereUniqueInput | PlanComidasWhereUniqueInput[]
    update?: PlanComidasUpdateWithWhereUniqueWithoutRecetaInput | PlanComidasUpdateWithWhereUniqueWithoutRecetaInput[]
    updateMany?: PlanComidasUpdateManyWithWhereWithoutRecetaInput | PlanComidasUpdateManyWithWhereWithoutRecetaInput[]
    deleteMany?: PlanComidasScalarWhereInput | PlanComidasScalarWhereInput[]
  }

  export type DetalleUncheckedUpdateManyWithoutRecetaNestedInput = {
    create?: XOR<DetalleCreateWithoutRecetaInput, DetalleUncheckedCreateWithoutRecetaInput> | DetalleCreateWithoutRecetaInput[] | DetalleUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: DetalleCreateOrConnectWithoutRecetaInput | DetalleCreateOrConnectWithoutRecetaInput[]
    upsert?: DetalleUpsertWithWhereUniqueWithoutRecetaInput | DetalleUpsertWithWhereUniqueWithoutRecetaInput[]
    createMany?: DetalleCreateManyRecetaInputEnvelope
    set?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    disconnect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    delete?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    connect?: DetalleWhereUniqueInput | DetalleWhereUniqueInput[]
    update?: DetalleUpdateWithWhereUniqueWithoutRecetaInput | DetalleUpdateWithWhereUniqueWithoutRecetaInput[]
    updateMany?: DetalleUpdateManyWithWhereWithoutRecetaInput | DetalleUpdateManyWithWhereWithoutRecetaInput[]
    deleteMany?: DetalleScalarWhereInput | DetalleScalarWhereInput[]
  }

  export type TieneIngUncheckedUpdateManyWithoutRecetaNestedInput = {
    create?: XOR<TieneIngCreateWithoutRecetaInput, TieneIngUncheckedCreateWithoutRecetaInput> | TieneIngCreateWithoutRecetaInput[] | TieneIngUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: TieneIngCreateOrConnectWithoutRecetaInput | TieneIngCreateOrConnectWithoutRecetaInput[]
    upsert?: TieneIngUpsertWithWhereUniqueWithoutRecetaInput | TieneIngUpsertWithWhereUniqueWithoutRecetaInput[]
    createMany?: TieneIngCreateManyRecetaInputEnvelope
    set?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    disconnect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    delete?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    connect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    update?: TieneIngUpdateWithWhereUniqueWithoutRecetaInput | TieneIngUpdateWithWhereUniqueWithoutRecetaInput[]
    updateMany?: TieneIngUpdateManyWithWhereWithoutRecetaInput | TieneIngUpdateManyWithWhereWithoutRecetaInput[]
    deleteMany?: TieneIngScalarWhereInput | TieneIngScalarWhereInput[]
  }

  export type PlanComidasUncheckedUpdateManyWithoutRecetaNestedInput = {
    create?: XOR<PlanComidasCreateWithoutRecetaInput, PlanComidasUncheckedCreateWithoutRecetaInput> | PlanComidasCreateWithoutRecetaInput[] | PlanComidasUncheckedCreateWithoutRecetaInput[]
    connectOrCreate?: PlanComidasCreateOrConnectWithoutRecetaInput | PlanComidasCreateOrConnectWithoutRecetaInput[]
    upsert?: PlanComidasUpsertWithWhereUniqueWithoutRecetaInput | PlanComidasUpsertWithWhereUniqueWithoutRecetaInput[]
    createMany?: PlanComidasCreateManyRecetaInputEnvelope
    set?: PlanComidasWhereUniqueInput | PlanComidasWhereUniqueInput[]
    disconnect?: PlanComidasWhereUniqueInput | PlanComidasWhereUniqueInput[]
    delete?: PlanComidasWhereUniqueInput | PlanComidasWhereUniqueInput[]
    connect?: PlanComidasWhereUniqueInput | PlanComidasWhereUniqueInput[]
    update?: PlanComidasUpdateWithWhereUniqueWithoutRecetaInput | PlanComidasUpdateWithWhereUniqueWithoutRecetaInput[]
    updateMany?: PlanComidasUpdateManyWithWhereWithoutRecetaInput | PlanComidasUpdateManyWithWhereWithoutRecetaInput[]
    deleteMany?: PlanComidasScalarWhereInput | PlanComidasScalarWhereInput[]
  }

  export type RecetasCreateNestedOneWithoutDetallesInput = {
    create?: XOR<RecetasCreateWithoutDetallesInput, RecetasUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: RecetasCreateOrConnectWithoutDetallesInput
    connect?: RecetasWhereUniqueInput
  }

  export type RecetasUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<RecetasCreateWithoutDetallesInput, RecetasUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: RecetasCreateOrConnectWithoutDetallesInput
    upsert?: RecetasUpsertWithoutDetallesInput
    connect?: RecetasWhereUniqueInput
    update?: XOR<XOR<RecetasUpdateToOneWithWhereWithoutDetallesInput, RecetasUpdateWithoutDetallesInput>, RecetasUncheckedUpdateWithoutDetallesInput>
  }

  export type TieneIngCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<TieneIngCreateWithoutIngredienteInput, TieneIngUncheckedCreateWithoutIngredienteInput> | TieneIngCreateWithoutIngredienteInput[] | TieneIngUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: TieneIngCreateOrConnectWithoutIngredienteInput | TieneIngCreateOrConnectWithoutIngredienteInput[]
    createMany?: TieneIngCreateManyIngredienteInputEnvelope
    connect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
  }

  export type TieneIngUncheckedCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<TieneIngCreateWithoutIngredienteInput, TieneIngUncheckedCreateWithoutIngredienteInput> | TieneIngCreateWithoutIngredienteInput[] | TieneIngUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: TieneIngCreateOrConnectWithoutIngredienteInput | TieneIngCreateOrConnectWithoutIngredienteInput[]
    createMany?: TieneIngCreateManyIngredienteInputEnvelope
    connect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
  }

  export type TieneIngUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<TieneIngCreateWithoutIngredienteInput, TieneIngUncheckedCreateWithoutIngredienteInput> | TieneIngCreateWithoutIngredienteInput[] | TieneIngUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: TieneIngCreateOrConnectWithoutIngredienteInput | TieneIngCreateOrConnectWithoutIngredienteInput[]
    upsert?: TieneIngUpsertWithWhereUniqueWithoutIngredienteInput | TieneIngUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: TieneIngCreateManyIngredienteInputEnvelope
    set?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    disconnect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    delete?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    connect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    update?: TieneIngUpdateWithWhereUniqueWithoutIngredienteInput | TieneIngUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: TieneIngUpdateManyWithWhereWithoutIngredienteInput | TieneIngUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: TieneIngScalarWhereInput | TieneIngScalarWhereInput[]
  }

  export type TieneIngUncheckedUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<TieneIngCreateWithoutIngredienteInput, TieneIngUncheckedCreateWithoutIngredienteInput> | TieneIngCreateWithoutIngredienteInput[] | TieneIngUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: TieneIngCreateOrConnectWithoutIngredienteInput | TieneIngCreateOrConnectWithoutIngredienteInput[]
    upsert?: TieneIngUpsertWithWhereUniqueWithoutIngredienteInput | TieneIngUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: TieneIngCreateManyIngredienteInputEnvelope
    set?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    disconnect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    delete?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    connect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    update?: TieneIngUpdateWithWhereUniqueWithoutIngredienteInput | TieneIngUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: TieneIngUpdateManyWithWhereWithoutIngredienteInput | TieneIngUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: TieneIngScalarWhereInput | TieneIngScalarWhereInput[]
  }

  export type TieneIngCreateNestedManyWithoutUnidadInput = {
    create?: XOR<TieneIngCreateWithoutUnidadInput, TieneIngUncheckedCreateWithoutUnidadInput> | TieneIngCreateWithoutUnidadInput[] | TieneIngUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: TieneIngCreateOrConnectWithoutUnidadInput | TieneIngCreateOrConnectWithoutUnidadInput[]
    createMany?: TieneIngCreateManyUnidadInputEnvelope
    connect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
  }

  export type TieneIngUncheckedCreateNestedManyWithoutUnidadInput = {
    create?: XOR<TieneIngCreateWithoutUnidadInput, TieneIngUncheckedCreateWithoutUnidadInput> | TieneIngCreateWithoutUnidadInput[] | TieneIngUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: TieneIngCreateOrConnectWithoutUnidadInput | TieneIngCreateOrConnectWithoutUnidadInput[]
    createMany?: TieneIngCreateManyUnidadInputEnvelope
    connect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
  }

  export type TieneIngUpdateManyWithoutUnidadNestedInput = {
    create?: XOR<TieneIngCreateWithoutUnidadInput, TieneIngUncheckedCreateWithoutUnidadInput> | TieneIngCreateWithoutUnidadInput[] | TieneIngUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: TieneIngCreateOrConnectWithoutUnidadInput | TieneIngCreateOrConnectWithoutUnidadInput[]
    upsert?: TieneIngUpsertWithWhereUniqueWithoutUnidadInput | TieneIngUpsertWithWhereUniqueWithoutUnidadInput[]
    createMany?: TieneIngCreateManyUnidadInputEnvelope
    set?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    disconnect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    delete?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    connect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    update?: TieneIngUpdateWithWhereUniqueWithoutUnidadInput | TieneIngUpdateWithWhereUniqueWithoutUnidadInput[]
    updateMany?: TieneIngUpdateManyWithWhereWithoutUnidadInput | TieneIngUpdateManyWithWhereWithoutUnidadInput[]
    deleteMany?: TieneIngScalarWhereInput | TieneIngScalarWhereInput[]
  }

  export type TieneIngUncheckedUpdateManyWithoutUnidadNestedInput = {
    create?: XOR<TieneIngCreateWithoutUnidadInput, TieneIngUncheckedCreateWithoutUnidadInput> | TieneIngCreateWithoutUnidadInput[] | TieneIngUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: TieneIngCreateOrConnectWithoutUnidadInput | TieneIngCreateOrConnectWithoutUnidadInput[]
    upsert?: TieneIngUpsertWithWhereUniqueWithoutUnidadInput | TieneIngUpsertWithWhereUniqueWithoutUnidadInput[]
    createMany?: TieneIngCreateManyUnidadInputEnvelope
    set?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    disconnect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    delete?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    connect?: TieneIngWhereUniqueInput | TieneIngWhereUniqueInput[]
    update?: TieneIngUpdateWithWhereUniqueWithoutUnidadInput | TieneIngUpdateWithWhereUniqueWithoutUnidadInput[]
    updateMany?: TieneIngUpdateManyWithWhereWithoutUnidadInput | TieneIngUpdateManyWithWhereWithoutUnidadInput[]
    deleteMany?: TieneIngScalarWhereInput | TieneIngScalarWhereInput[]
  }

  export type RecetasCreateNestedOneWithoutTieneIngInput = {
    create?: XOR<RecetasCreateWithoutTieneIngInput, RecetasUncheckedCreateWithoutTieneIngInput>
    connectOrCreate?: RecetasCreateOrConnectWithoutTieneIngInput
    connect?: RecetasWhereUniqueInput
  }

  export type IngredientesCreateNestedOneWithoutRecetasInput = {
    create?: XOR<IngredientesCreateWithoutRecetasInput, IngredientesUncheckedCreateWithoutRecetasInput>
    connectOrCreate?: IngredientesCreateOrConnectWithoutRecetasInput
    connect?: IngredientesWhereUniqueInput
  }

  export type UnidadesCreateNestedOneWithoutIngredientesInput = {
    create?: XOR<UnidadesCreateWithoutIngredientesInput, UnidadesUncheckedCreateWithoutIngredientesInput>
    connectOrCreate?: UnidadesCreateOrConnectWithoutIngredientesInput
    connect?: UnidadesWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecetasUpdateOneRequiredWithoutTieneIngNestedInput = {
    create?: XOR<RecetasCreateWithoutTieneIngInput, RecetasUncheckedCreateWithoutTieneIngInput>
    connectOrCreate?: RecetasCreateOrConnectWithoutTieneIngInput
    upsert?: RecetasUpsertWithoutTieneIngInput
    connect?: RecetasWhereUniqueInput
    update?: XOR<XOR<RecetasUpdateToOneWithWhereWithoutTieneIngInput, RecetasUpdateWithoutTieneIngInput>, RecetasUncheckedUpdateWithoutTieneIngInput>
  }

  export type IngredientesUpdateOneRequiredWithoutRecetasNestedInput = {
    create?: XOR<IngredientesCreateWithoutRecetasInput, IngredientesUncheckedCreateWithoutRecetasInput>
    connectOrCreate?: IngredientesCreateOrConnectWithoutRecetasInput
    upsert?: IngredientesUpsertWithoutRecetasInput
    connect?: IngredientesWhereUniqueInput
    update?: XOR<XOR<IngredientesUpdateToOneWithWhereWithoutRecetasInput, IngredientesUpdateWithoutRecetasInput>, IngredientesUncheckedUpdateWithoutRecetasInput>
  }

  export type UnidadesUpdateOneRequiredWithoutIngredientesNestedInput = {
    create?: XOR<UnidadesCreateWithoutIngredientesInput, UnidadesUncheckedCreateWithoutIngredientesInput>
    connectOrCreate?: UnidadesCreateOrConnectWithoutIngredientesInput
    upsert?: UnidadesUpsertWithoutIngredientesInput
    connect?: UnidadesWhereUniqueInput
    update?: XOR<XOR<UnidadesUpdateToOneWithWhereWithoutIngredientesInput, UnidadesUpdateWithoutIngredientesInput>, UnidadesUncheckedUpdateWithoutIngredientesInput>
  }

  export type RecetasCreateNestedOneWithoutPlanesInput = {
    create?: XOR<RecetasCreateWithoutPlanesInput, RecetasUncheckedCreateWithoutPlanesInput>
    connectOrCreate?: RecetasCreateOrConnectWithoutPlanesInput
    connect?: RecetasWhereUniqueInput
  }

  export type RecetasUpdateOneRequiredWithoutPlanesNestedInput = {
    create?: XOR<RecetasCreateWithoutPlanesInput, RecetasUncheckedCreateWithoutPlanesInput>
    connectOrCreate?: RecetasCreateOrConnectWithoutPlanesInput
    upsert?: RecetasUpsertWithoutPlanesInput
    connect?: RecetasWhereUniqueInput
    update?: XOR<XOR<RecetasUpdateToOneWithWhereWithoutPlanesInput, RecetasUpdateWithoutPlanesInput>, RecetasUncheckedUpdateWithoutPlanesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRolUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[]
    notIn?: $Enums.RolUsuario[]
    not?: NestedEnumRolUsuarioFilter<$PrismaModel> | $Enums.RolUsuario
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[]
    notIn?: $Enums.RolUsuario[]
    not?: NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.RolUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolUsuarioFilter<$PrismaModel>
    _max?: NestedEnumRolUsuarioFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: number[]
    notIn?: number[]
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

  export type RecetasCreateWithoutUsuarioInput = {
    nombre: string
    tipo: TipoCreateNestedOneWithoutRecetasInput
    detalles?: DetalleCreateNestedManyWithoutRecetaInput
    tieneIng?: TieneIngCreateNestedManyWithoutRecetaInput
    planes?: PlanComidasCreateNestedManyWithoutRecetaInput
  }

  export type RecetasUncheckedCreateWithoutUsuarioInput = {
    id_receta?: number
    nombre: string
    id_tipo: number
    detalles?: DetalleUncheckedCreateNestedManyWithoutRecetaInput
    tieneIng?: TieneIngUncheckedCreateNestedManyWithoutRecetaInput
    planes?: PlanComidasUncheckedCreateNestedManyWithoutRecetaInput
  }

  export type RecetasCreateOrConnectWithoutUsuarioInput = {
    where: RecetasWhereUniqueInput
    create: XOR<RecetasCreateWithoutUsuarioInput, RecetasUncheckedCreateWithoutUsuarioInput>
  }

  export type RecetasCreateManyUsuarioInputEnvelope = {
    data: RecetasCreateManyUsuarioInput | RecetasCreateManyUsuarioInput[]
  }

  export type RecetasUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RecetasWhereUniqueInput
    update: XOR<RecetasUpdateWithoutUsuarioInput, RecetasUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RecetasCreateWithoutUsuarioInput, RecetasUncheckedCreateWithoutUsuarioInput>
  }

  export type RecetasUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RecetasWhereUniqueInput
    data: XOR<RecetasUpdateWithoutUsuarioInput, RecetasUncheckedUpdateWithoutUsuarioInput>
  }

  export type RecetasUpdateManyWithWhereWithoutUsuarioInput = {
    where: RecetasScalarWhereInput
    data: XOR<RecetasUpdateManyMutationInput, RecetasUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RecetasScalarWhereInput = {
    AND?: RecetasScalarWhereInput | RecetasScalarWhereInput[]
    OR?: RecetasScalarWhereInput[]
    NOT?: RecetasScalarWhereInput | RecetasScalarWhereInput[]
    id_receta?: IntFilter<"Recetas"> | number
    nombre?: StringFilter<"Recetas"> | string
    id_tipo?: IntFilter<"Recetas"> | number
    id_usuario?: IntFilter<"Recetas"> | number
  }

  export type RecetasCreateWithoutTipoInput = {
    nombre: string
    usuario: UsuarioCreateNestedOneWithoutRecetasInput
    detalles?: DetalleCreateNestedManyWithoutRecetaInput
    tieneIng?: TieneIngCreateNestedManyWithoutRecetaInput
    planes?: PlanComidasCreateNestedManyWithoutRecetaInput
  }

  export type RecetasUncheckedCreateWithoutTipoInput = {
    id_receta?: number
    nombre: string
    id_usuario: number
    detalles?: DetalleUncheckedCreateNestedManyWithoutRecetaInput
    tieneIng?: TieneIngUncheckedCreateNestedManyWithoutRecetaInput
    planes?: PlanComidasUncheckedCreateNestedManyWithoutRecetaInput
  }

  export type RecetasCreateOrConnectWithoutTipoInput = {
    where: RecetasWhereUniqueInput
    create: XOR<RecetasCreateWithoutTipoInput, RecetasUncheckedCreateWithoutTipoInput>
  }

  export type RecetasCreateManyTipoInputEnvelope = {
    data: RecetasCreateManyTipoInput | RecetasCreateManyTipoInput[]
  }

  export type RecetasUpsertWithWhereUniqueWithoutTipoInput = {
    where: RecetasWhereUniqueInput
    update: XOR<RecetasUpdateWithoutTipoInput, RecetasUncheckedUpdateWithoutTipoInput>
    create: XOR<RecetasCreateWithoutTipoInput, RecetasUncheckedCreateWithoutTipoInput>
  }

  export type RecetasUpdateWithWhereUniqueWithoutTipoInput = {
    where: RecetasWhereUniqueInput
    data: XOR<RecetasUpdateWithoutTipoInput, RecetasUncheckedUpdateWithoutTipoInput>
  }

  export type RecetasUpdateManyWithWhereWithoutTipoInput = {
    where: RecetasScalarWhereInput
    data: XOR<RecetasUpdateManyMutationInput, RecetasUncheckedUpdateManyWithoutTipoInput>
  }

  export type TipoCreateWithoutRecetasInput = {
    tipo: string
  }

  export type TipoUncheckedCreateWithoutRecetasInput = {
    id_tipo?: number
    tipo: string
  }

  export type TipoCreateOrConnectWithoutRecetasInput = {
    where: TipoWhereUniqueInput
    create: XOR<TipoCreateWithoutRecetasInput, TipoUncheckedCreateWithoutRecetasInput>
  }

  export type UsuarioCreateWithoutRecetasInput = {
    nombre: string
    email: string
    password: string
    rol: $Enums.RolUsuario
    creado?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutRecetasInput = {
    id_usuario?: number
    nombre: string
    email: string
    password: string
    rol: $Enums.RolUsuario
    creado?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutRecetasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRecetasInput, UsuarioUncheckedCreateWithoutRecetasInput>
  }

  export type DetalleCreateWithoutRecetaInput = {
    detalle: string
  }

  export type DetalleUncheckedCreateWithoutRecetaInput = {
    id_detalle?: number
    detalle: string
  }

  export type DetalleCreateOrConnectWithoutRecetaInput = {
    where: DetalleWhereUniqueInput
    create: XOR<DetalleCreateWithoutRecetaInput, DetalleUncheckedCreateWithoutRecetaInput>
  }

  export type DetalleCreateManyRecetaInputEnvelope = {
    data: DetalleCreateManyRecetaInput | DetalleCreateManyRecetaInput[]
  }

  export type TieneIngCreateWithoutRecetaInput = {
    cantidad: number
    ingrediente: IngredientesCreateNestedOneWithoutRecetasInput
    unidad: UnidadesCreateNestedOneWithoutIngredientesInput
  }

  export type TieneIngUncheckedCreateWithoutRecetaInput = {
    id_tieneing?: number
    id_ingrediente: number
    cantidad: number
    id_unidad: number
  }

  export type TieneIngCreateOrConnectWithoutRecetaInput = {
    where: TieneIngWhereUniqueInput
    create: XOR<TieneIngCreateWithoutRecetaInput, TieneIngUncheckedCreateWithoutRecetaInput>
  }

  export type TieneIngCreateManyRecetaInputEnvelope = {
    data: TieneIngCreateManyRecetaInput | TieneIngCreateManyRecetaInput[]
  }

  export type PlanComidasCreateWithoutRecetaInput = {
    fecha: Date | string
    momento: string
  }

  export type PlanComidasUncheckedCreateWithoutRecetaInput = {
    id_plan?: number
    fecha: Date | string
    momento: string
  }

  export type PlanComidasCreateOrConnectWithoutRecetaInput = {
    where: PlanComidasWhereUniqueInput
    create: XOR<PlanComidasCreateWithoutRecetaInput, PlanComidasUncheckedCreateWithoutRecetaInput>
  }

  export type PlanComidasCreateManyRecetaInputEnvelope = {
    data: PlanComidasCreateManyRecetaInput | PlanComidasCreateManyRecetaInput[]
  }

  export type TipoUpsertWithoutRecetasInput = {
    update: XOR<TipoUpdateWithoutRecetasInput, TipoUncheckedUpdateWithoutRecetasInput>
    create: XOR<TipoCreateWithoutRecetasInput, TipoUncheckedCreateWithoutRecetasInput>
    where?: TipoWhereInput
  }

  export type TipoUpdateToOneWithWhereWithoutRecetasInput = {
    where?: TipoWhereInput
    data: XOR<TipoUpdateWithoutRecetasInput, TipoUncheckedUpdateWithoutRecetasInput>
  }

  export type TipoUpdateWithoutRecetasInput = {
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type TipoUncheckedUpdateWithoutRecetasInput = {
    id_tipo?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUpsertWithoutRecetasInput = {
    update: XOR<UsuarioUpdateWithoutRecetasInput, UsuarioUncheckedUpdateWithoutRecetasInput>
    create: XOR<UsuarioCreateWithoutRecetasInput, UsuarioUncheckedCreateWithoutRecetasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRecetasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRecetasInput, UsuarioUncheckedUpdateWithoutRecetasInput>
  }

  export type UsuarioUpdateWithoutRecetasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutRecetasInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    creado?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetalleUpsertWithWhereUniqueWithoutRecetaInput = {
    where: DetalleWhereUniqueInput
    update: XOR<DetalleUpdateWithoutRecetaInput, DetalleUncheckedUpdateWithoutRecetaInput>
    create: XOR<DetalleCreateWithoutRecetaInput, DetalleUncheckedCreateWithoutRecetaInput>
  }

  export type DetalleUpdateWithWhereUniqueWithoutRecetaInput = {
    where: DetalleWhereUniqueInput
    data: XOR<DetalleUpdateWithoutRecetaInput, DetalleUncheckedUpdateWithoutRecetaInput>
  }

  export type DetalleUpdateManyWithWhereWithoutRecetaInput = {
    where: DetalleScalarWhereInput
    data: XOR<DetalleUpdateManyMutationInput, DetalleUncheckedUpdateManyWithoutRecetaInput>
  }

  export type DetalleScalarWhereInput = {
    AND?: DetalleScalarWhereInput | DetalleScalarWhereInput[]
    OR?: DetalleScalarWhereInput[]
    NOT?: DetalleScalarWhereInput | DetalleScalarWhereInput[]
    id_detalle?: IntFilter<"Detalle"> | number
    id_receta?: IntFilter<"Detalle"> | number
    detalle?: StringFilter<"Detalle"> | string
  }

  export type TieneIngUpsertWithWhereUniqueWithoutRecetaInput = {
    where: TieneIngWhereUniqueInput
    update: XOR<TieneIngUpdateWithoutRecetaInput, TieneIngUncheckedUpdateWithoutRecetaInput>
    create: XOR<TieneIngCreateWithoutRecetaInput, TieneIngUncheckedCreateWithoutRecetaInput>
  }

  export type TieneIngUpdateWithWhereUniqueWithoutRecetaInput = {
    where: TieneIngWhereUniqueInput
    data: XOR<TieneIngUpdateWithoutRecetaInput, TieneIngUncheckedUpdateWithoutRecetaInput>
  }

  export type TieneIngUpdateManyWithWhereWithoutRecetaInput = {
    where: TieneIngScalarWhereInput
    data: XOR<TieneIngUpdateManyMutationInput, TieneIngUncheckedUpdateManyWithoutRecetaInput>
  }

  export type TieneIngScalarWhereInput = {
    AND?: TieneIngScalarWhereInput | TieneIngScalarWhereInput[]
    OR?: TieneIngScalarWhereInput[]
    NOT?: TieneIngScalarWhereInput | TieneIngScalarWhereInput[]
    id_tieneing?: IntFilter<"TieneIng"> | number
    id_receta?: IntFilter<"TieneIng"> | number
    id_ingrediente?: IntFilter<"TieneIng"> | number
    cantidad?: FloatFilter<"TieneIng"> | number
    id_unidad?: IntFilter<"TieneIng"> | number
  }

  export type PlanComidasUpsertWithWhereUniqueWithoutRecetaInput = {
    where: PlanComidasWhereUniqueInput
    update: XOR<PlanComidasUpdateWithoutRecetaInput, PlanComidasUncheckedUpdateWithoutRecetaInput>
    create: XOR<PlanComidasCreateWithoutRecetaInput, PlanComidasUncheckedCreateWithoutRecetaInput>
  }

  export type PlanComidasUpdateWithWhereUniqueWithoutRecetaInput = {
    where: PlanComidasWhereUniqueInput
    data: XOR<PlanComidasUpdateWithoutRecetaInput, PlanComidasUncheckedUpdateWithoutRecetaInput>
  }

  export type PlanComidasUpdateManyWithWhereWithoutRecetaInput = {
    where: PlanComidasScalarWhereInput
    data: XOR<PlanComidasUpdateManyMutationInput, PlanComidasUncheckedUpdateManyWithoutRecetaInput>
  }

  export type PlanComidasScalarWhereInput = {
    AND?: PlanComidasScalarWhereInput | PlanComidasScalarWhereInput[]
    OR?: PlanComidasScalarWhereInput[]
    NOT?: PlanComidasScalarWhereInput | PlanComidasScalarWhereInput[]
    id_plan?: IntFilter<"PlanComidas"> | number
    fecha?: DateTimeFilter<"PlanComidas"> | Date | string
    momento?: StringFilter<"PlanComidas"> | string
    id_receta?: IntFilter<"PlanComidas"> | number
  }

  export type RecetasCreateWithoutDetallesInput = {
    nombre: string
    tipo: TipoCreateNestedOneWithoutRecetasInput
    usuario: UsuarioCreateNestedOneWithoutRecetasInput
    tieneIng?: TieneIngCreateNestedManyWithoutRecetaInput
    planes?: PlanComidasCreateNestedManyWithoutRecetaInput
  }

  export type RecetasUncheckedCreateWithoutDetallesInput = {
    id_receta?: number
    nombre: string
    id_tipo: number
    id_usuario: number
    tieneIng?: TieneIngUncheckedCreateNestedManyWithoutRecetaInput
    planes?: PlanComidasUncheckedCreateNestedManyWithoutRecetaInput
  }

  export type RecetasCreateOrConnectWithoutDetallesInput = {
    where: RecetasWhereUniqueInput
    create: XOR<RecetasCreateWithoutDetallesInput, RecetasUncheckedCreateWithoutDetallesInput>
  }

  export type RecetasUpsertWithoutDetallesInput = {
    update: XOR<RecetasUpdateWithoutDetallesInput, RecetasUncheckedUpdateWithoutDetallesInput>
    create: XOR<RecetasCreateWithoutDetallesInput, RecetasUncheckedCreateWithoutDetallesInput>
    where?: RecetasWhereInput
  }

  export type RecetasUpdateToOneWithWhereWithoutDetallesInput = {
    where?: RecetasWhereInput
    data: XOR<RecetasUpdateWithoutDetallesInput, RecetasUncheckedUpdateWithoutDetallesInput>
  }

  export type RecetasUpdateWithoutDetallesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: TipoUpdateOneRequiredWithoutRecetasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutRecetasNestedInput
    tieneIng?: TieneIngUpdateManyWithoutRecetaNestedInput
    planes?: PlanComidasUpdateManyWithoutRecetaNestedInput
  }

  export type RecetasUncheckedUpdateWithoutDetallesInput = {
    id_receta?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_tipo?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    tieneIng?: TieneIngUncheckedUpdateManyWithoutRecetaNestedInput
    planes?: PlanComidasUncheckedUpdateManyWithoutRecetaNestedInput
  }

  export type TieneIngCreateWithoutIngredienteInput = {
    cantidad: number
    receta: RecetasCreateNestedOneWithoutTieneIngInput
    unidad: UnidadesCreateNestedOneWithoutIngredientesInput
  }

  export type TieneIngUncheckedCreateWithoutIngredienteInput = {
    id_tieneing?: number
    id_receta: number
    cantidad: number
    id_unidad: number
  }

  export type TieneIngCreateOrConnectWithoutIngredienteInput = {
    where: TieneIngWhereUniqueInput
    create: XOR<TieneIngCreateWithoutIngredienteInput, TieneIngUncheckedCreateWithoutIngredienteInput>
  }

  export type TieneIngCreateManyIngredienteInputEnvelope = {
    data: TieneIngCreateManyIngredienteInput | TieneIngCreateManyIngredienteInput[]
  }

  export type TieneIngUpsertWithWhereUniqueWithoutIngredienteInput = {
    where: TieneIngWhereUniqueInput
    update: XOR<TieneIngUpdateWithoutIngredienteInput, TieneIngUncheckedUpdateWithoutIngredienteInput>
    create: XOR<TieneIngCreateWithoutIngredienteInput, TieneIngUncheckedCreateWithoutIngredienteInput>
  }

  export type TieneIngUpdateWithWhereUniqueWithoutIngredienteInput = {
    where: TieneIngWhereUniqueInput
    data: XOR<TieneIngUpdateWithoutIngredienteInput, TieneIngUncheckedUpdateWithoutIngredienteInput>
  }

  export type TieneIngUpdateManyWithWhereWithoutIngredienteInput = {
    where: TieneIngScalarWhereInput
    data: XOR<TieneIngUpdateManyMutationInput, TieneIngUncheckedUpdateManyWithoutIngredienteInput>
  }

  export type TieneIngCreateWithoutUnidadInput = {
    cantidad: number
    receta: RecetasCreateNestedOneWithoutTieneIngInput
    ingrediente: IngredientesCreateNestedOneWithoutRecetasInput
  }

  export type TieneIngUncheckedCreateWithoutUnidadInput = {
    id_tieneing?: number
    id_receta: number
    id_ingrediente: number
    cantidad: number
  }

  export type TieneIngCreateOrConnectWithoutUnidadInput = {
    where: TieneIngWhereUniqueInput
    create: XOR<TieneIngCreateWithoutUnidadInput, TieneIngUncheckedCreateWithoutUnidadInput>
  }

  export type TieneIngCreateManyUnidadInputEnvelope = {
    data: TieneIngCreateManyUnidadInput | TieneIngCreateManyUnidadInput[]
  }

  export type TieneIngUpsertWithWhereUniqueWithoutUnidadInput = {
    where: TieneIngWhereUniqueInput
    update: XOR<TieneIngUpdateWithoutUnidadInput, TieneIngUncheckedUpdateWithoutUnidadInput>
    create: XOR<TieneIngCreateWithoutUnidadInput, TieneIngUncheckedCreateWithoutUnidadInput>
  }

  export type TieneIngUpdateWithWhereUniqueWithoutUnidadInput = {
    where: TieneIngWhereUniqueInput
    data: XOR<TieneIngUpdateWithoutUnidadInput, TieneIngUncheckedUpdateWithoutUnidadInput>
  }

  export type TieneIngUpdateManyWithWhereWithoutUnidadInput = {
    where: TieneIngScalarWhereInput
    data: XOR<TieneIngUpdateManyMutationInput, TieneIngUncheckedUpdateManyWithoutUnidadInput>
  }

  export type RecetasCreateWithoutTieneIngInput = {
    nombre: string
    tipo: TipoCreateNestedOneWithoutRecetasInput
    usuario: UsuarioCreateNestedOneWithoutRecetasInput
    detalles?: DetalleCreateNestedManyWithoutRecetaInput
    planes?: PlanComidasCreateNestedManyWithoutRecetaInput
  }

  export type RecetasUncheckedCreateWithoutTieneIngInput = {
    id_receta?: number
    nombre: string
    id_tipo: number
    id_usuario: number
    detalles?: DetalleUncheckedCreateNestedManyWithoutRecetaInput
    planes?: PlanComidasUncheckedCreateNestedManyWithoutRecetaInput
  }

  export type RecetasCreateOrConnectWithoutTieneIngInput = {
    where: RecetasWhereUniqueInput
    create: XOR<RecetasCreateWithoutTieneIngInput, RecetasUncheckedCreateWithoutTieneIngInput>
  }

  export type IngredientesCreateWithoutRecetasInput = {
    nombre: string
  }

  export type IngredientesUncheckedCreateWithoutRecetasInput = {
    id_ingrediente?: number
    nombre: string
  }

  export type IngredientesCreateOrConnectWithoutRecetasInput = {
    where: IngredientesWhereUniqueInput
    create: XOR<IngredientesCreateWithoutRecetasInput, IngredientesUncheckedCreateWithoutRecetasInput>
  }

  export type UnidadesCreateWithoutIngredientesInput = {
    unidad: string
  }

  export type UnidadesUncheckedCreateWithoutIngredientesInput = {
    id_unidad?: number
    unidad: string
  }

  export type UnidadesCreateOrConnectWithoutIngredientesInput = {
    where: UnidadesWhereUniqueInput
    create: XOR<UnidadesCreateWithoutIngredientesInput, UnidadesUncheckedCreateWithoutIngredientesInput>
  }

  export type RecetasUpsertWithoutTieneIngInput = {
    update: XOR<RecetasUpdateWithoutTieneIngInput, RecetasUncheckedUpdateWithoutTieneIngInput>
    create: XOR<RecetasCreateWithoutTieneIngInput, RecetasUncheckedCreateWithoutTieneIngInput>
    where?: RecetasWhereInput
  }

  export type RecetasUpdateToOneWithWhereWithoutTieneIngInput = {
    where?: RecetasWhereInput
    data: XOR<RecetasUpdateWithoutTieneIngInput, RecetasUncheckedUpdateWithoutTieneIngInput>
  }

  export type RecetasUpdateWithoutTieneIngInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: TipoUpdateOneRequiredWithoutRecetasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutRecetasNestedInput
    detalles?: DetalleUpdateManyWithoutRecetaNestedInput
    planes?: PlanComidasUpdateManyWithoutRecetaNestedInput
  }

  export type RecetasUncheckedUpdateWithoutTieneIngInput = {
    id_receta?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_tipo?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    detalles?: DetalleUncheckedUpdateManyWithoutRecetaNestedInput
    planes?: PlanComidasUncheckedUpdateManyWithoutRecetaNestedInput
  }

  export type IngredientesUpsertWithoutRecetasInput = {
    update: XOR<IngredientesUpdateWithoutRecetasInput, IngredientesUncheckedUpdateWithoutRecetasInput>
    create: XOR<IngredientesCreateWithoutRecetasInput, IngredientesUncheckedCreateWithoutRecetasInput>
    where?: IngredientesWhereInput
  }

  export type IngredientesUpdateToOneWithWhereWithoutRecetasInput = {
    where?: IngredientesWhereInput
    data: XOR<IngredientesUpdateWithoutRecetasInput, IngredientesUncheckedUpdateWithoutRecetasInput>
  }

  export type IngredientesUpdateWithoutRecetasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type IngredientesUncheckedUpdateWithoutRecetasInput = {
    id_ingrediente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type UnidadesUpsertWithoutIngredientesInput = {
    update: XOR<UnidadesUpdateWithoutIngredientesInput, UnidadesUncheckedUpdateWithoutIngredientesInput>
    create: XOR<UnidadesCreateWithoutIngredientesInput, UnidadesUncheckedCreateWithoutIngredientesInput>
    where?: UnidadesWhereInput
  }

  export type UnidadesUpdateToOneWithWhereWithoutIngredientesInput = {
    where?: UnidadesWhereInput
    data: XOR<UnidadesUpdateWithoutIngredientesInput, UnidadesUncheckedUpdateWithoutIngredientesInput>
  }

  export type UnidadesUpdateWithoutIngredientesInput = {
    unidad?: StringFieldUpdateOperationsInput | string
  }

  export type UnidadesUncheckedUpdateWithoutIngredientesInput = {
    id_unidad?: IntFieldUpdateOperationsInput | number
    unidad?: StringFieldUpdateOperationsInput | string
  }

  export type RecetasCreateWithoutPlanesInput = {
    nombre: string
    tipo: TipoCreateNestedOneWithoutRecetasInput
    usuario: UsuarioCreateNestedOneWithoutRecetasInput
    detalles?: DetalleCreateNestedManyWithoutRecetaInput
    tieneIng?: TieneIngCreateNestedManyWithoutRecetaInput
  }

  export type RecetasUncheckedCreateWithoutPlanesInput = {
    id_receta?: number
    nombre: string
    id_tipo: number
    id_usuario: number
    detalles?: DetalleUncheckedCreateNestedManyWithoutRecetaInput
    tieneIng?: TieneIngUncheckedCreateNestedManyWithoutRecetaInput
  }

  export type RecetasCreateOrConnectWithoutPlanesInput = {
    where: RecetasWhereUniqueInput
    create: XOR<RecetasCreateWithoutPlanesInput, RecetasUncheckedCreateWithoutPlanesInput>
  }

  export type RecetasUpsertWithoutPlanesInput = {
    update: XOR<RecetasUpdateWithoutPlanesInput, RecetasUncheckedUpdateWithoutPlanesInput>
    create: XOR<RecetasCreateWithoutPlanesInput, RecetasUncheckedCreateWithoutPlanesInput>
    where?: RecetasWhereInput
  }

  export type RecetasUpdateToOneWithWhereWithoutPlanesInput = {
    where?: RecetasWhereInput
    data: XOR<RecetasUpdateWithoutPlanesInput, RecetasUncheckedUpdateWithoutPlanesInput>
  }

  export type RecetasUpdateWithoutPlanesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: TipoUpdateOneRequiredWithoutRecetasNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutRecetasNestedInput
    detalles?: DetalleUpdateManyWithoutRecetaNestedInput
    tieneIng?: TieneIngUpdateManyWithoutRecetaNestedInput
  }

  export type RecetasUncheckedUpdateWithoutPlanesInput = {
    id_receta?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_tipo?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    detalles?: DetalleUncheckedUpdateManyWithoutRecetaNestedInput
    tieneIng?: TieneIngUncheckedUpdateManyWithoutRecetaNestedInput
  }

  export type RecetasCreateManyUsuarioInput = {
    id_receta?: number
    nombre: string
    id_tipo: number
  }

  export type RecetasUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: TipoUpdateOneRequiredWithoutRecetasNestedInput
    detalles?: DetalleUpdateManyWithoutRecetaNestedInput
    tieneIng?: TieneIngUpdateManyWithoutRecetaNestedInput
    planes?: PlanComidasUpdateManyWithoutRecetaNestedInput
  }

  export type RecetasUncheckedUpdateWithoutUsuarioInput = {
    id_receta?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_tipo?: IntFieldUpdateOperationsInput | number
    detalles?: DetalleUncheckedUpdateManyWithoutRecetaNestedInput
    tieneIng?: TieneIngUncheckedUpdateManyWithoutRecetaNestedInput
    planes?: PlanComidasUncheckedUpdateManyWithoutRecetaNestedInput
  }

  export type RecetasUncheckedUpdateManyWithoutUsuarioInput = {
    id_receta?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_tipo?: IntFieldUpdateOperationsInput | number
  }

  export type RecetasCreateManyTipoInput = {
    id_receta?: number
    nombre: string
    id_usuario: number
  }

  export type RecetasUpdateWithoutTipoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutRecetasNestedInput
    detalles?: DetalleUpdateManyWithoutRecetaNestedInput
    tieneIng?: TieneIngUpdateManyWithoutRecetaNestedInput
    planes?: PlanComidasUpdateManyWithoutRecetaNestedInput
  }

  export type RecetasUncheckedUpdateWithoutTipoInput = {
    id_receta?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
    detalles?: DetalleUncheckedUpdateManyWithoutRecetaNestedInput
    tieneIng?: TieneIngUncheckedUpdateManyWithoutRecetaNestedInput
    planes?: PlanComidasUncheckedUpdateManyWithoutRecetaNestedInput
  }

  export type RecetasUncheckedUpdateManyWithoutTipoInput = {
    id_receta?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type DetalleCreateManyRecetaInput = {
    id_detalle?: number
    detalle: string
  }

  export type TieneIngCreateManyRecetaInput = {
    id_tieneing?: number
    id_ingrediente: number
    cantidad: number
    id_unidad: number
  }

  export type PlanComidasCreateManyRecetaInput = {
    id_plan?: number
    fecha: Date | string
    momento: string
  }

  export type DetalleUpdateWithoutRecetaInput = {
    detalle?: StringFieldUpdateOperationsInput | string
  }

  export type DetalleUncheckedUpdateWithoutRecetaInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    detalle?: StringFieldUpdateOperationsInput | string
  }

  export type DetalleUncheckedUpdateManyWithoutRecetaInput = {
    id_detalle?: IntFieldUpdateOperationsInput | number
    detalle?: StringFieldUpdateOperationsInput | string
  }

  export type TieneIngUpdateWithoutRecetaInput = {
    cantidad?: FloatFieldUpdateOperationsInput | number
    ingrediente?: IngredientesUpdateOneRequiredWithoutRecetasNestedInput
    unidad?: UnidadesUpdateOneRequiredWithoutIngredientesNestedInput
  }

  export type TieneIngUncheckedUpdateWithoutRecetaInput = {
    id_tieneing?: IntFieldUpdateOperationsInput | number
    id_ingrediente?: IntFieldUpdateOperationsInput | number
    cantidad?: FloatFieldUpdateOperationsInput | number
    id_unidad?: IntFieldUpdateOperationsInput | number
  }

  export type TieneIngUncheckedUpdateManyWithoutRecetaInput = {
    id_tieneing?: IntFieldUpdateOperationsInput | number
    id_ingrediente?: IntFieldUpdateOperationsInput | number
    cantidad?: FloatFieldUpdateOperationsInput | number
    id_unidad?: IntFieldUpdateOperationsInput | number
  }

  export type PlanComidasUpdateWithoutRecetaInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    momento?: StringFieldUpdateOperationsInput | string
  }

  export type PlanComidasUncheckedUpdateWithoutRecetaInput = {
    id_plan?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    momento?: StringFieldUpdateOperationsInput | string
  }

  export type PlanComidasUncheckedUpdateManyWithoutRecetaInput = {
    id_plan?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    momento?: StringFieldUpdateOperationsInput | string
  }

  export type TieneIngCreateManyIngredienteInput = {
    id_tieneing?: number
    id_receta: number
    cantidad: number
    id_unidad: number
  }

  export type TieneIngUpdateWithoutIngredienteInput = {
    cantidad?: FloatFieldUpdateOperationsInput | number
    receta?: RecetasUpdateOneRequiredWithoutTieneIngNestedInput
    unidad?: UnidadesUpdateOneRequiredWithoutIngredientesNestedInput
  }

  export type TieneIngUncheckedUpdateWithoutIngredienteInput = {
    id_tieneing?: IntFieldUpdateOperationsInput | number
    id_receta?: IntFieldUpdateOperationsInput | number
    cantidad?: FloatFieldUpdateOperationsInput | number
    id_unidad?: IntFieldUpdateOperationsInput | number
  }

  export type TieneIngUncheckedUpdateManyWithoutIngredienteInput = {
    id_tieneing?: IntFieldUpdateOperationsInput | number
    id_receta?: IntFieldUpdateOperationsInput | number
    cantidad?: FloatFieldUpdateOperationsInput | number
    id_unidad?: IntFieldUpdateOperationsInput | number
  }

  export type TieneIngCreateManyUnidadInput = {
    id_tieneing?: number
    id_receta: number
    id_ingrediente: number
    cantidad: number
  }

  export type TieneIngUpdateWithoutUnidadInput = {
    cantidad?: FloatFieldUpdateOperationsInput | number
    receta?: RecetasUpdateOneRequiredWithoutTieneIngNestedInput
    ingrediente?: IngredientesUpdateOneRequiredWithoutRecetasNestedInput
  }

  export type TieneIngUncheckedUpdateWithoutUnidadInput = {
    id_tieneing?: IntFieldUpdateOperationsInput | number
    id_receta?: IntFieldUpdateOperationsInput | number
    id_ingrediente?: IntFieldUpdateOperationsInput | number
    cantidad?: FloatFieldUpdateOperationsInput | number
  }

  export type TieneIngUncheckedUpdateManyWithoutUnidadInput = {
    id_tieneing?: IntFieldUpdateOperationsInput | number
    id_receta?: IntFieldUpdateOperationsInput | number
    id_ingrediente?: IntFieldUpdateOperationsInput | number
    cantidad?: FloatFieldUpdateOperationsInput | number
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
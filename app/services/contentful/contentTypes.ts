import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

/**
 * Fields type definition for content type 'TypeApp'
 * @name TypeAppFields
 * @type {TypeAppFields}
 * @memberof TypeApp
 */
export interface TypeAppFields {
  /**
   * Field type definition for field 'title' (Title)
   * @name Title
   * @localized false
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'content' (Content)
   * @name Content
   * @localized false
   */
  content?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

/**
 * Entry skeleton type definition for content type 'app' (App)
 * @name TypeAppSkeleton
 * @type {TypeAppSkeleton}
 * @author 5e2VbtKbHE7Nfq03Ndv3a9
 * @since 2024-05-22T21:12:19.664Z
 * @version 3
 */
export type TypeAppSkeleton = EntrySkeletonType<TypeAppFields, "app">;
/**
 * Entry type definition for content type 'app' (App)
 * @name TypeApp
 * @type {TypeApp}
 * @author Ryan Spencer<rspencer@bitovi.com>
 * @since 2024-05-22T21:12:19.664Z
 * @version 3
 * @link https://app.contentful.com/spaces/be7s6bfvlrix/environments/master/content_types/app
 */
export type TypeApp<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeAppSkeleton, Modifiers, Locales>;

export function isTypeApp<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeApp<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "app";
}

/**
 * Fields type definition for content type 'TypeCyoa'
 * @name TypeCyoaFields
 * @type {TypeCyoaFields}
 * @memberof TypeCyoa
 */
export interface TypeCyoaFields {
  /**
   * Field type definition for field 'stories' (Stories)
   * @name Stories
   * @localized false
   */
  stories?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeCyoaStorySkeleton>
  >;
}

/**
 * Entry skeleton type definition for content type 'cyoa' (CYOA)
 * @name TypeCyoaSkeleton
 * @type {TypeCyoaSkeleton}
 * @author 5e2VbtKbHE7Nfq03Ndv3a9
 * @since 2024-05-22T21:42:01.361Z
 * @version 5
 */
export type TypeCyoaSkeleton = EntrySkeletonType<TypeCyoaFields, "cyoa">;
/**
 * Entry type definition for content type 'cyoa' (CYOA)
 * @name TypeCyoa
 * @type {TypeCyoa}
 * @author Ryan Spencer<rspencer@bitovi.com>
 * @since 2024-05-22T21:42:01.361Z
 * @version 5
 * @link https://app.contentful.com/spaces/be7s6bfvlrix/environments/master/content_types/cyoa
 */
export type TypeCyoa<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeCyoaSkeleton, Modifiers, Locales>;

export function isTypeCyoa<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeCyoa<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "cyoa";
}

/**
 * Fields type definition for content type 'TypeCyoaDecision'
 * @name TypeCyoaDecisionFields
 * @type {TypeCyoaDecisionFields}
 * @memberof TypeCyoaDecision
 */
export interface TypeCyoaDecisionFields {
  /**
   * Field type definition for field 'title' (Title)
   * @name Title
   * @localized false
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'content' (Content)
   * @name Content
   * @localized false
   */
  content?: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'destination' (Destination)
   * @name Destination
   * @localized false
   */
  destination: EntryFieldTypes.EntryLink<TypeCyoaPageSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'cyoaDecision' (CYOA Decision)
 * @name TypeCyoaDecisionSkeleton
 * @type {TypeCyoaDecisionSkeleton}
 * @author 5e2VbtKbHE7Nfq03Ndv3a9
 * @since 2024-05-22T21:59:02.557Z
 * @version 7
 */
export type TypeCyoaDecisionSkeleton = EntrySkeletonType<
  TypeCyoaDecisionFields,
  "cyoaDecision"
>;
/**
 * Entry type definition for content type 'cyoaDecision' (CYOA Decision)
 * @name TypeCyoaDecision
 * @type {TypeCyoaDecision}
 * @author Ryan Spencer<rspencer@bitovi.com>
 * @since 2024-05-22T21:59:02.557Z
 * @version 7
 * @link https://app.contentful.com/spaces/be7s6bfvlrix/environments/master/content_types/cyoaDecision
 */
export type TypeCyoaDecision<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeCyoaDecisionSkeleton, Modifiers, Locales>;

export function isTypeCyoaDecision<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry:
    | Entry<EntrySkeletonType, Modifiers, Locales>
    | NonNullable<TypeCyoaPageFields["choice"]>[number],
): entry is TypeCyoaDecision<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "cyoaDecision";
}

/**
 * Fields type definition for content type 'TypeCyoaPage'
 * @name TypeCyoaPageFields
 * @type {TypeCyoaPageFields}
 * @memberof TypeCyoaPage
 */
export interface TypeCyoaPageFields {
  /**
   * Field type definition for field 'title' (Title)
   * @name Title
   * @localized false
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'content' (Content)
   * @name Content
   * @localized false
   */
  content?: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'choice' (Choice)
   * @name Choice
   * @localized false
   */
  choice?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeCyoaDecisionSkeleton>
  >;
}

/**
 * Entry skeleton type definition for content type 'cyoaPage' (CYOA Page)
 * @name TypeCyoaPageSkeleton
 * @type {TypeCyoaPageSkeleton}
 * @author 5e2VbtKbHE7Nfq03Ndv3a9
 * @since 2024-05-22T21:33:47.129Z
 * @version 3
 */
export type TypeCyoaPageSkeleton = EntrySkeletonType<
  TypeCyoaPageFields,
  "cyoaPage"
>;
/**
 * Entry type definition for content type 'cyoaPage' (CYOA Page)
 * @name TypeCyoaPage
 * @type {TypeCyoaPage}
 * @author Ryan Spencer<rspencer@bitovi.com>
 * @since 2024-05-22T21:33:47.129Z
 * @version 3
 * @link https://app.contentful.com/spaces/be7s6bfvlrix/environments/master/content_types/cyoaPage
 */
export type TypeCyoaPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeCyoaPageSkeleton, Modifiers, Locales>;

export function isTypeCyoaPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeCyoaPage<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "cyoaPage";
}

/**
 * Fields type definition for content type 'TypeCyoaStory'
 * @name TypeCyoaStoryFields
 * @type {TypeCyoaStoryFields}
 * @memberof TypeCyoaStory
 */
export interface TypeCyoaStoryFields {
  /**
   * Field type definition for field 'title' (Title)
   * @name Title
   * @localized false
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'entryPage' (Entry Page)
   * @name Entry Page
   * @localized false
   */
  entryPage?: EntryFieldTypes.EntryLink<TypeCyoaPageSkeleton>;
  /**
   * Field type definition for field 'description' (Description)
   * @name Description
   * @localized false
   */
  description?: EntryFieldTypes.RichText;
}

/**
 * Entry skeleton type definition for content type 'cyoaStory' (CYOA Story)
 * @name TypeCyoaStorySkeleton
 * @type {TypeCyoaStorySkeleton}
 * @author 5e2VbtKbHE7Nfq03Ndv3a9
 * @since 2024-05-22T21:27:49.147Z
 * @version 5
 */
export type TypeCyoaStorySkeleton = EntrySkeletonType<
  TypeCyoaStoryFields,
  "cyoaStory"
>;
/**
 * Entry type definition for content type 'cyoaStory' (CYOA Story)
 * @name TypeCyoaStory
 * @type {TypeCyoaStory}
 * @author Ryan Spencer<rspencer@bitovi.com>
 * @since 2024-05-22T21:27:49.147Z
 * @version 5
 * @link https://app.contentful.com/spaces/be7s6bfvlrix/environments/master/content_types/cyoaStory
 */
export type TypeCyoaStory<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeCyoaStorySkeleton, Modifiers, Locales>;

export function isTypeCyoaStory<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
>(
  entry: Entry<EntrySkeletonType, Modifiers, Locales>,
): entry is TypeCyoaStory<Modifiers, Locales> {
  return entry.sys.contentType.sys.id === "cyoaStory";
}

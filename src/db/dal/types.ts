interface ListFilters {
    isDeleted?: boolean;
    includeDeleted?: boolean;
}
export interface GetAllVideosFilters extends ListFilters {};
export interface GetAllReviewsFilters extends ListFilters {
    isPublished?: boolean
    isNotPublished?: boolean
}
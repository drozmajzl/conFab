class CommentsController < ApplicationController
    def create
        comment = Comment.create!(comment_params)
        render json: comment
    end

    def update
      comment = Comment.find_by!(id: params[:id])
        comment.update(comment_params)
        if comment.valid?
        render json: comment, status: :ok
        else 
        render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def comment_params
        params.permit(:user_id, :track_id, :comment, :likes)
      end
end

import React, { useMemo } from 'react';
import * as Styled from './Comment.styles';
import { IComment } from '../../types/redux/comments-reducer-types';
import Image from 'next/image';

/**
 * @function Comment
 * @param {string} author - author name
 * @param {string} comment - comment text
 * @param {string} createdAt - timestamp when comment was written
 * @returns {JSX.Element} - Rendered Comment component
 */
const Comment = ({ comment, createdAt, author }: IComment): JSX.Element => {
  // Generate a consistent avatar number for each author
  const avatarNumber = useMemo(() => {
    const sum = author
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return (sum % 11) + 1; // Ensures number between 1 and 11
  }, [author]);

  // Format the date nicely
  const formattedDate = useMemo(() => {
    return new Date(createdAt).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }, [createdAt]);

  return (
    <Styled.Container>
      <Styled.Figure>
        <Styled.Date>{formattedDate}</Styled.Date>

        <Image
          src={`/assets/avatars/${avatarNumber}.png`}
          width={150}
          height={150}
          style={{ objectFit: 'contain' }}
          alt={author}
          priority
        />

        <Styled.Figcaption>
          <Styled.Name>{author}</Styled.Name>
        </Styled.Figcaption>
      </Styled.Figure>

      <Styled.CommentWrapper>
        <Styled.Text>{comment}</Styled.Text>
      </Styled.CommentWrapper>
    </Styled.Container>
  );
};

export default Comment;

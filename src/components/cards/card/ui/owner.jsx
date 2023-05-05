import { BsFillChatSquareTextFill } from 'react-icons/bs';

function Owner({ avatar, ownerName, email }) {
  return (
    <div className="venue-owner my-4">
      <div className="venue-owner-container d-flex">
        {avatar && (
          <img
            src={avatar}
            alt={ownerName}
            width={42}
            height={42}
            className="rounded-circle me-2"
          />
        )}
        <div className="venue-owner-info">
          <div>
            <p className="my-0 text-capitalize">{ownerName}</p>
            <p className="mt-1" style={{ color: 'var(--color-lightgray)' }}>
              Property owner
            </p>
          </div>
          <a className="venue-owner-info-mail mt-1" href={`mailto:${email}`}>
            <BsFillChatSquareTextFill />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Owner;

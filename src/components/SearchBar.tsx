import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <InputGroup mb={6}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.400" />
      </InputLeftElement>

      <Input
        placeholder="Search study tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        bg="white"
        h="52px"
        borderRadius="14px"
        border="1px solid"
        borderColor="gray.200"
        fontSize="15px"
        _hover={{
          borderColor: "#2563EB",
        }}
        _focus={{
          borderColor: "#2563EB",
          boxShadow: "0 0 0 1px #2563EB",
        }}
      />
    </InputGroup>
  );
}
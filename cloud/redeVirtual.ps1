$group = @{
Name = “Automacaogroup”
Location = “brazilsouth”
}
New-AzResourceGroup @group

$rv = @{
Name = “redevirtual-aut”
ResourceGroupName = “Automacaogroup”
Location = “brazilsouth”
AddressPrefix = “10.1.0.0/16”
}
$redevirtual = New-AzVirtualNetwork @rv